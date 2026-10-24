/* =====================================================
   GENERAL TRADER — Landing Page App
   Product Data + Filter + Search + WhatsApp Checkout
   ===================================================== */

// ─── WhatsApp Config ───
const WA_NUMBER = "6281215934380";

// ─── Product Data (Extracted from Shopee Store) ───
const PRODUCTS = [
  {
    id: 1,
    name: "40 Ribu Dapat 3 Pcs Broadshort Pendek Casual Distro Santai Nyaman Katun",
    price: 30951,
    originalPrice: 93787,
    discount: 67,
    rating: 4.5,
    sold: "10RB+",
    category: "celana-pendek",
    tags: ["terlaris", "paket-3pcs"],
    image: "assets/img/product-1.jpg",
    sizes: ["M", "L", "XL", "XXL"],
    features: ["Bahan katun adem", "3 ukuran tersedia"]
  },
  {
    id: 2,
    name: "Paket Hemat 40 Rb Dapat 3 Pcs Boardshort Celana Pendek Pantai Boxer Pria Wanita",
    price: 36000,
    originalPrice: 124137,
    discount: 71,
    rating: 4.6,
    sold: "2RB+",
    category: "celana-pendek",
    tags: ["paket-3pcs"],
    image: "assets/img/product-2.jpg",
    sizes: ["M", "L", "XL", "XXL"],
    features: ["Ukuran pas!", "Warna ceria!"]
  },
  {
    id: 3,
    name: "Paket 3 Pcs Celana Pendek Pria Distro Boardshort Tali Karet Pinggang Santai Polos Original",
    price: 36000,
    originalPrice: 124137,
    discount: 71,
    rating: 4.6,
    sold: "8RB+",
    category: "celana-pendek",
    tags: ["terlaris", "paket-3pcs"],
    image: "assets/img/product-1.jpg",
    sizes: ["M", "L", "XL", "XXL"],
    features: ["Warna ceria acak!", "Tersedia 3 ukuran"]
  },
  {
    id: 4,
    name: "Paket 40 Rb Dapat 3 Celana Pendek Broadshort Pria Distro Short Pants",
    price: 36000,
    originalPrice: 124137,
    discount: 71,
    rating: 4.6,
    sold: "2RB+",
    category: "celana-pendek",
    tags: ["paket-3pcs"],
    image: "assets/img/product-3.jpg",
    sizes: ["M", "L", "XL", "XXL"],
    features: ["Tersedia 3 ukuran", "Nyaman dipakai!"]
  },
  {
    id: 5,
    name: "40 Ribu Dapat 3 Pcs Broadshort Pendek Casual Distro — Varian Warna Baru",
    price: 34716,
    originalPrice: 108487,
    discount: 68,
    rating: 4.5,
    sold: "315",
    category: "celana-pendek",
    tags: ["paket-3pcs"],
    image: "assets/img/product-2.jpg",
    sizes: ["M", "L", "XL", "XXL"],
    features: ["Bahan katun adem", "Tersedia 3 ukuran"]
  },
  {
    id: 6,
    name: "Paket 40 Rb Dapat 3 Celana Pendek Pria Boardshort Shortpants Pantai Distro Santai",
    price: 41675,
    originalPrice: 106859,
    discount: 61,
    rating: 4.7,
    sold: "233",
    category: "celana-pendek",
    tags: ["paket-3pcs"],
    image: "assets/img/product-1.jpg",
    sizes: ["M", "L", "XL", "XXL"],
    features: ["Warna random", "Tersedia 3 ukuran"]
  },
  {
    id: 7,
    name: "Paket 5 Pcs Celana Pendek Broadshort Pria Distro Short Pants Premium",
    price: 78200,
    originalPrice: 156400,
    discount: 50,
    rating: 4.5,
    sold: "108",
    category: "celana-pendek",
    tags: ["paket-5pcs"],
    image: "assets/img/product-2.jpg",
    sizes: ["M", "L", "XL", "XXL"],
    features: ["Bahan katun adem", "Pinggang elastis"]
  },
  {
    id: 8,
    name: "Celana Pendek Pria Katun Nyaman Dewasa Premium Quality",
    price: 51000,
    originalPrice: 127500,
    discount: 60,
    rating: 4.4,
    sold: "89",
    category: "celana-pendek",
    tags: [],
    image: "assets/img/product-3.jpg",
    sizes: ["L", "XL", "XXL"],
    features: ["Bahan katun premium", "Nyaman seharian"]
  },
  {
    id: 9,
    name: "Celana Pendek Boardshort Boxer Pantai Premium Pria Wanita Unisex",
    price: 51000,
    originalPrice: 127500,
    discount: 60,
    rating: 4.5,
    sold: "76",
    category: "celana-pendek",
    tags: [],
    image: "assets/img/product-2.jpg",
    sizes: ["M", "L", "XL", "XXL"],
    features: ["Unisex", "Cocok ke pantai"]
  },
  {
    id: 10,
    name: "Promo 5 Pcs Celana Pendek Unisex Termurah Celana Boxer Termurah",
    price: 34200,
    originalPrice: 68400,
    discount: 50,
    rating: 4.3,
    sold: "54",
    category: "celana-pendek",
    tags: ["paket-5pcs"],
    image: "assets/img/product-1.jpg",
    sizes: ["M", "L", "XL"],
    features: ["Harga termurah!", "Unisex"]
  },
  {
    id: 11,
    name: "5 Pcs Celana Pendek Pria Wanita Terbaru Populer All Size",
    price: 34200,
    originalPrice: 68400,
    discount: 50,
    rating: 4.4,
    sold: "42",
    category: "celana-pendek",
    tags: ["paket-5pcs"],
    image: "assets/img/product-2.jpg",
    sizes: ["All Size"],
    features: ["Terbaru!", "Populer"]
  },
  {
    id: 12,
    name: "Promo 5 Pcs Kaos Tani Kaos Basahan Kerja Lengan Panjang Kupluk Kaos Sawah Kebun",
    price: 54120,
    originalPrice: 131999,
    discount: 59,
    rating: 4.3,
    sold: "632",
    category: "kaos-kerja",
    tags: ["terlaris", "paket-5pcs"],
    image: "assets/img/product-4.jpg",
    sizes: ["All Size"],
    features: ["Desain stylish!", "Nyaman dipakai!"]
  },
  {
    id: 13,
    name: "100 Ribu 5 Pcs Kaos Basahan Kerja Lengan Panjang Untuk Ngarit Petani Sawah",
    price: 83025,
    originalPrice: 202499,
    discount: 59,
    rating: 4.4,
    sold: "20",
    category: "kaos-kerja",
    tags: ["paket-5pcs"],
    image: "assets/img/product-4.jpg",
    sizes: ["All Size"],
    features: ["Lengan panjang", "Motif menarik!"]
  },
  {
    id: 14,
    name: "Promo Terlaris 5 Pcs Kaos Tani Lengan Panjang Kupluk Anti Panas",
    price: 54120,
    originalPrice: 131999,
    discount: 59,
    rating: 4.6,
    sold: "192",
    category: "kaos-kerja",
    tags: ["terlaris", "paket-5pcs"],
    image: "assets/img/product-4.jpg",
    sizes: ["All Size"],
    features: ["Ideal untuk kerja", "Nyaman dipakai!"]
  },
  {
    id: 15,
    name: "Paket Hemat 5 Pcs Kaos Basahan Lengan Panjang Kaos Tani Kaos Kerja Proyek",
    price: 79704,
    originalPrice: 194399,
    discount: 59,
    rating: 4.4,
    sold: "51",
    category: "kaos-kerja",
    tags: ["paket-5pcs"],
    image: "assets/img/product-4.jpg",
    sizes: ["All Size"],
    features: ["Ideal untuk kerja", "Motif acak seru!"]
  },
  {
    id: 16,
    name: "Promo 100 Ribu Dapat 5 Pcs Kaos Basahan Kerja Lengan Panjang Kupluk",
    price: 54120,
    originalPrice: 131999,
    discount: 59,
    rating: 4.6,
    sold: "21",
    category: "kaos-kerja",
    tags: ["paket-5pcs"],
    image: "assets/img/product-4.jpg",
    sizes: ["All Size"],
    features: ["Anti panas", "Kupluk pelindung"]
  },
  {
    id: 17,
    name: "Terlaris 5 Pcs Kaos Basahan Kerja Motif Kata-Kata / Kaos Sawah Bertudung / Kaos Proyek",
    price: 54120,
    originalPrice: 131999,
    discount: 59,
    rating: 4.7,
    sold: "71",
    category: "kaos-kerja",
    tags: ["terlaris", "paket-5pcs"],
    image: "assets/img/product-4.jpg",
    sizes: ["All Size"],
    features: ["Motif sablon unik", "Bahan nyaman"]
  },
  {
    id: 18,
    name: "Paket 40 Rb Dapat 3 Celana Pendek Pria Distro Boardshort Nongkrong Santai",
    price: 42840,
    originalPrice: 107100,
    discount: 60,
    rating: 4.6,
    sold: "1",
    category: "celana-pendek",
    tags: ["paket-3pcs"],
    image: "assets/img/product-3.jpg",
    sizes: ["M", "L", "XL", "XXL"],
    features: ["Casual style", "Nyaman nongkrong"]
  }
];

// ─── State ───
let currentFilter = "semua";
let currentSort = "populer";
let searchQuery = "";

// ─── Utilities ───
function formatRupiah(num) {
  return "Rp" + num.toLocaleString("id-ID");
}

function renderStars(rating) {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5 ? 1 : 0;
  const empty = 5 - full - half;

  return "★".repeat(full) + (half ? "½" : "") + "☆".repeat(empty);
}

function parseSold(soldStr) {
  if (!soldStr) return 0;
  const s = soldStr.toString().toUpperCase().replace(/\+/g, "");

  if (s.includes("RB")) return parseFloat(s) * 1000;

  return parseInt(s) || 0;
}

// ─── Filtering & Sorting ───
function getFilteredProducts() {
  let filtered = [...PRODUCTS];

  // Category filter
  if (currentFilter === "celana-pendek") {
    filtered = filtered.filter(p => p.category === "celana-pendek");
  } else if (currentFilter === "kaos-kerja") {
    filtered = filtered.filter(p => p.category === "kaos-kerja");
  } else if (currentFilter === "terlaris") {
    filtered = filtered.filter(p => p.tags.includes("terlaris"));
  }

  // Search filter
  if (searchQuery.trim()) {
    const q = searchQuery.toLowerCase();
    filtered = filtered.filter(p =>
      p.name.toLowerCase().includes(q) ||
      p.features.some(f => f.toLowerCase().includes(q))
    );
  }

  // Sort
  switch (currentSort) {
    case "termurah":
      filtered.sort((a, b) => a.price - b.price);
      break;

    case "termahal":
      filtered.sort((a, b) => b.price - a.price);
      break;

    case "rating":
      filtered.sort((a, b) => b.rating - a.rating);
      break;

    case "terlaris":
      filtered.sort((a, b) => parseSold(b.sold) - parseSold(a.sold));
      break;

    default: // populer — use original order with terlaris first
      filtered.sort((a, b) => {
        const aBest = a.tags.includes("terlaris") ? 1 : 0;
        const bBest = b.tags.includes("terlaris") ? 1 : 0;
        return bBest - aBest || parseSold(b.sold) - parseSold(a.sold);
      });
  }

  return filtered;
}

// ─── Render Product Cards ───
function renderProducts() {
  const grid = document.getElementById("product-grid");
  const products = getFilteredProducts();
  const countEl = document.getElementById("result-count");

  if (countEl) {
    countEl.textContent = `${products.length} produk ditemukan`;
  }

  if (products.length === 0) {
    grid.innerHTML = `
      <div class="empty-state">
        <span class="empty-icon">🔍</span>
        <h3>Produk tidak ditemukan</h3>
        <p>Coba kata kunci lain atau ubah filter kategori.</p>
      </div>
    `;
    return;
  }

  grid.innerHTML = products.map((p, idx) => `
    <article class="product-card" data-id="${p.id}" style="animation-delay: ${idx * 0.05}s">
      <div class="product-img-wrap">
        <img src="${p.image}" alt="${p.name}" loading="lazy"
             onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
        <div class="img-fallback" style="display:none;">🩳</div>
        ${p.discount >= 60 ? `<span class="badge-discount">-${p.discount}%</span>` : ""}
        ${p.tags.includes("terlaris") ? `<span class="badge-hot">🔥 TERLARIS</span>` : ""}
      </div>

      <div class="product-info">
        <h3 class="product-title">${p.name}</h3>

        <div class="product-tags">
          ${p.features.map(f => `<span class="tag">${f}</span>`).join("")}
        </div>

        <div class="product-pricing">
          <span class="price-now">${formatRupiah(p.price)}</span>
          <span class="price-original">${formatRupiah(p.originalPrice)}</span>
          <span class="price-discount">-${p.discount}%</span>
        </div>

        <div class="product-meta">
          <span class="meta-rating">
            <span class="stars">${renderStars(p.rating)}</span>
            ${p.rating}
          </span>
          <span class="meta-sold">${p.sold} terjual</span>
        </div>

        <button class="btn-order" onclick="openOrderModal(${p.id})">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
            <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.832-1.438A9.955 9.955 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18a8 8 0 01-4.28-1.232l-.3-.178-3.108.923.923-3.108-.178-.3A8 8 0 1112 20z"/>
          </svg>
          Pesan via WhatsApp
        </button>
      </div>
    </article>
  `).join("");
}

// ─── WhatsApp Order Modal ───
function openOrderModal(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const modal = document.getElementById("wa-modal");
  const body = document.getElementById("modal-body");

  body.innerHTML = `
    <div class="modal-product-preview">
      <img src="${product.image}" alt="${product.name}"
           onerror="this.style.display='none';">
      <div>
        <h4>${product.name}</h4>
        <p class="modal-price">${formatRupiah(product.price)}
          <span class="modal-original">${formatRupiah(product.originalPrice)}</span>
        </p>
      </div>
    </div>

    <form id="order-form" onsubmit="submitOrder(event, ${product.id})">
      <div class="form-group">
        <label>Pilih Ukuran</label>
        <div class="size-selector">
          ${product.sizes.map((s, i) => `
            <input type="radio" name="size" id="size-${s}" value="${s}" ${i === 0 ? "checked" : ""}>
            <label for="size-${s}" class="size-chip">${s}</label>
          `).join("")}
        </div>
      </div>

      <div class="form-group">
        <label for="qty">Jumlah</label>
        <div class="qty-stepper">
          <button type="button" class="qty-btn" onclick="changeQty(-1)">−</button>
          <input type="number" id="qty" name="qty" value="1" min="1" max="99" readonly>
          <button type="button" class="qty-btn" onclick="changeQty(1)">+</button>
        </div>
      </div>

      <div class="form-group">
        <label for="buyer-name">Nama Lengkap <span class="req">*</span></label>
        <input type="text" id="buyer-name" name="name" placeholder="Masukkan nama lengkap" required>
      </div>

      <div class="form-group">
        <label for="buyer-address">Alamat Pengiriman <span class="req">*</span></label>
        <textarea id="buyer-address" name="address" rows="3" placeholder="Jl. Contoh No.123, Kec, Kota, Provinsi, Kode Pos" required></textarea>
      </div>

      <div class="form-group">
        <label for="buyer-notes">Catatan (opsional)</label>
        <input type="text" id="buyer-notes" name="notes" placeholder="Warna favorit, request khusus, dll.">
      </div>

      <button type="submit" class="btn-submit-wa">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
          <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.832-1.438A9.955 9.955 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2z"/>
        </svg>
        Kirim Pesanan via WhatsApp
      </button>
    </form>
  `;

  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  const modal = document.getElementById("wa-modal");
  modal.classList.remove("active");
  document.body.style.overflow = "";
}

function changeQty(delta) {
  const input = document.getElementById("qty");
  let val = parseInt(input.value) + delta;

  if (val < 1) val = 1;
  if (val > 99) val = 99;

  input.value = val;
}

function submitOrder(event, productId) {
  event.preventDefault();

  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const form = event.target;
  const size = form.size.value;
  const qty = form.qty.value;
  const name = form.name.value.trim();
  const address = form.address.value.trim();
  const notes = form.notes.value.trim();
  const total = product.price * parseInt(qty);

  const message = `Halo Admin General Trader! 👋

Saya ingin memesan:
━━━━━━━━━━━━━━━
📦 *${product.name}*
📏 Ukuran: ${size}
🔢 Jumlah: ${qty} pcs
💰 Harga: ${formatRupiah(product.price)} × ${qty} = *${formatRupiah(total)}*
━━━━━━━━━━━━━━━

👤 Nama: ${name}
📍 Alamat: ${address}
${notes ? `📝 Catatan: ${notes}` : ""}

Mohon konfirmasi ketersediaan dan info ongkirnya ya. Terima kasih! 🙏`;

  const encodedMsg = encodeURIComponent(message);
  const waURL = `https://wa.me/${WA_NUMBER}?text=${encodedMsg}`;

  window.open(waURL, "_blank");
  closeModal();
}

// ─── Event Handlers ───
function initEventHandlers() {
  // Category filter chips
  document.querySelectorAll(".filter-chip").forEach(chip => {
    chip.addEventListener("click", () => {
      document.querySelector(".filter-chip.active").classList.remove("active");
      chip.classList.add("active");
      currentFilter = chip.dataset.filter;
      renderProducts();
    });
  });

  // Sort dropdown
  const sortSelect = document.getElementById("sort-select");

  if (sortSelect) {
    sortSelect.addEventListener("change", (e) => {
      currentSort = e.target.value;
      renderProducts();
    });
  }

  // Search input
  const searchInput = document.getElementById("search-input");

  if (searchInput) {
    let debounceTimer;

    searchInput.addEventListener("input", (e) => {
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => {
        searchQuery = e.target.value;
        renderProducts();
      }, 250);
    });
  }

  // Modal backdrop close
  const modal = document.getElementById("wa-modal");

  if (modal) {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) closeModal();
    });
  }

  // ESC to close modal
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
  });

  // Navbar scroll effect
  const navbar = document.getElementById("navbar");
  let lastScroll = 0;

  window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;

    if (navbar) {
      navbar.classList.toggle("scrolled", scrollY > 50);
    }

    // Show/hide scroll-to-top
    const scrollBtn = document.getElementById("scroll-top-btn");

    if (scrollBtn) {
      scrollBtn.classList.toggle("visible", scrollY > 600);
    }

    lastScroll = scrollY;
  });

  // Scroll-to-top button
  const scrollBtn = document.getElementById("scroll-top-btn");

  if (scrollBtn) {
    scrollBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // FAQ accordion
  document.querySelectorAll(".faq-question").forEach(q => {
    q.addEventListener("click", () => {
      const item = q.parentElement;
      const wasActive = item.classList.contains("active");

      // Close all others
      document.querySelectorAll(".faq-item.active").forEach(i => i.classList.remove("active"));

      if (!wasActive) {
        item.classList.add("active");
      }
    });
  });

  // Announcement bar close
  const announcementClose = document.getElementById("announcement-close");

  if (announcementClose) {
    announcementClose.addEventListener("click", () => {
      const bar = document.getElementById("announcement-bar");
      bar.style.transform = "translateY(-100%)";
      bar.style.marginBottom = `-${bar.offsetHeight}px`;

      setTimeout(() => { bar.style.display = "none"; }, 300);
    });
  }

  // CTA scroll to catalog
  document.querySelectorAll('a[href="#catalog"]').forEach(a => {
    a.addEventListener("click", (e) => {
      e.preventDefault();
      document.getElementById("catalog").scrollIntoView({ behavior: "smooth" });
    });
  });
}

// ─── Intersection Observer for Animations ───
function initScrollAnimations() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
  );

  document.querySelectorAll(".animate-on-scroll").forEach(el => {
    observer.observe(el);
  });
}

// ─── Countdown Timer (Promo ends in 24h from page load) ───
function initCountdown() {
  const endTime = new Date().getTime() + 24 * 60 * 60 * 1000;
  const timerEl = document.getElementById("countdown-timer");

  if (!timerEl) return;

  function update() {
    const now = new Date().getTime();
    const diff = endTime - now;

    if (diff <= 0) {
      timerEl.textContent = "PROMO BERAKHIR!";
      return;
    }

    const hours = Math.floor(diff / (1000 * 60 * 60));
    const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((diff % (1000 * 60)) / 1000);

    timerEl.textContent =
      `${String(hours).padStart(2, "0")}:${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
  }

  update();
  setInterval(update, 1000);
}

// ─── Initialize ───
document.addEventListener("DOMContentLoaded", () => {
  renderProducts();
  initEventHandlers();
  initScrollAnimations();
  initCountdown();
});
