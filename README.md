# EVERYTHING WORLD

A mobile-first knowledge platform for education, travel, skills, science, technology, culture, and useful everyday tools.

## Live website

- Home: https://anshikaarya639619-del.github.io/SurajAN_95/
- Command Center: https://anshikaarya639619-del.github.io/SurajAN_95/dashboard.html
- Education: https://anshikaarya639619-del.github.io/SurajAN_95/education.html
- AI & Technology: https://anshikaarya639619-del.github.io/SurajAN_95/technology.html
- Free Tools: https://anshikaarya639619-del.github.io/SurajAN_95/tools.html

## Automation currently installed

1. **GitHub Pages deployment** — runs on pushes to `main`, can be started manually, and has a daily scheduled deployment attempt.
2. **Public site health check** — checks the home page, dashboard, education, technology, tools, 404 page, and shared stylesheet for HTTP 200. Runs daily and when its workflow file changes.
3. **Repository build validation** — checks HTML page titles, meta descriptions (warning-only), local links, local stylesheets, and sitemap XML. Runs on relevant pushes, pull requests, manually, and daily.

Workflow files:
- `.github/workflows/deploy-pages.yml`
- `.github/workflows/site-health.yml`
- `.github/workflows/build-validation.yml`

Validator: `scripts/validate_site.py`

## What this does — and does not do

- These workflows run on GitHub-hosted runners; they do not keep an always-on server running continuously.
- Scheduled GitHub Actions runs can be delayed or skipped by platform conditions. They are not a 24/7 uptime guarantee.
- Health checks detect basic HTTP failures. They do not test every browser interaction or guarantee a good visual rendering.
- The repository currently does **not** contain a connected AI publishing pipeline, payment/checkout integration, customer database, ad/affiliate account integration, revenue tracking, or an automated revenue-generating business.
- No revenue, rankings, or audience growth are guaranteed.
- Free tools first; do not add paid services or secret credentials without explicit authorization.

## Product principles

- Mobile-first; Hindi and English first.
- Original, useful, reviewed content.
- Privacy-conscious and accessible.
- Measure real outcomes; do not label an untested feature as ready.
