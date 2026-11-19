# Evaluasi Wajib 3 Putaran (Verification Checklist)

Lakukan evaluasi ini secara nyata terhadap kode yang telah dibuat atau diubah sebelum menyatakan pekerjaan selesai.

---

### Putaran 1: Kebenaran Teknis & Responsivitas
- [ ] **Sintaks & Struktur:** HTML valid, tag terbuka berpasangan dengan penutup, semantic tags (`header`, `main`, `section`, `article`, `nav`, `footer`).
- [ ] **Heading:** Tepat satu `h1` di halaman. Tingkat heading urut (`h1` -> `h2` -> `h3`), tidak melompati tingkatan demi ukuran visual.
- [ ] **Path & Aset:** Semua path CSS, JS, dan gambar (`src`, `href`) valid dan dapat dimuat.
- [ ] **Aksesibilitas Gambar:** Semua tag `<img>` memiliki atribut `alt` yang deskriptif (atau `alt=""` jika murni dekoratif). Tag gambar di bawah fold memiliki `loading="lazy"`.
- [ ] **Responsif & Overflow:** Uji mental atau inspeksi pada 3 breakpoint kunci:
  - Mobile (375px)
  - Tablet (768px)
  - Desktop (1280px+)
- [ ] **Zero Horizontal Scroll:** Pastikan tidak ada elemen yang menyebabkan scrollbar horizontal di layar ponsel (`overflow-x: hidden` pada container bukan alasan untuk membiarkan elemen bocor).
- [ ] **Interaksi Keyboard & Touch Target:** Semua link dan button memiliki `:focus-visible` outline yang jelas dan ukuran target sentuh minimal 44x44px.

---

### Putaran 2: Integritas Desain & Audit Anti-AI Slop
- [ ] **Bebas AI Slop:**
  - [ ] TIDAK ADA gradient teks atau gradient ungu-biru generik.
  - [ ] TIDAK ADA glow/neon, kartu bertumpuk acak, atau glassmorphism berlebihan.
  - [ ] TIDAK ADA emoji sebagai ikon heading atau bullet list.
  - [ ] TIDAK ADA section yang semuanya berpola "3 kartu kembar berjejer".
  - [ ] Teks panjang rata kiri (left-aligned), bukan rata tengah (center).
- [ ] **Konsistensi Variabel (Design Tokens):**
  - Warna menggunakan variabel CSS `--bg-*`, `--text-*`, `--accent-*`.
  - Spasi menggunakan kelipatan 4px / 8px konsisten.
  - Radius border konsisten (1 atau maksimal 2 varian).
- [ ] **Kontras & Keterbacaan:**
  - Teks body terhadap background memenuhi minimal 4.5:1 (WCAG AA).
  - Panjang baris bacaan (reading line length) dibatasi antara 60-75 karakter (`max-width: ~68ch`).
- [ ] **Motion:** Transisi halus (150-200ms) pada properti `color`, `background-color`, atau `border-color`. Terdapat media query `@media (prefers-reduced-motion: reduce)`.

---

### Putaran 3: Lingkup Kerja, Copy & Kejujuran Data
- [ ] **Kepatuhan Lingkup:** Tidak ada penambahan fitur/library/section baru yang tidak diminta (misal: jangan pasang library slider jika hanya butuh grid).
- [ ] **Bebas Konten Palsu:**
  - Tidak ada testimoni palsu, foto profil fiktif, angka metrik karangan ("99% puas", "10k pengguna").
  - Data yang belum disediakan user ditulis dengan placeholder jelas: `[Nama Klien]`, `[Nomor Telepon]`, `[Foto Produk]`.
- [ ] **Bebas Copy Klise:** Tidak ada jargon "Revolusioner", "Solusi Masa Depan", "Unleash your potential", atau tanda seru ganda. Bahasa terasa tenang, wajar, dan profesional.
- [ ] **Laporan Akhir:** Siapkan ringkasan maksimal 5 baris yang menyebutkan file yang diubah/dibuat, placeholder yang perlu diisi user, dan batasan pengujian bila ada.
