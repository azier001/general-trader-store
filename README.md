# 🛍️ Landing Page GENERAL TRADER — Celana Boardshort & Kaos Kerja

Website landing page penjualan dengan fokus campaign produk **Celana Boardshort** dan **Kaos Kerja Proyek** (referensi toko Shopee Star Seller *General Trader*). Dilengkapi dengan fitur **Checkout via WhatsApp**, **Live Search**, dan **Filter Kategori**.

---

## 🚀 Fitur Utama
- **Fokus Campaign:** Hero banner interaktif menyorot promo Paket Hemat Celana Boardshort 3 Pcs.
- **Pencarian Cepat:** Live search dengan debounce untuk mencari nama atau bahan produk.
- **Filter & Sortir:** Filter kategori (Semua, Celana Boardshort, Kaos Kerja, Terlaris) dan sortir harga/rating/terlaris.
- **WhatsApp Checkout Modal:** Pop-up formulir otomatis (pilihan ukuran, qty, nama, alamat, catatan) yang langsung terhubung ke nomor Admin **0812-1593-4380**.
- **Social Proof & Konversi:** Countdown timer promo 24 jam, ulasan pelanggan, trust badges, dan FAQ accordion.

---

## 📁 Struktur Proyek
```
ngulik-website/
├── index.html             # Landing page utama (versi aktif)
├── css/
│   └── style.css          # Desain sistem & style responsif
├── js/
│   └── app.js             # Data 18 produk & logic interaktif
├── assets/
│   └── img/               # Asset gambar lokal
└── versions/
    └── v1/                # 📦 Snapshot Arsip Versi 1.0.0 (Self-contained)
        ├── index.html
        ├── css/
        ├── js/
        ├── assets/
        └── README.md
```

---

## 🛡️ Panduan Manajemen Versi (Versioning)

Anda memiliki 2 proteksi sekaligus agar kode awal tidak hilang:

### 1. Folder Arsip Manual (`versions/v1/`)
- Folder [versions/v1/](file:///d:/BELAJAR-HAL-BARUUU/ngulik-website/versions/v1) bersifat *self-contained* (berdiri sendiri).
- Anda bisa membuka [versions/v1/index.html](file:///d:/BELAJAR-HAL-BARUUU/ngulik-website/versions/v1/index.html) kapan saja untuk melihat tampilan awal versi 1 tanpa terpengaruh perubahan di root folder.

### 2. Git Version Control (Standar Industri)
- **Tag Rilis V1:** `v1.0.0`
- **Melihat riwayat:** `git log --oneline`
- **Melihat perbedaan kode saat ada edit:** `git diff`
- **Melihat status:** `git status`
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
  git checkout master
  ```
