/**
 * DATA PORTOFOLIO PRIBADI
 * Data proyek dan sertifikat disinkronkan langsung dari repositori publik GitHub (@Candradv)
 * dan sertifikat kelulusan resmi Dicoding Indonesia.
 */

const portfolioData = {
  profile: {
    name: "Alif Kenzie Balakosa Efendy",
    role: "Junior Front-End Developer",
    tagline: "Pengembang web pemula yang aktif belajar membangun antarmuka web bersih, responsif, dan mudah dipahami.",
    about: "Saya adalah pengembang web tingkat pemula yang sedang fokus memperkuat fondasi front-end. Saat ini saya aktif belajar melalui praktik pembuatan proyek mandiri, memahami penulisan kode semantik dan responsif, serta sangat terbuka untuk bimbingan, program magang/PKL, maupun kesempatan belajar hal baru di dunia pengembangan web.",
    
    // Foto profil (fallback SVG rapi; siap diganti file img/profil.jpg jika ada)
    photo: "img/profil-placeholder.svg",
    photoAlt: "Foto Profil Alif Kenzie Balakosa Efendy",

    // Tombol unduh CV (dinonaktifkan)
    cv: {
      show: false,
      file: ""
    },

    // Kelompok keahlian
    skills: [
      {
        kategori: "Core Web Development",
        items: [
          "HTML5 (Semantik)",
          "CSS3 (Flexbox & Grid)",
          "JavaScript (Vanilla ES6+)",
          "Responsive Design (Mobile-First)",
          "Aksesibilitas Web (WCAG AA)"
        ]
      },
      {
        kategori: "Alat, Hosting & Fondasi Teknis",
        items: [
          "Git & GitHub (@Candradv)",
          "Vercel Deployment & Hosting",
          "VS Code & Chrome DevTools",
          "Figma to Code",
          "Dasar AI & Machine Learning"
        ]
      }
    ],

    // Tautan kontak aktual
    contact: {
      email: "cindracandrai@gmail.com",
      github: "https://github.com/Candradv",
      linkedin: "https://linkedin.com/in/[username-linkedin]",
      whatsapp: "https://wa.me/628812922553"
    }
  },

  // Proyek aktual disalin langsung dari GitHub (@Candradv) yang sudah dipublish & dideploy
  projects: [
    {
      id: "proyek-karhutla",
      nama: "Sistem Informasi & Edukasi Karhutla",
      status: "Selesai",
      deskripsi: "Website pemantauan dan edukasi informasi kebakaran hutan dan lahan (Karhutla) dengan tata letak responsif dan akses cepat.",
      teknologi: ["HTML5", "CSS3", "JavaScript", "Vercel"],
      demoUrl: "https://karhutla-zeta.vercel.app",
      repoUrl: "https://github.com/Candradv/Testing",
      image: "img/projects/proyek-karhutla.svg",
      imageAlt: "Preview Website Karhutla di Vercel"
    },
    {
      id: "proyek-hosting-demo",
      nama: "Website Percobaan Hosting",
      status: "Selesai",
      deskripsi: "Proyek eksplorasi antarmuka web modern dengan penerapan styling CSS kustom dan pipeline automated deployment pada Vercel.",
      teknologi: ["HTML5", "CSS3", "Vercel"],
      demoUrl: "https://this-project-eta.vercel.app",
      repoUrl: "https://github.com/Candradv/Website-Percobaan-hosting",
      image: "img/projects/proyek-hosting.svg",
      imageAlt: "Preview Website Percobaan Hosting di Vercel"
    }
  ],

  // Tepat 1 sertifikat resmi
  certificates: [
    {
      id: "cert-dicoding-ai",
      judul: "Belajar Dasar AI",
      penerbit: "Dicoding Indonesia (Google Cloud Partner)",
      tahun: "2026",
      image: "img/sertifikat/belajar-dasar-ai.svg",
      imageAlt: "Sertifikat Kelulusan Belajar Dasar AI - Dicoding Indonesia",
      credentialUrl: "https://dicoding.com/certificates/0LZ0JRJ40X65"
    }
  ]
};
