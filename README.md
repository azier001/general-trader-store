# 🛍️ GENERAL TRADER STORE — Celana Boardshort & Kaos Kerja

Website landing page penjualan produk **Celana Boardshort** dan **Kaos Kerja Proyek** (referensi toko Shopee Star Seller *General Trader*). Dilengkapi dengan **Checkout Langsung ke Shopee**, **Pop-up Video Review Asli**, **Live Search**, **Filter Kategori**, **Admin Manager Lokal (Ctrl + Shift + A)** dengan **Environment Lock**, serta **Multi-Version GitHub Pages Support**.

---

## 🌐 Demo Live di GitHub Pages
- 🟢 **Versi Aktif Terkini (Main):** `https://azier001.github.io/general-trader-store/`
- 📦 **Snapshot Versi 2.0.0 (Shopee Direct):** `https://azier001.github.io/general-trader-store/v2/`
- 📦 **Snapshot Versi 1.0.0 (WhatsApp Flow):** `https://azier001.github.io/general-trader-store/v1/`

*(Tersedia tombol **Version Switcher** di navbar untuk berpindah antar versi dengan 1 klik)*

---

## 🚀 Fitur Utama

### 🌟 Fitur Baru di Versi 2.0.0 (Terkini)
- **Direct Shopee Checkout:** Tombol order langsung mengarahkan pembeli ke produk resmi di toko Shopee General Trader tanpa form perantara.
- **Interactive Video Review Pop-up:** Badge interaktif "▶ Review Shopee" pada kartu produk. Jika diklik, membuka video ulasan produk asli (autoplay muted, auto-stop saat ditutup, dilengkapi info harga, rating, jumlah terjual, dan CTA beli).
- **Admin Manager Lokal (Ctrl + Shift + A):** Panel visual untuk mengelola katalog produk (CRUD, reorder, preview video, export kode produk) langsung di browser.
- **Environment Security Lock:** Script admin (`admin.js`) dan shortcut keyboard secara otomatis hanya aktif di localhost / file lokal; **terkunci rapat bagi pengunjung online**.
- **Data Produk Terpisah (`products.js`):** Pengelolaan data produk yang bersih dan modular.

### ⚡ Fitur Dasar (Bawaan V1)
- **Fokus Campaign:** Hero banner interaktif menyorot promo Paket Hemat Celana Boardshort 3 Pcs.
- **Pencarian Cepat:** Live search dengan debounce untuk mencari nama atau bahan produk.
- **Filter & Sortir:** Filter kategori (Semua, Celana Boardshort, Kaos Kerja, Terlaris) dan sortir harga/rating/terlaris.
- **Social Proof & Konversi:** Countdown timer promo 24 jam, ulasan pelanggan, trust badges 8 tahun, dan FAQ accordion.

---

## 📁 Struktur Proyek
```
general-trader-store/
├── index.html             # 🟢 Landing page utama (Versi Aktif Terkini - V2)
├── css/
│   └── style.css          # Desain sistem, video modal, & responsivitas
├── js/
│   ├── app.js             # Logic interaktif katalog & video modal
│   ├── products.js        # Data 10 produk + URL video Shopee
│   └── admin.js           # Admin panel CRUD (Environment Lock: hanya localhost)
├── assets/
│   └── img/               # Asset gambar lokal (hero & produk)
├── v2/                    # 📦 Snapshot Arsip Versi 2.0.0 (Self-contained)
│   ├── index.html
│   ├── css/style.css
│   ├── js/
│   │   ├── app.js
│   │   ├── products.js
│   │   └── admin.js
│   ├── assets/img/
│   └── README.md
├── v1/                    # 📦 Snapshot Arsip Versi 1.0.0 (Self-contained - WhatsApp Flow)
│   ├── index.html
│   ├── css/style.css
│   ├── js/app.js
│   ├── assets/img/
│   └── README.md
├── .agents/               # Aturan workspace & panduan SSH push
├── README.md              # Dokumentasi utama proyek & panduan rilis
└── .gitignore             # Konfigurasi file ignore
```

---

## 🛡️ Panduan Manajemen Versi (Versioning)

### 1. Folder Arsip Manual (`v1/` dan `v2/`)
- Folder [v1/](file:///d:/BELAJAR-HAL-BARUUU/ngulik-website/v1) dan [v2/](file:///d:/BELAJAR-HAL-BARUUU/ngulik-website/v2) bersifat *self-contained* (berdiri sendiri).
- Dapat dibuka langsung di browser lokal atau melalui GitHub Pages di `/v1/` dan `/v2/` tanpa terpengaruh perubahan di root folder.
- Memungkinkan Anda dan tim melihat kode utuh dari masing-masing versi secara mandiri tanpa harus melakukan `git diff` atau `git checkout`.

### 2. Git Version Control (Standar Industri)
- **Tag Rilis V1:** `v1.0.0`
- **Tag Rilis V2:** `v2.0.0`
- **Melihat riwayat:** `git log --oneline`
- **Melihat perbedaan kode:** `git diff`
- **Kembali melihat kode versi tertentu via Git:**
  ```bash
  git checkout v1.0.0
  # atau
  git checkout v2.0.0
  # Kembali ke branch aktif:
  git checkout main
  ```

---

## 🚀 Prosedur Git Push ke GitHub (SSH Host Alias Port 443)

> [!IMPORTANT]
> Sesuai konfigurasi jaringan di laptop ini, koneksi port 22 diblokir oleh ISP. Push wajib menggunakan SSH Host Alias port 443 (`github.com-azier001`).

```bash
# 1. Pastikan perubahan sudah rapi
git status

# 2. Stage semua file proyek yang relevan
git add .

# 3. Buat commit rilis V2
git commit -m "feat(v2): release v2.0.0 - shopee direct checkout, video review modal, admin manager & v2 snapshot"

# 4. Beri tag rilis v2.0.0
git tag -a v2.0.0 -m "Release v2.0.0 - Shopee Direct & Video Review"

# 5. Push branch main beserta tag ke GitHub
git push -u origin main --tags
```
