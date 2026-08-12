const products = [
    { title: "UPSC Polity Masterclass Pro", category: "upsc", desc: "Fundamental Rights & Advanced Core Concepts PDF.", price: "₹399", originalPrice: "₹1,999", badge: "PRO PDF", link: "https://rzp.io/l/your-payment-link" },
    { title: "GK & History Tick-Mark Test", category: "gk", desc: "OMR style practice sheet with 100+ important questions.", price: "₹79", originalPrice: "₹499", badge: "GK QUIZ", link: "https://rzp.io/l/your-payment-link" },
    { title: "NDA Math Shortcut Tricks", category: "upsc", desc: "High-yield formulas and speed calculation methods.", price: "₹199", originalPrice: "₹999", badge: "DEFENCE", link: "https://rzp.io/l/your-payment-link" },
    { title: "Class 10 Science Visual Notes", category: "school", desc: "Kid-friendly illustrated concepts with quick revision boxes.", price: "₹49", originalPrice: "₹299", badge: "SCHOOL", link: "https://rzp.io/l/your-payment-link" }
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
                <div class="price-box">
                    <span class="original-price">${p.originalPrice}</span>
                    <div class="price">${p.price}</div>
                </div>
                <button class="buy-btn" onclick="window.location.href='${p.link}'">Buy Full PDF</button>
            </div>
            <button class="demo-btn" onclick="alert('📥 Downloading Free Chapters 1-2 Demo...')">📥 Download Free Demo (Chapters 1-2)</button>
        `;
        grid.appendChild(card);
    });
}

function filterCategory(category) {
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    displayProducts(category);
}

// Flash Sale Countdown Timer
let time = 14 * 60 + 59;
setInterval(() => {
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;
    const timerElement = document.getElementById('timer');
    if(timerElement) {
        timerElement.innerText = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    }
    if (time > 0) time--;
}, 1000);

// Initial Load
displayProducts();
      
