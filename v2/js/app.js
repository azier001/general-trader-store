/* ═══════════════════════════════════════════════════════════
   GENERAL TRADER — V2 App Logic
   Render Products + Category Filter + Live Search + Video Modal
   ═══════════════════════════════════════════════════════════ */

// ─── Category Definitions ───
const CATEGORIES = [
  { key: "semua",   label: "Semua Promo",                icon: "" },
  { key: "pendek",  label: "Celana Pendek",              icon: "fa-solid fa-shirt" },
  { key: "panjang", label: "Celana Panjang & Training",  icon: "fa-solid fa-user-ninja" },
  { key: "kaos",    label: "Kaos Tani / Petani",         icon: "fa-solid fa-vest" },
  { key: "anak",    label: "Pakaian Anak",               icon: "fa-solid fa-child" }
];

// ─── State ───
let activeCategory = "semua";
let searchQuery = "";


// ─── Data Source ───
// Returns products from localStorage (if admin edited) or default PRODUCTS
function getProductData() {
  const stored = localStorage.getItem("gt_products");

  if (stored) {
    try {
      return JSON.parse(stored);
    } catch (e) {
      console.warn("Failed to parse stored products, using defaults.");
      localStorage.removeItem("gt_products");
    }
  }

  return PRODUCTS;
}


// ─── Count Products per Category ───
function countByCategory(products, categoryKey) {
  if (categoryKey === "semua") return products.length;

  return products.filter(p => p.category === categoryKey).length;
}


// ─── Render Filter Chips ───
function renderFilterChips() {
  const container = document.getElementById("filter-chips");
  const products = getProductData();

  container.innerHTML = CATEGORIES.map(cat => {
    const count = countByCategory(products, cat.key);
    const isActive = activeCategory === cat.key ? "active" : "";
    const iconHTML = cat.icon ? `<i class="${cat.icon}"></i> ` : "";

    return `
      <button class="filter-chip ${isActive}"
              data-category="${cat.key}"
              onclick="filterCategory('${cat.key}')">
        ${iconHTML}${cat.label} (${count})
      </button>
    `;
  }).join("");
}


// ─── Filter & Search Logic ───
function getFilteredProducts() {
  let products = getProductData();

  // Category filter
  if (activeCategory !== "semua") {
    products = products.filter(p => p.category === activeCategory);
  }

  // Search filter
  if (searchQuery.trim()) {
    const q = searchQuery.toLowerCase();

    products = products.filter(p =>
      p.title.toLowerCase().includes(q) ||
      p.packageInfo.toLowerCase().includes(q) ||
      p.badge.toLowerCase().includes(q)
    );
  }

  return products;
}


// ─── Render Product Cards ───
function renderProducts() {
  const grid = document.getElementById("product-grid");
  const emptyState = document.getElementById("empty-state");
  const countEl = document.getElementById("product-count");
  const products = getFilteredProducts();
  const isAdmin = document.body.classList.contains("admin-active");

  // Update count
  countEl.textContent = `Menampilkan ${products.length} Produk`;

  // Show/hide empty state
  if (products.length === 0) {
    grid.innerHTML = "";
    emptyState.style.display = "block";
    return;
  } else {
    emptyState.style.display = "none";
  }

  grid.innerHTML = products.map(p => {
    const fallbackImg = `https://placehold.co/400x400/EE4D2D/ffffff?text=${encodeURIComponent(p.badge || "Produk")}`;

    // Video badge: only show if videoUrl is not empty
    const hasVideo = p.videoUrl && p.videoUrl.trim() !== "";

    const videoBadge = hasVideo
      ? `<span class="badge-video" onclick="openVideoModal(${p.id})" title="Tonton video review produk ini">
           <i class="fa-solid fa-circle-play play-icon"></i> Review Shopee
         </span>`
      : "";

    const adminButtons = `
      <div class="admin-card-actions">
        <button class="btn-admin-edit" onclick="editProduct(${p.id})" title="Edit Produk">
          <i class="fa-solid fa-pen-to-square"></i> Edit
        </button>
        <button class="btn-admin-delete" onclick="deleteProduct(${p.id})" title="Hapus Produk">
          <i class="fa-solid fa-trash-can"></i> Hapus
        </button>
      </div>
    `;

    return `
      <article class="product-card" data-id="${p.id}">
        <!-- Image -->
        <div class="product-img-wrap">
          <img src="${p.imageUrl}"
               alt="${p.title}"
               loading="lazy"
               onerror="this.onerror=null; this.style.display='none'; this.nextElementSibling.style.display='flex';">
          <div class="img-fallback" style="display:none;">🩳</div>

          <span class="badge-promo">
            <i class="fa-solid fa-fire badge-icon"></i> ${p.badge}
          </span>

          ${videoBadge}
        </div>

        <!-- Content -->
        <div class="product-info">
          <!-- Rating & Sold -->
          <div class="product-meta">
            <div class="meta-rating">
              <i class="fa-solid fa-star"></i>
              <span class="rating-num">${p.rating}</span>
            </div>
            <span class="meta-sold">${p.sold}</span>
          </div>

          <!-- Title -->
          <h3 class="product-title" title="${p.title}">${p.title}</h3>

          <!-- Package Info -->
          <div class="package-info">
            <p><i class="fa-solid fa-box-open"></i> ${p.packageInfo}</p>
          </div>

          <!-- Price -->
          <div class="product-price">
            <span class="price-label">Harga Promo Paket:</span>
            <span class="price-value">${p.price}</span>
          </div>
        </div>

        <!-- CTA -->
        <div class="product-cta">
          <a href="${p.url}" target="_blank" rel="noopener noreferrer" class="btn-shopee">
            <i class="fa-solid fa-bag-shopping"></i> Beli / Order Langsung di Shopee
          </a>
        </div>

        <!-- Admin Actions (visible only in admin mode) -->
        ${adminButtons}
      </article>
    `;
  }).join("");
}


// ─── Video Modal ───
function openVideoModal(productId) {
  const products = getProductData();
  const product = products.find(p => p.id === productId);

  if (!product || !product.videoUrl) return;

  const overlay = document.getElementById("video-modal-overlay");
  const video = document.getElementById("video-player");
  const source = document.getElementById("video-source");

  // Set video source
  source.src = product.videoUrl;
  video.load();

  // Populate product info
  document.getElementById("video-modal-badge").textContent = product.badge;
  document.getElementById("video-modal-title").textContent = product.title;
  document.getElementById("video-modal-rating").textContent = product.rating;
  document.getElementById("video-modal-sold").textContent = product.sold;
  document.getElementById("video-modal-package").innerHTML =
    `<i class="fa-solid fa-box-open"></i> ${product.packageInfo}`;
  document.getElementById("video-modal-price").textContent = product.price;

  // Set CTA link with dynamic price text
  const ctaBtn = document.getElementById("video-modal-cta");
  ctaBtn.href = product.url;
  ctaBtn.innerHTML = `<i class="fa-solid fa-bag-shopping"></i> Beli Langsung di Shopee — ${product.price}`;

  // Show modal
  overlay.classList.add("active");
  document.body.style.overflow = "hidden";

  // Autoplay muted (browser-safe)
  video.muted = true;
  video.play().catch(() => {
    // Autoplay blocked — user can manually press play
  });
}

function closeVideoModal() {
  const overlay = document.getElementById("video-modal-overlay");
  const video = document.getElementById("video-player");

  // Stop video & reset
  video.pause();
  video.currentTime = 0;

  // Hide modal
  overlay.classList.remove("active");
  document.body.style.overflow = "";
}


// ─── Category Filter ───
function filterCategory(cat) {
  activeCategory = cat;

  renderFilterChips();
  renderProducts();
}


// ─── Search ───
function triggerSearch() {
  const input = document.getElementById("search-input");
  searchQuery = input.value;

  renderProducts();
}

function resetSearch() {
  const input = document.getElementById("search-input");
  input.value = "";
  searchQuery = "";
  activeCategory = "semua";

  renderFilterChips();
  renderProducts();
}


// ─── Event Handlers ───
function initEventHandlers() {
  // Version dropdown toggle
  const versionBtn = document.getElementById("version-btn");
  const versionDropdown = document.querySelector(".version-dropdown");

  if (versionBtn && versionDropdown) {
    versionBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      const isOpen = versionDropdown.classList.toggle("open");
      versionBtn.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    document.addEventListener("click", (e) => {
      if (!versionDropdown.contains(e.target)) {
        versionDropdown.classList.remove("open");
        versionBtn.setAttribute("aria-expanded", "false");
      }
    });
  }

  // Search input — live search with debounce
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

    // Enter key triggers search
    searchInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        triggerSearch();
      }
    });
  }

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener("click", (e) => {
      const targetId = a.getAttribute("href");

      if (targetId !== "#") {
        e.preventDefault();
        const target = document.querySelector(targetId);

        if (target) {
          target.scrollIntoView({ behavior: "smooth" });
        }
      }
    });
  });

  // Scroll to top button
  const scrollBtn = document.getElementById("scroll-top-btn");

  if (scrollBtn) {
    window.addEventListener("scroll", () => {
      scrollBtn.classList.toggle("visible", window.scrollY > 500);
    });

    scrollBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // ─── Video Modal Events ───
  const videoOverlay = document.getElementById("video-modal-overlay");
  const videoCloseBtn = document.getElementById("video-modal-close");

  // Close button
  if (videoCloseBtn) {
    videoCloseBtn.addEventListener("click", closeVideoModal);
  }

  // Click outside modal to close
  if (videoOverlay) {
    videoOverlay.addEventListener("click", (e) => {
      if (e.target === videoOverlay) {
        closeVideoModal();
      }
    });
  }

  // ESC key closes video modal (with priority over other modals)
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      const videoModalOverlay = document.getElementById("video-modal-overlay");

      if (videoModalOverlay && videoModalOverlay.classList.contains("active")) {
        closeVideoModal();
      }
    }
  });
}


// ─── Initialize ───
document.addEventListener("DOMContentLoaded", () => {
  renderFilterChips();
  renderProducts();
  initEventHandlers();
});
