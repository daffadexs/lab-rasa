/* ==========================================================================
   1. DATA KELOLA MENU (12 Menu Pilihan UMKM Lab Rasa)
   ========================================================================== */
const menuData = [
    {
        id: 1,
        title: "Ayam Geprek Nitro Pedas",
        category: "pedas",
        price: 22000,
        image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=600&q=80",
        desc: "Ayam krispi renyah digeprek dengan sambal cabai rawit merah segar racikan laboratorium rasa.",
        ingredients: "Ayam segar, Cabai Rawit Merah, Bawang Putih, Minyak Rempah"
    },
    {
        id: 2,
        title: "Roti Bakar Caramel Choco",
        category: "manis",
        price: 18000,
        image: "https://images.unsplash.com/photo-1584776296944-ab6fb57b0bdd?auto=format&fit=crop&w=600&q=80",
        desc: "Roti tebal bakar mentega dengan lelehan saus karamel legit dan keju melimpah.",
        ingredients: "Roti Bandung, Keju Cheddar, Caramel Sauce, Cokelat Premium"
    },
    {
        id: 3,
        title: "Rice Bowl Beef Mentai",
        category: "asin",
        price: 28000,
        image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80",
        desc: "Nasi hangat dengan irisan daging sapi gurih disiram saus mentai krimer yang dibakar (torched).",
        ingredients: "Daging Sapi US Slice, Saus Mentai, Nasi Jepang, Nori"
    },
    {
        id: 4,
        title: "Es Passion Mango Blast",
        category: "segar",
        price: 15000,
        image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=600&q=80",
        desc: "Perpaduan kesegaran buah mangga manis dan markisa asam dingin memanjakan dahaga.",
        ingredients: "Ekstrak Mangga Asli, Markisa, Es Batu, Bulir Jeruk"
    },
    {
        id: 5,
        title: "Mie Seblak Mercon Monster",
        category: "pedas",
        price: 20000,
        image: "https://images.unsplash.com/photo-1555126634-323283e090fa?auto=format&fit=crop&w=600&q=80",
        desc: "Seblak kenyal kuah rempah kencur pedas level tinggi dengan topping baso & sosis.",
        ingredients: "Kerupuk, Kencur, Cabai Rawit, Sosis, Bakso, Telur"
    },
    {
        id: 6,
        title: "Pancake Berry Laboratory",
        category: "manis",
        price: 24000,
        image: "https://images.unsplash.com/photo-1528207776546-365bb710ee93?auto=format&fit=crop&w=600&q=80",
        desc: "Pancake lembut dengan topping sirup blueberry alami dan es krim vanilla dingin.",
        ingredients: "Pancake Fluffy, Blueberry Sauce, Ice Cream Vanilla"
    },
    {
        id: 7,
        title: "Kentang Goreng Truffle Salted",
        category: "asin",
        price: 17000,
        image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=600&q=80",
        desc: "French fries renyah bertabur garam gurih & sensasi aroma minyak truffle mewah.",
        ingredients: "Kentang Impor, Garam Laut, Truffle Oil, Parsley"
    },
    {
        id: 8,
        title: "Es Boba Brown Sugar Fresh",
        category: "segar",
        price: 18000,
        image: "https://images.unsplash.com/photo-1558857563-b371033873b8?auto=format&fit=crop&w=600&q=80",
        desc: "Susu murni dingin dicampur boba kenyal dan gula aren asli yang dilelehkan.",
        ingredients: "Susu Segar, Boba Tapioka, Gula Aren Premium"
    },
    {
        id: 9,
        title: "Cumi Saus Padang Explosive",
        category: "pedas",
        price: 32000,
        image: "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=600&q=80",
        desc: "Cumi-cumi empuk disiram saus padang kental rasa pedas manis asam membakar lidah.",
        ingredients: "Cumi Segar, Bumbu Saus Padang, Jagung Manis, Cabai"
    },
    {
        id: 10,
        title: "Waffle Matcha Delight",
        category: "manis",
        price: 22000,
        image: "https://images.unsplash.com/photo-1562376552-0d160a2f238d?auto=format&fit=crop&w=600&q=80",
        desc: "Waffle renyah di luar lembut di dalam dengan glazed teh hijau matcha asli Jepang.",
        ingredients: "Waffle Powder, Matcha Paste, White Chocolate, Almond"
    },
    {
        id: 11,
        title: "Chicken Wings Garlic Parmesan",
        category: "asin",
        price: 26000,
        image: "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?auto=format&fit=crop&w=600&q=80",
        desc: "Kepakan sayap ayam goreng balut bumbu gurih bawang putih dan taburan keju parmesan.",
        ingredients: "Sayap Ayam, Bawang Putih, Keju Parmesan, Butter"
    },
    {
        id: 12,
        title: "Mojito Lime Mint Chill",
        category: "segar",
        price: 16000,
        image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=600&q=80",
        desc: "Minuman soda dingin dengan perasan jeruk nipis dan remasan daun mint asli.",
        ingredients: "Soda Water, Jeruk Nipis, Daun Mint, Simple Syrup"
    }
];

/* State Keranjang Belanja */
let cart = [];

/* ==========================================================================
   2. DOM ELEMENTS SELECTION
   ========================================================================== */
const menuGrid = document.getElementById('menuGrid');
const filterBtns = document.querySelectorAll('.filter-btn');
const searchInput = document.getElementById('searchInput');

const cartToggle = document.getElementById('cartToggle');
const cartDrawer = document.getElementById('cartDrawer');
const cartOverlay = document.getElementById('cartOverlay');
const cartClose = document.getElementById('cartClose');
const cartItemsContainer = document.getElementById('cartItems');
const cartCount = document.getElementById('cartCount');
const cartTotalPrice = document.getElementById('cartTotalPrice');
const checkoutBtn = document.getElementById('checkoutBtn');

const modal = document.getElementById('menuModal');
const modalOverlay = document.getElementById('modalOverlay');
const modalClose = document.getElementById('modalClose');
const modalBody = document.getElementById('modalBody');

const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

/* ==========================================================================
   3. LOGIK RENDER & FILTER MENU
   ========================================================================== */
function formatRupiah(number) {
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(number);
}

function renderMenu(items) {
    menuGrid.innerHTML = '';
    
    if (items.length === 0) {
        menuGrid.innerHTML = `<p style="grid-column: 1/-1; text-align:center; color: var(--text-muted); padding: 40px 0;">Menu yang Anda cari tidak ditemukan...</p>`;
        return;
    }

    items.forEach(item => {
        const card = document.createElement('div');
        card.className = 'menu-card';
        card.innerHTML = `
            <div class="card-img-wrapper" onclick="openModal(${item.id})">
                <img src="${item.image}" alt="${item.title}" loading="lazy">
                <span class="flavor-badge bg-${item.category}">${item.category}</span>
            </div>
            <div class="card-body">
                <h3 class="card-title" onclick="openModal(${item.id})" style="cursor:pointer">${item.title}</h3>
                <p class="card-desc">${item.desc}</p>
                <div class="card-footer">
                    <span class="card-price">${formatRupiah(item.price)}</span>
                    <button class="add-cart-btn" onclick="addToCart(${item.id})" aria-label="Tambah ke keranjang">
                        <i class="fa-solid fa-plus"></i>
                    </button>
                </div>
            </div>
        `;
        menuGrid.appendChild(card);
    });
}

function filterMenu() {
    const activeFilter = document.querySelector('.filter-btn.active').dataset.filter;
    const searchTerm = searchInput.value.toLowerCase().trim();

    const filtered = menuData.filter(item => {
        const matchCategory = (activeFilter === 'all') || (item.category === activeFilter);
        const matchSearch = item.title.toLowerCase().includes(searchTerm) || item.desc.toLowerCase().includes(searchTerm);
        return matchCategory && matchSearch;
    });

    renderMenu(filtered);
}

// Event Handler Filter & Search
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        filterMenu();
    });
});

searchInput.addEventListener('input', filterMenu);

/* ==========================================================================
   4. SHOPPING CART LOGIC
   ========================================================================== */
function addToCart(id) {
    const item = menuData.find(m => m.id === id);
    const existingIndex = cart.findIndex(c => c.id === id);

    if (existingIndex > -1) {
        cart[existingIndex].qty += 1;
    } else {
        cart.push({ ...item, qty: 1 });
    }

    updateCartUI();
    openCart();
}

function updateQty(id, delta) {
    const index = cart.findIndex(c => c.id === id);
    if (index > -1) {
        cart[index].qty += delta;
        if (cart[index].qty <= 0) {
            cart.splice(index, 1);
        }
    }
    updateCartUI();
}

function updateCartUI() {
    cartItemsContainer.innerHTML = '';
    let total = 0;
    let count = 0;

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = `<p style="text-align:center; color: var(--text-muted); padding:20px;">Tabung pesanan masih kosong.</p>`;
    } else {
        cart.forEach(item => {
            total += item.price * item.qty;
            count += item.qty;

            const cartItemEl = document.createElement('div');
            cartItemEl.className = 'cart-item';
            cartItemEl.innerHTML = `
                <img src="${item.image}" alt="${item.title}">
                <div class="cart-item-info">
                    <h4>${item.title}</h4>
                    <p>${formatRupiah(item.price)}</p>
                </div>
                <div class="cart-qty-control">
                    <button onclick="updateQty(${item.id}, -1)">-</button>
                    <span>${item.qty}</span>
                    <button onclick="updateQty(${item.id}, 1)">+</button>
                </div>
            `;
            cartItemsContainer.appendChild(cartItemEl);
        });
    }

    cartCount.textContent = count;
    cartTotalPrice.textContent = formatRupiah(total);
}

function openCart() { document.body.classList.add('cart-open'); }
function closeCart() { document.body.classList.remove('cart-open'); }

cartToggle.addEventListener('click', openCart);
cartClose.addEventListener('click', closeCart);
cartOverlay.addEventListener('click', closeCart);

/* Checkout ke WhatsApp Direct */
checkoutBtn.addEventListener('click', () => {
    if (cart.length === 0) {
        alert('Silakan pilih menu terlebih dahulu!');
        return;
    }

    let message = "Halo *Lab Rasa*, saya ingin pesan menu berikut:\n\n";
    let total = 0;

    cart.forEach((item, index) => {
        const subtotal = item.price * item.qty;
        total += subtotal;
        message += `${index + 1}. *${item.title}* (${item.qty}x) = ${formatRupiah(subtotal)}\n`;
    });

    message += `\n*Total Biaya:* ${formatRupiah(total)}`;
    message += `\n\nMohon konfirmasi ketersediaan & alamat pengiriman. Terima kasih!`;

    const encodedMsg = encodeURIComponent(message);
    const waNumber = "6281234567890";
    window.open(`https://wa.me/${waNumber}?text=${encodedMsg}`, '_blank');
});

/* ==========================================================================
   5. MODAL DETAIL MENU LOGIC
   ========================================================================== */
function openModal(id) {
    const item = menuData.find(m => m.id === id);
    modalBody.innerHTML = `
        <div class="modal-body-content">
            <img src="${item.image}" alt="${item.title}">
            <span class="flavor-badge bg-${item.category}" style="display:inline-block; margin-bottom:10px;">${item.category}</span>
            <h2>${item.title}</h2>
            <h3 style="color:var(--segar); margin: 10px 0;">${formatRupiah(item.price)}</h3>
            <p style="color:var(--text-muted); margin-bottom:15px;">${item.desc}</p>
            <div style="background:rgba(255,255,255,0.05); padding:12px; border-radius:8px; font-size:0.85rem; margin-bottom:20px;">
                <strong>Komposisi Formula:</strong><br>
                <span style="color:var(--text-muted);">${item.ingredients}</span>
            </div>
            <button class="btn btn-primary btn-block" onclick="addToCart(${item.id}); closeModal();">
                <i class="fa-solid fa-cart-plus"></i> Tambah ke Pesanan
            </button>
        </div>
    `;
    modal.classList.add('active');
}

function closeModal() { modal.classList.remove('active'); }

modalClose.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', closeModal);

/* ==========================================================================
   6. NAVBAR ACTIVE STATE, SCROLLSPY & MOBILE MENU
   ========================================================================== */
const sections = document.querySelectorAll('section[id]');
const navLinksItems = document.querySelectorAll('.nav-links .nav-item');

// Toggle Hamburger Menu versi Mobile
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Pindah indikator warna putih saat menu diklik
navLinksItems.forEach(link => {
    link.addEventListener('click', function() {
        navLinksItems.forEach(item => item.classList.remove('active'));
        this.classList.add('active');
        navLinks.classList.remove('active');
    });
});

// Pindah indikator warna putih otomatis saat scroll (Scrollspy)
window.addEventListener('scroll', () => {
    let scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 150;
        const sectionId = current.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinksItems.forEach(item => {
                item.classList.remove('active');
                if (item.getAttribute('href') === `#${sectionId}`) {
                    item.classList.add('active');
                }
            });
        }
    });
});

// Render Awal Menu
document.addEventListener('DOMContentLoaded', () => {
    renderMenu(menuData);
});