# 📦 Snapshot Dokumentasi Versi 2.0.0 (V2 Shopee Direct & Video Review)

- **Tanggal Rilis:** 25 Oktober 2026
- **Status:** Stable Release (100% Berfungsi)
- **Toko Referensi:** GENERAL TRADER (Shopee Star Seller)
- **Katalog:** 10 Paket Promo Terlaris

---

## 🎯 Fokus & Fitur Utama V2:

1. **Direct Shopee Checkout:**  
   Tombol order langsung mengarahkan pembeli ke produk spesifik di toko resmi Shopee General Trader tanpa form perantara.
2. **Interactive Video Review Pop-up Modal:**  
   Badge "▶ Review Shopee" interaktif pada kartu produk. Jika diklik, membuka pop-up video review produk asli dari Shopee (autoplay muted, auto-stop saat modal ditutup, dilengkapi info harga, rating, jumlah terjual, dan tombol CTA langsung beli).
3. **Data Produk Modular (`products.js`):**  
   Data 10 produk dipisahkan ke file tersendiri (`js/products.js`), memudahkan pengelolaan harga, gambar, link Shopee, dan link video review.
4. **Admin Panel Manager (Ctrl + Shift + A):**  
   Panel visual untuk mengelola produk secara lokal (CRUD: Tambah, Edit, Hapus, Reorder, Reset default, dan Export format JavaScript).
5. **Environment Security Lock (Level 1):**  
   Panel admin dan script `admin.js` terkunci secara ketat dan **hanya dimuat di localhost / file lokal**. Pengunjung di GitHub Pages tidak akan memuat script admin maupun bisa membuka form editor melalui shortcut keyboard.

---

> [!NOTE]
> File di folder ini adalah arsip independen (self-contained). File [index.html](file:///d:/BELAJAR-HAL-BARUUU/ngulik-website/v2/index.html) di folder ini dapat dibuka langsung di browser lokal atau melalui GitHub Pages di `https://azier001.github.io/general-trader-store/v2/` untuk melihat kode utuh versi 2 tanpa perlu melakukan `git diff`.
