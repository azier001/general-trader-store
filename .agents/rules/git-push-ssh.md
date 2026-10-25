# 🔑 Aturan Wajib Git Push & Remote (SSH Host Alias) — Laptop Azier

## ⚠️ KRITIS: Port 22 Diblokir ISP
Koneksi SSH langsung ke `github.com` port 22 **selalu timeout** di laptop ini.
**JANGAN PERNAH** menggunakan URL generic seperti:
- ❌ `git@github.com:username/repo.git`
- ❌ `https://github.com/username/repo.git`
- ❌ `gh auth login`

## ✅ WAJIB Menggunakan SSH Host Alias (Port 443)
Semua koneksi git push / git remote **HARUS** menggunakan host alias yang sudah dikonfigurasi di `~/.ssh/config` (menggunakan port 443 melalui `ssh.github.com`):

| Akun GitHub | Host Alias untuk Git Remote | SSH Key File |
|---|---|---|
| `azier001` | `github.com-azier001` | `~/.ssh/id_ed25519_azier001` |
| `andi0027` | `github.com-andi0027` | `~/.ssh/id_ed25519` |
| `ahmad027` | `github.com-ahmad027` | `~/.ssh/id_ed25519_ahmad027` |

## 🚀 Format Remote URL yang Benar:
```bash
git remote set-url origin git@github.com-{AKUN}:{AKUN}/{NAMA_REPO}.git
# Contoh untuk azier001:
git remote set-url origin git@github.com-azier001:azier001/{NAMA_REPO}.git
```

## 📋 Prosedur Setiap Kali Push:
1. Pastikan akun yang digunakan (default: `azier001` kecuali ditentukan lain).
2. Verifikasi autentikasi SSH: `ssh -T git@github.com-{AKUN}` (Exit code 1 adalah wajar, perhatikan pesan `Hi {AKUN}! You've successfully authenticated`).
3. Pastikan remote URL menggunakan host alias: `git remote -v`. Jika masih `github.com:` ubah dengan `git remote set-url origin git@github.com-{AKUN}:{AKUN}/{REPO}.git`.
4. Jalankan push: `git push -u origin main` (atau branch aktif) beserta `--tags` bila ada tag.

📖 **Referensi Lengkap Dokumen:**
- File: `D:\BELAJAR-HAL-BARUUU\panduan-git-push-ssh\panduan-git-push-ssh.md`
