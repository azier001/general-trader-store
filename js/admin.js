/* ═══════════════════════════════════════════════════════════
   GENERAL TRADER — V2 Admin Manager
   CRUD Visual + localStorage + Export to Clipboard
   ═══════════════════════════════════════════════════════════
   🔧 Shortcut: Ctrl + Shift + A → Toggle Admin Panel
   🔒 Environment Lock: Hanya dimuat di localhost / file://
   ═══════════════════════════════════════════════════════════ */

// ─── State ───
let editingProductId = null;
let changeCount = 0;


// ─── Toast Notification ───
function showToast(message, type = "info") {
  const toast = document.getElementById("toast");

  toast.className = `toast ${type}`;
  toast.innerHTML = `<i class="fa-solid ${
    type === "success" ? "fa-circle-check" :
    type === "error"   ? "fa-circle-xmark" :
                         "fa-circle-info"
  }"></i> ${message}`;

  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 3000);
}


// ─── Admin Panel Toggle ───
function toggleAdmin(forceState) {
  const panel = document.getElementById("admin-panel");
  const overlay = document.getElementById("admin-overlay");
  const isActive = forceState !== undefined ? !forceState : panel.classList.contains("active");

  if (isActive) {
    // Close
    panel.classList.remove("active");
    overlay.classList.remove("active");
    document.body.classList.remove("admin-active");
  } else {
    // Open
    panel.classList.add("active");
    overlay.classList.add("active");
    document.body.classList.add("admin-active");
    renderAdminProductList();
    renderProducts(); // Re-render to show admin buttons on cards
  }
}

function closeAdmin() {
  toggleAdmin(false);
  renderProducts(); // Re-render to hide admin buttons
}


// ─── Render Admin Product List (Sidebar) ───
function renderAdminProductList() {
  const container = document.getElementById("admin-product-list");
  const products = getProductData();

  if (products.length === 0) {
    container.innerHTML = `
      <div style="text-align:center; padding:40px 0; color:var(--text-muted); font-size:0.8rem;">
        <i class="fa-solid fa-inbox" style="font-size:2rem; display:block; margin-bottom:8px;"></i>
        Belum ada produk.
      </div>
    `;
    return;
  }

  container.innerHTML = products.map(p => {
    const fallbackImg = `https://placehold.co/96x96/EE4D2D/ffffff?text=GT`;
    const hasVideo = p.videoUrl && p.videoUrl.trim() !== "";
    const videoIcon = hasVideo ? ' <i class="fa-solid fa-video" style="color:var(--shopee);font-size:0.6rem;" title="Ada video review"></i>' : "";

    return `
      <div class="admin-product-item" data-id="${p.id}">
        <img class="admin-product-thumb"
             src="${p.imageUrl}"
             alt="${p.title}"
             onerror="this.onerror=null; this.src='${fallbackImg}';">

        <div class="admin-product-details">
          <div class="admin-product-name">${p.title}${videoIcon}</div>
          <div class="admin-product-info">
            ${p.price} · ${p.category} · ⭐ ${p.rating}
          </div>
        </div>

        <div class="admin-product-actions">
          <button class="admin-btn-edit" onclick="editProduct(${p.id})" title="Edit">
            <i class="fa-solid fa-pen"></i>
          </button>
          <button class="admin-btn-delete" onclick="deleteProduct(${p.id})" title="Hapus">
            <i class="fa-solid fa-trash"></i>
          </button>
        </div>
      </div>
    `;
  }).join("");

  updateAdminStatus();
}


// ─── Update Admin Status Text ───
function updateAdminStatus() {
  const statusEl = document.getElementById("admin-status");
  const hasChanges = localStorage.getItem("gt_products") !== null;

  if (hasChanges) {
    statusEl.innerHTML = `<i class="fa-solid fa-pen" style="color:var(--warning);"></i> Data telah dimodifikasi (belum di-export)`;
    statusEl.style.color = "var(--warning)";
  } else {
    statusEl.innerHTML = `<i class="fa-solid fa-check-circle" style="color:var(--success);"></i> Menggunakan data default`;
    statusEl.style.color = "var(--text-muted)";
  }
}


// ─── Open Form Modal ───
function openFormModal(mode, product = null) {
  const overlay = document.getElementById("admin-form-overlay");
  const titleEl = document.getElementById("form-modal-title");
  const saveBtn = document.getElementById("form-save");

  if (mode === "edit" && product) {
    titleEl.textContent = "Edit Produk";
    saveBtn.innerHTML = '<i class="fa-solid fa-check"></i> Simpan Perubahan';
    editingProductId = product.id;

    // Pre-fill form
    document.getElementById("f-title").value = product.title;
    document.getElementById("f-category").value = product.category;
    document.getElementById("f-price").value = product.price;
    document.getElementById("f-badge").value = product.badge;
    document.getElementById("f-packageInfo").value = product.packageInfo;
    document.getElementById("f-rating").value = product.rating;
    document.getElementById("f-sold").value = product.sold;
    document.getElementById("f-imageUrl").value = product.imageUrl;
    document.getElementById("f-url").value = product.url;
    document.getElementById("f-videoUrl").value = product.videoUrl || "";
  } else {
    titleEl.textContent = "Tambah Produk Baru";
    saveBtn.innerHTML = '<i class="fa-solid fa-plus"></i> Tambah Produk';
    editingProductId = null;

    // Clear form
    document.getElementById("product-form").reset();
    document.getElementById("f-rating").value = "4.8";
  }

  overlay.classList.add("active");
}

function closeFormModal() {
  const overlay = document.getElementById("admin-form-overlay");
  overlay.classList.remove("active");
  editingProductId = null;
}


// ─── Save Product (Add or Edit) ───
function saveProduct(e) {
  e.preventDefault();

  const products = getProductData();

  const productData = {
    title:       document.getElementById("f-title").value.trim(),
    category:    document.getElementById("f-category").value,
    price:       document.getElementById("f-price").value.trim(),
    badge:       document.getElementById("f-badge").value.trim(),
    packageInfo: document.getElementById("f-packageInfo").value.trim(),
    rating:      document.getElementById("f-rating").value,
    sold:        document.getElementById("f-sold").value.trim() || "Baru",
    imageUrl:    document.getElementById("f-imageUrl").value.trim(),
    url:         document.getElementById("f-url").value.trim(),
    videoUrl:    document.getElementById("f-videoUrl").value.trim()
  };

  if (editingProductId !== null) {
    // ── Edit Mode ──
    const index = products.findIndex(p => p.id === editingProductId);

    if (index === -1) {
      showToast("Produk tidak ditemukan!", "error");
      return;
    }

    products[index] = { ...products[index], ...productData };
    showToast("Produk berhasil diperbarui!", "success");
  } else {
    // ── Add Mode ──
    const maxId = products.reduce((max, p) => Math.max(max, p.id), 0);

    products.push({
      id: maxId + 1,
      ...productData
    });

    showToast("Produk baru berhasil ditambahkan!", "success");
  }

  // Save to localStorage
  localStorage.setItem("gt_products", JSON.stringify(products));

  // Refresh everything
  closeFormModal();
  renderFilterChips();
  renderProducts();
  renderAdminProductList();
}


// ─── Edit Product ───
function editProduct(productId) {
  const products = getProductData();
  const product = products.find(p => p.id === productId);

  if (!product) {
    showToast("Produk tidak ditemukan!", "error");
    return;
  }

  openFormModal("edit", product);
}


// ─── Delete Product ───
function deleteProduct(productId) {
  const products = getProductData();
  const product = products.find(p => p.id === productId);

  if (!product) {
    showToast("Produk tidak ditemukan!", "error");
    return;
  }

  const confirmed = confirm(`Hapus produk "${product.title}"?\n\nAksi ini bisa di-reset dengan tombol "Reset Default".`);

  if (!confirmed) return;

  const updatedProducts = products.filter(p => p.id !== productId);

  localStorage.setItem("gt_products", JSON.stringify(updatedProducts));

  showToast("Produk berhasil dihapus!", "success");

  renderFilterChips();
  renderProducts();
  renderAdminProductList();
}


// ─── Export Data to Clipboard ───
function exportData() {
  const products = getProductData();

  const fileContent = `/* ═══════════════════════════════════════════════════════════
   GENERAL TRADER — Data Produk Katalog Shopee
   ═══════════════════════════════════════════════════════════
   📦 File ini HANYA berisi data produk.
   ✏️ Untuk mengelola produk secara visual, buka halaman
      lalu tekan Ctrl+Shift+A untuk membuka Admin Manager.
   ═══════════════════════════════════════════════════════════
   🕐 Di-export pada: ${new Date().toLocaleString("id-ID")}
   ═══════════════════════════════════════════════════════════ */

const PRODUCTS = ${JSON.stringify(products, null, 2)};
`;

  navigator.clipboard.writeText(fileContent).then(() => {
    showToast("Data berhasil di-copy! Tempel ke js/products.js", "success");
  }).catch(() => {
    // Fallback: create a downloadable file
    const blob = new Blob([fileContent], { type: "application/javascript" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");

    a.href = url;
    a.download = "products.js";
    a.click();

    URL.revokeObjectURL(url);

    showToast("File products.js berhasil di-download!", "success");
  });
}


// ─── Reset Data to Default ───
function resetData() {
  const confirmed = confirm(
    "Reset semua perubahan dan kembali ke data default products.js?\n\n" +
    "Perubahan yang belum di-export akan hilang."
  );

  if (!confirmed) return;

  localStorage.removeItem("gt_products");

  showToast("Data berhasil di-reset ke default!", "success");

  renderFilterChips();
  renderProducts();
  renderAdminProductList();
}


// ─── Init Admin Event Listeners ───
function initAdmin() {
  // Keyboard shortcut: Ctrl + Shift + A
  document.addEventListener("keydown", (e) => {
    if (e.ctrlKey && e.shiftKey && e.key === "A") {
      e.preventDefault();
      toggleAdmin();
    }
  });

  // Close admin panel
  document.getElementById("admin-close").addEventListener("click", closeAdmin);
  document.getElementById("admin-overlay").addEventListener("click", closeAdmin);

  // Add product button
  document.getElementById("btn-add-product").addEventListener("click", () => {
    openFormModal("add");
  });

  // Form submit
  document.getElementById("product-form").addEventListener("submit", saveProduct);

  // Form cancel / close
  document.getElementById("form-cancel").addEventListener("click", closeFormModal);
  document.getElementById("form-close").addEventListener("click", closeFormModal);

  // Close form on overlay click
  document.getElementById("admin-form-overlay").addEventListener("click", (e) => {
    if (e.target === e.currentTarget) closeFormModal();
  });

  // Export & Reset buttons
  document.getElementById("btn-export").addEventListener("click", exportData);
  document.getElementById("btn-reset-data").addEventListener("click", resetData);

  // ESC key to close modals
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      const formOverlay = document.getElementById("admin-form-overlay");

      if (formOverlay.classList.contains("active")) {
        closeFormModal();
      } else if (document.getElementById("admin-panel").classList.contains("active")) {
        closeAdmin();
      }
    }
  });

  // Check for ?admin=true URL parameter
  const urlParams = new URLSearchParams(window.location.search);

  if (urlParams.get("admin") === "true") {
    toggleAdmin(true);
  }
}


// ─── Initialize ───
document.addEventListener("DOMContentLoaded", initAdmin);
