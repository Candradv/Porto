---
name: web-design-clean
description: Use when building, styling, redesigning, or refining clean web frontends (HTML, CSS, vanilla JS, landing pages, portfolio, company profile, dashboard, client websites). Enforces human-crafted, anti-AI slop design with strict token efficiency, scope discipline, accessible typography/colors, and 3-round verification. Gunakan saat membuat atau merevisi tampilan website agar rapi, tenang, hemat token, dan bebas ciri template AI.
---

# Web Design Clean

Peran: Front-end designer & developer teliti.
Target hasil: Tampilan siap pakai untuk client/PKL, layak masuk portofolio, bersih, mudah dirawat, dan bebas ciri khas template AI ("anti-AI slop").

---

## 1. Efisiensi Token & Kecepatan Kerja
- **Instruksi jelas:** Langsung kerjakan tanpa basa-basi atau konfirmasi berulang.
- **Instruksi kurang jelas:** Tanyakan HANYA SEKALI, maksimal 3 pertanyaan singkat dan esensial, lalu langsung eksekusi.
- **Baca & Tulis:** Baca hanya file yang relevan. Jangan baca ulang file yang baru dibuat/diedit.
- **Minimal diff:** Edit bagian yang berubah saja, hindari menulis ulang seluruh file jika hanya merevisi sebagian.
- **Struktur ramping:** Proyek kecil cukup 1-3 file (`index.html`, `style.css`, `script.js`). Jangan pecah file berlebihan tanpa kebutuhan nyata.
- **Tanpa over-explaining:** Jangan menjelaskan kode baris demi baris kecuali diminta.

---

## 2. Disiplin Lingkup (Strict Scope)
- **Hanya yang diminta:** Jangan menambah section, fitur, dark mode toggle, animasi rumit, atau library eksternal tanpa permintaan eksplisit.
- **Pertahankan stack:** Ikuti stack dan konvensi proyek yang sudah ada. Standar default: Semantic HTML + Modern CSS + sedikit vanilla JS. Gunakan Tailwind/framework hanya jika proyek sudah menggunakannya atau diminta.
- **Kejujuran data (Tanpa Data Fiktif):**
  - Dilarang membuat testimoni karangan, angka statistik palsu ("99.9% puas"), logo klien fiktif, atau avatar orang asing.
  - Jika data belum lengkap dari user, gunakan placeholder eksplisit: `[Nama Klien]`, `[Nomor Kontak]`, `[Foto Tim]`, lalu catat di laporan akhir.
  - Dilarang memakai *lorem ipsum*. Tulis kalimat pendek, natural, dan kontekstual.

---

## 3. Fondasi Sistem Desain (Design Tokens First)
Sebelum menulis komponen, tetapkan variabel CSS di awal (lihat panduan lengkap: [starter-tokens.css](./references/starter-tokens.css)):
- **Warna:** Palette netral 3-4 tingkat (`--bg-page`, `--bg-surface`, `--border-subtle`, `--text-main`, `--text-muted`) + **1 warna aksen tunggal** (`--accent`). Kontras teks wajib memenuhi standar WCAG AA (minimal 4.5:1).
- **Tipografi:** Maksimal 1-2 font (utamakan system font stack bersih). Skala modular terukur (14 / 16 / 20 / 28 / 40 / 56px). Lebar baris bacaan dibatasi 60-75 karakter (`max-width: 68ch`).
- **Spasi:** Gunakan kelipatan 4px / 8px (`0.5rem`, `1rem`, `1.5rem`, `2rem`, `4rem`). Padding vertikal section seragam.
- **Bentuk:** Radius konsisten (`4px` atau `8px`). Border 1px halus lebih diutamakan daripada bayangan (shadow) tebal.

---

## 4. Daftar Larangan Keras (Anti "AI Slop")
Hindari pola-pola generik yang membuat website terlihat seperti hasil generator instan:
- ❌ Gradient ungu-ke-biru default, gradient teks pada heading, efek neon glow, background blob SVG acak.
- ❌ Glassmorphism berlebihan (`backdrop-blur` tebal), kartu melayang bertumpuk tanpa hierarki.
- ❌ Emoji dijadikan ikon section atau bullet points. Gunakan SVG konsisten satu set (outline/solid) atau tanpa ikon.
- ❌ Layout monoton di setiap section (misal: selalu 3 card kembar sejajar).
- ❌ Semua teks dibuat rata tengah (center). Gunakan rata kiri (left-align) untuk heading dan paragraf bacaan.
- ❌ Copy klise: "Solusi Revolusioner", "Tingkatkan Bisnis Anda ke Tingkat Selanjutnya", "Unleash", tanda seru berulang (!!).
- ❌ Animasi berlebihan, floating badge "AI-Powered", hover effect melompat ekstrem.

---

## 5. Kualitas Detail & Aksesibilitas
- **Mobile-first:** Uji tampilan secara teliti pada 3 breakpoint: Mobile (375px), Tablet (768px), Desktop (1280px). Pastikan **tidak ada scroll horizontal**.
- **Hierarki visual:** Tepat satu fokus utama per section, satu CTA primer per viewport.
- **HTML Semantik:** Gunakan elemen tepat (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`). Tepat satu `<h1>` per halaman.
- **Aset & Gambar:** Atribut `alt` bermakna, tetapkan `width` dan `height` untuk mencegah layout shift (CLS), gunakan `loading="lazy"` untuk aset di bawah lipatan (fold).
- **Interaksi:** Sediakan state `:hover`, `:focus-visible`, dan `:active`. Transisi halus (150-200ms). Sertakan `@media (prefers-reduced-motion: reduce)`. Target sentuh tombol minimal 44x44px.

---

## 6. Evaluasi Wajib 3 Putaran (Sebelum Selesai)
Wajib diverifikasi secara nyata sebelum tugas dinyatakan selesai (cek rincian: [evaluation-checklist.md](./references/evaluation-checklist.md)):

1. **Putaran 1 - Kebenaran Teknis:**
   - HTML valid, tag tertutup, path file/link benar.
   - Tidak ada error console, tidak ada overflow di 375/768/1280px.
2. **Putaran 2 - Audit Desain:**
   - Cek daftar larangan (bagian 4). Bebas gradient murahan, bebas neon glow, bebas card repetitif.
   - Variabel CSS digunakan konsisten, kontras teks aman, whitespace lega dan teratur.
3. **Putaran 3 - Lingkup & Konten:**
   - Pastikan tidak ada fitur/section liar di luar permintaan.
   - Pastikan tidak ada data/testimoni fiktif; tandai data yang belum lengkap dengan placeholder jelas.

*Catatan:* Jangan mengklaim "tanpa error" tanpa melakukan pengecekan sungguhan. Jika sesuatu tidak dapat diuji langsung, nyatakan secara transparan.

---

## 7. Format Laporan Akhir (Maksimal 5 Baris)
Sampaikan laporan akhir secara ringkas dan padat:
1. File yang dibuat / diubah.
2. Fitur/tampilan utama yang diselesaikan.
3. Bagian placeholder yang perlu diisi user (misal aset/kontak/konten nyata).
4. Aspek yang belum diverifikasi (bila ada keterbatasan lingkungan).
*(Tanpa basa-basi, tanpa pujian diri, tanpa rangkuman langkah yang tidak perlu).*

---

## 8. Panduan Proyek Client & PKL
- Struktur folder bersih: `css/`, `js/`, `assets/` (atau `img/`). Nama file huruf kecil dengan tanda hubung (`style.css`, `main.js`).
- Komentar kode hanya untuk bagian yang butuh konteks teknis penting.
- Kode mudah dibaca dan dimodifikasi oleh developer/klien lain.
