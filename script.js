const products = [
    { title: "UPSC Polity Masterclass Pro", category: "upsc", desc: "Fundamental Rights & Advanced Core Concepts PDF.", price: "₹49", originalPrice: "₹1,999", badge: "PRO PDF", link: "https://rzp.io/l/your-payment-link" },
    { title: "Flipkart Empire Blueprint", category: "hustler", desc: "0 Rs me e-commerce company khada karne ka secret formula.", price: "₹49", originalPrice: "₹2,499", badge: "BUSINESS", link: "https://rzp.io/l/your-payment-link" },
    { title: "Charisma & Mindset Mastery", category: "charisma", desc: "How to win friends & influence people instantly.", price: "₹49", originalPrice: "₹999", badge: "MINDSET", link: "https://rzp.io/l/your-payment-link" },
    { title: "1M Views in 30 Days Viral Code", category: "hustler", desc: "Instagram & YouTube Shorts algorithm breaking secrets.", price: "₹49", originalPrice: "₹1,499", badge: "VIRAL", link: "https://rzp.io/l/your-payment-link" },
    { title: "Advanced Prompt Engineering Guide", category: "hustler", desc: "AI se 100x speed par kaam karane ka masterclass.", price: "₹49", originalPrice: "₹1,999", badge: "AI PRO", link: "https://rzp.io/l/your-payment-link" },
    { title: "Nature & Wildlife Secrets", category: "nature", desc: "Janvaro ki duniya aur 1-1 ped ki dekhbhal ka complete guide.", price: "₹49", originalPrice: "₹999", badge: "NATURE", link: "https://rzp.io/l/your-payment-link" },
    { title: "NDA & Class 12 Math Speed Hacks", category: "upsc", desc: "High-yield formulas and lightning-fast calculation tricks.", price: "₹49", originalPrice: "₹1,299", badge: "DEFENCE", link: "https://rzp.io/l/your-payment-link" },
    { title: "Relationship & Dating Mastery", category: "charisma", desc: "The ultimate psychological guide to deep connections.", price: "₹49", originalPrice: "₹1,499", badge: "MASTERY", link: "https://rzp.io/l/your-payment-link" }
];

function displayProducts(filter = 'all') {
    const grid = document.getElementById('productGrid');
    if (!grid) return;
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
            <button class="demo-btn" onclick="alert('📥 Instant Download Unlocked!')">⚡ Instant Secure Delivery</button>
        `;
        grid.appendChild(card);
    });
}

function filterCategory(category) {
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    if(event && event.target) event.target.classList.add('active');
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
     
