# 🛍️ GENERAL TRADER STORE — Celana Boardshort & Kaos Kerja

Website landing page penjualan dengan fokus campaign produk **Celana Boardshort** dan **Kaos Kerja Proyek** (referensi toko Shopee Star Seller *General Trader*). Dilengkapi dengan fitur **Checkout via WhatsApp**, **Live Search**, **Filter Kategori**, dan **Multi-Version GitHub Pages Support**.

---

## 🌐 Demo Live di GitHub Pages
- 🟢 **Versi Terbaru (Main):** `https://azier001.github.io/general-trader-store/`
- 📦 **Versi 1.0.0 (Baseline):** `https://azier001.github.io/general-trader-store/v1/`

*(Tersedia tombol **Version Switcher** di navbar untuk berpindah antar versi dengan 1 klik)*

---

## 🚀 Fitur Utama
- **Fokus Campaign:** Hero banner interaktif menyorot promo Paket Hemat Celana Boardshort 3 Pcs mulai Rp30.951.
- **Pencarian Cepat:** Live search dengan debounce untuk mencari nama atau bahan produk.
- **Filter & Sortir:** Filter kategori (Semua, Celana Boardshort, Kaos Kerja, Terlaris) dan sortir harga/rating/terlaris.
- **WhatsApp Checkout Modal:** Pop-up formulir otomatis (pilihan ukuran M–XXL, qty stepper, nama, alamat, catatan) yang langsung terhubung ke nomor Admin **0812-1593-4380**.
- **Social Proof & Konversi:** Countdown timer promo 24 jam, ulasan pelanggan, trust badges 8 tahun, dan FAQ accordion.
- **Version Switcher Dropdown:** Navigasi interaktif untuk melihat versi arsip v1 maupun versi aktif terkini.

---

## 📁 Struktur Proyek
```
general-trader-store/
├── index.html             # 🟢 Landing page utama (Versi Aktif Terkini)
├── css/
│   └── style.css          # Desain sistem & style responsif
├── js/
│   └── app.js             # Data 18 produk & logic interaktif
├── assets/
│   └── img/               # Asset gambar lokal (hero & produk)
├── v1/                    # 📦 Snapshot Arsip Versi 1.0.0 (Self-contained)
│   ├── index.html
│   ├── css/style.css
│   ├── js/app.js
│   ├── assets/img/
│   └── README.md
├── README.md              # Dokumentasi proyek & panduan Git
└── .gitignore             # Konfigurasi file ignore
```

---

## 🛡️ Panduan Manajemen Versi (Versioning)

### 1. Folder Arsip Manual (`v1/`)
- Folder [v1/](file:///d:/BELAJAR-HAL-BARUUU/ngulik-website/v1) bersifat *self-contained* (berdiri sendiri).
- Dapat dibuka langsung di browser lokal atau melalui GitHub Pages di path `/v1/` tanpa terpengaruh perubahan di root folder.

### 2. Git Version Control (Standar Industri)
- **Tag Rilis V1:** `v1.0.0`
- **Melihat riwayat:** `git log --oneline`
- **Melihat perbedaan kode saat ada edit:** `git diff`
- **Menyimpan perubahan berikutnya (V2):**
  ```bash
  git add .
  git commit -m "fix/feat: deskripsi perubahan"
  git tag -a v2.0.0 -m "Release v2.0.0"
  ```
- **Kembali melihat kode V1 kapan saja:**
  ```bash
  git checkout v1.0.0
  # Kembali ke versi terbaru:
  git checkout main
  ```

---

## 🚀 Langkah Push ke GitHub & Mengaktifkan GitHub Pages

1. **Buat repositori baru di GitHub:**
   - Nama repo: `general-trader-store`
   - URL: `https://github.com/azier001/general-trader-store.git`
2. **Push dari terminal lokal:**
   ```bash
   git remote add origin https://github.com/azier001/general-trader-store.git
   git branch -M main
   git push -u origin main --tags
   ```
3. **Aktifkan GitHub Pages:**
   - Masuk ke menu **Settings** > **Pages** di repositori GitHub Anda.
   - Pada bagian **Build and deployment > Branch**, pilih branch `main` dan folder `/ (root)`.
   - Klik **Save**. Dalam 1-2 menit, kedua link di atas akan langsung online aktif!
