#!/usr/bin/env python3
"""Validate the static EVERYTHING WORLD site before publishing."""
from pathlib import Path
from html.parser import HTMLParser
import sys
import xml.etree.ElementTree as ET

ROOT = Path(__file__).resolve().parents[1]
HTML_FILES = sorted(ROOT.glob("*.html"))
errors = []
warnings = []
checked_links = 0

class PageParser(HTMLParser):
    def __init__(self):
        super().__init__()
        self.title = False
        self.in_title = False
        self.description = False
        self.stylesheets = []
        self.local_links = []
        self.has_watermark = False
    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if tag == "title":
            self.in_title = True
        if tag == "meta" and attrs.get("name", "").lower() == "description" and attrs.get("content", "").strip():
            self.description = True
        if tag == "link" and "stylesheet" in attrs.get("rel", "").lower().split():
            self.stylesheets.append(attrs.get("href", ""))
        if tag == "a" and attrs.get("href"):
            self.local_links.append(attrs["href"])
        if attrs.get("class") and "sa-signature" in attrs.get("class", "").split():
            self.has_watermark = True
    def handle_endtag(self, tag):
        if tag == "title":
            self.in_title = False
    def handle_data(self, data):
        if self.in_title and data.strip():
            self.title = True

for page in HTML_FILES:
    parser = PageParser()
    try:
        parser.feed(page.read_text(encoding="utf-8"))
    except Exception as exc:
        errors.append(f"{page.name}: HTML parser error: {exc}")
        continue
    if not parser.title:
        errors.append(f"{page.name}: missing or empty <title>")
    if not parser.description:
        warnings.append(f"{page.name}: missing meta description")
    if not parser.has_watermark:
        warnings.append(f"{page.name}: watermark class .sa-signature not found in markup")
    for href in parser.stylesheets:
        if not href or href.startswith(("https://", "http://", "//", "data:")):
            continue
        target = (page.parent / href.split("?", 1)[0].split("#", 1)[0]).resolve()
        if not target.exists():
            errors.append(f"{page.name}: stylesheet missing: {href}")
    for href in parser.local_links:
        href = href.strip()
        if not href or href.startswith(("#", "mailto:", "tel:", "javascript:", "https://", "http://", "//")):
            continue
        target_part = href.split("?", 1)[0].split("#", 1)[0]
        # GitHub Pages project sites are hosted below /<repository-name>/.
        # Map that public URL prefix back to this repository's root.
        if target_part.startswith("/SurajAN_95/"):
            target_part = target_part[len("/SurajAN_95/"):]
        elif target_part == "/SurajAN_95":
            target_part = ""
        elif target_part.startswith("/"):
            target_part = target_part.lstrip("/")
        if not target_part:
            target = ROOT
        else:
            target = (ROOT / target_part).resolve()
        checked_links += 1
        if not target.exists():
            errors.append(f"{page.name}: local link target missing: {href}")

sitemap = ROOT / "sitemap.xml"
if sitemap.exists():
    try:
        ET.parse(sitemap)
    except ET.ParseError as exc:
        errors.append(f"sitemap.xml: invalid XML: {exc}")
else:
    warnings.append("sitemap.xml: file not found")

summary = []
summary.append("# EVERYTHING WORLD — build validation")
summary.append("")
summary.append(f"- HTML pages checked: **{len(HTML_FILES)}**")
summary.append(f"- Local links checked: **{checked_links}**")
summary.append(f"- Errors: **{len(errors)}**")
summary.append(f"- Warnings: **{len(warnings)}**")
if errors:
    summary.extend(["", "## Errors"] + [f"- {item}" for item in errors])
if warnings:
    summary.extend(["", "## Warnings"] + [f"- {item}" for item in warnings])
summary.extend(["", "This validates repository files only; it does not prove browser rendering, search ranking, revenue, or 24/7 uptime."])
report = "\n".join(summary) + "\n"
print(report)
summary_path = Path(__import__("os").environ.get("GITHUB_STEP_SUMMARY", "/tmp/site-validation-summary.md"))
summary_path.write_text(report, encoding="utf-8")
if errors:
    sys.exit(1)
