const products = [
    { title: "UPSC Polity Masterclass Pro", category: "upsc", desc: "Fundamental Rights & Advanced Core Concepts PDF.", price: "₹399", badge: "PRO PDF", demoLink: "samples/upsc_demo.pdf" },
    { title: "GK & History Tick-Mark Test", category: "gk", desc: "OMR style practice sheet with 100+ important questions.", price: "₹79", badge: "GK QUIZ", demoLink: "samples/gk_demo.pdf" },
    { title: "NDA Math Shortcut Tricks", category: "upsc", desc: "High-yield formulas and speed calculation methods.", price: "₹199", badge: "DEFENCE", demoLink: "samples/nda_demo.pdf" },
    { title: "Class 10 Science Visual Notes", category: "school", desc: "Kid-friendly illustrated concepts with quick revision boxes.", price: "₹49", badge: "SCHOOL", demoLink: "samples/school_demo.pdf" }
];

function displayProducts(filter = 'all') {
    const grid = document.getElementById('productGrid');
    grid.innerHTML = "";

    const filtered = filter === 'all' ? products : products.filter(p => p.category === filter);

    filtered.forEach(p => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <span class="badge">${p.badge}</span>
            <h3 class="product-title">${p.title}</h3>
            <p class="product-desc">${p.desc}</p>
            <div class="card-footer" style="margin-bottom: 12px;">
                <span class="price">${p.price}</span>
                <button class="buy-btn" onclick="alert('Redirecting to Secure Checkout...')">Buy Full PDF</button>
            </div>
            <button class="demo-btn" onclick="alert('Downloading 1-2 Chapters Free Demo...')">📥 Download Free Demo (Chapters 1-2)</button>
        `;
        grid.appendChild(card);
    });
}

function filterCategory(category) {
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    displayProducts(category);
}

// Initial Load
displayProducts();
      
