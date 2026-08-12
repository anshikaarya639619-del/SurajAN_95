const products = [
    { title: "UPSC Polity Masterclass Pro", category: "upsc", desc: "Fundamental Rights & Advanced Core Concepts PDF.", price: "₹399", badge: "PRO PDF" },
    { title: "GK & History Tick-Mark Test", category: "gk", desc: "OMR style practice sheet with 100+ important questions.", price: "₹79", badge: "GK QUIZ" },
    { title: "NDA Math Shortcut Tricks", category: "upsc", desc: "High-yield formulas and speed calculation methods.", price: "₹199", badge: "DEFENCE" },
    { title: "Class 10 Science Visual Notes", category: "school", desc: "Kid-friendly illustrated concepts with quick revision boxes.", price: "₹49", badge: "SCHOOL" }
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
            <div class="card-footer">
                <span class="price">${p.price}</span>
                <button class="buy-btn" onclick="alert('Redirecting to Secure Checkout...')">Buy Now</button>
            </div>
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
      
