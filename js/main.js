/**
 * MAIN.JS - Logika Rendering dan Interaksi Portofolio
 * Berjalan murni menggunakan Vanilla JavaScript tanpa dependensi eksternal.
 */

document.addEventListener("DOMContentLoaded", () => {
  // Pastikan data portofolio tersedia
  if (typeof portfolioData === "undefined") {
    console.error("portfolioData tidak ditemukan. Pastikan js/data.js dimuat sebelum js/main.js.");
    return;
  }

  const { profile, projects, certificates } = portfolioData;

  // 1. Inisialisasi Data Profil ke Hero & Nav
  renderProfile(profile);

  // 2. Render Kategori Skill
  renderSkills(profile.skills);

  // 3. Render Daftar Proyek
  renderProjects(projects);

  // 4. Render Daftar Sertifikat & Pasang Event Modal
  renderCertificates(certificates);

  // 5. Render Tautan Kontak
  renderContacts(profile.contact);

  // 6. Inisialisasi Modal Pratinjau Sertifikat
  initCertificateModal();

  // 7. Update Tahun Otomatis di Footer
  const yearEl = document.getElementById("current-year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
});

/**
 * Render Data Profil
 */
function renderProfile(profile) {
  if (!profile) return;

  const heroName = document.getElementById("hero-name");
  const heroRole = document.getElementById("hero-role");
  const heroTagline = document.getElementById("hero-tagline");
  const heroPhoto = document.getElementById("hero-photo");
  const heroCvBtn = document.getElementById("hero-cv-btn");
  const aboutText = document.getElementById("about-text");
  const footerName = document.getElementById("footer-name");
  const navBrand = document.getElementById("nav-brand");

  if (heroName) heroName.textContent = profile.name || "Nama Lengkap";
  if (heroRole) heroRole.textContent = profile.role || "Web Developer";
  if (heroTagline) heroTagline.textContent = profile.tagline || "";
  if (aboutText) aboutText.textContent = profile.about || "";
  if (footerName) footerName.textContent = profile.name || "";

  // Inisial untuk brand navigasi
  if (navBrand && profile.name) {
    const initials = profile.name
      .split(" ")
      .filter(Boolean)
      .map(part => part[0])
      .slice(0, 2)
      .join("")
      .toUpperCase();
    navBrand.textContent = initials || "AK";
  }

  // Foto Profil
  if (heroPhoto && profile.photo) {
    heroPhoto.src = profile.photo;
    heroPhoto.alt = profile.photoAlt || `Foto Profil ${profile.name}`;
  }

  // Tombol Unduh CV
  if (heroCvBtn) {
    if (profile.cv && profile.cv.show) {
      heroCvBtn.href = profile.cv.file || "cv/cv.pdf";
      heroCvBtn.removeAttribute("hidden");
    } else {
      heroCvBtn.setAttribute("hidden", "true");
    }
  }
}

/**
 * Render Kategori & Butir Skill
 */
function renderSkills(skills) {
  const container = document.getElementById("skills-container");
  if (!container || !Array.isArray(skills)) return;

  container.innerHTML = "";

  skills.forEach(group => {
    const card = document.createElement("div");
    card.className = "skill-category-card";

    const title = document.createElement("h3");
    title.className = "skill-category-title";
    title.textContent = group.kategori;

    const list = document.createElement("ul");
    list.className = "skill-items-list";

    group.items.forEach(item => {
      const li = document.createElement("li");
      li.className = "skill-item";
      li.textContent = item;
      list.appendChild(li);
    });

    card.appendChild(title);
    card.appendChild(list);
    container.appendChild(card);
  });
}

/**
 * Render Daftar Proyek
 */
function renderProjects(projects) {
  const container = document.getElementById("projects-container");
  if (!container || !Array.isArray(projects)) return;

  container.innerHTML = "";

  projects.forEach(project => {
    const card = document.createElement("article");
    card.className = "project-card";

    // Status Badge Class
    const isSelesai = project.status.toLowerCase().includes("selesai");
    const badgeClass = isSelesai ? "badge-selesai" : "badge-proses";

    // Tech Tags Markup
    const techTagsHtml = Array.isArray(project.teknologi)
      ? project.teknologi.map(t => `<span class="tech-tag">${escapeHtml(t)}</span>`).join("")
      : "";

    // Action Links
    let linksHtml = "";
    if (project.demoUrl) {
      linksHtml += `<a href="${escapeHtml(project.demoUrl)}" class="project-link" target="_blank" rel="noopener noreferrer">Live Demo &nearr;</a>`;
    }
    if (project.repoUrl) {
      linksHtml += `<a href="${escapeHtml(project.repoUrl)}" class="project-link" target="_blank" rel="noopener noreferrer">Repositori &nearr;</a>`;
    }
    if (!linksHtml) {
      linksHtml = `<span class="project-link" style="color: var(--text-light); font-weight: normal;">Dokumentasi Internal</span>`;
    }

    card.innerHTML = `
      <div class="project-thumb-link">
        <img src="${escapeHtml(project.image)}" alt="${escapeHtml(project.imageAlt || project.nama)}" class="project-thumb" width="400" height="225" loading="lazy">
      </div>
      <div class="project-body">
        <div class="project-status-bar">
          <span class="badge ${badgeClass}">${escapeHtml(project.status)}</span>
        </div>
        <h3 class="project-title">${escapeHtml(project.nama)}</h3>
        <p class="project-description">${escapeHtml(project.deskripsi)}</p>
        <div class="project-tech-tags">
          ${techTagsHtml}
        </div>
        <div class="project-links">
          ${linksHtml}
        </div>
      </div>
    `;

    container.appendChild(card);
  });
}

/**
 * Render Daftar Sertifikat
 */
function renderCertificates(certificates) {
  const container = document.getElementById("certificates-container");
  if (!container || !Array.isArray(certificates)) return;

  container.innerHTML = "";

  certificates.forEach(cert => {
    const card = document.createElement("article");
    card.className = "cert-card";

    const credLinkHtml = cert.credentialUrl
      ? `<a href="${escapeHtml(cert.credentialUrl)}" class="cert-link" target="_blank" rel="noopener noreferrer">Verifikasi Kredensial &nearr;</a>`
      : "";

    card.innerHTML = `
      <button type="button" class="cert-img-btn" data-cert-id="${escapeHtml(cert.id)}" aria-label="Perbesar gambar sertifikat ${escapeHtml(cert.judul)}">
        <img src="${escapeHtml(cert.image)}" alt="${escapeHtml(cert.imageAlt || cert.judul)}" class="cert-thumb" width="400" height="275" loading="lazy">
      </button>
      <div class="cert-body">
        <h3 class="cert-title">${escapeHtml(cert.judul)}</h3>
        <p class="cert-issuer">${escapeHtml(cert.penerbit)}</p>
        <p class="cert-year">${escapeHtml(cert.tahun)}</p>
        ${credLinkHtml}
      </div>
    `;

    // Pasang event listener klik thumbnail untuk membuka modal
    const imgBtn = card.querySelector(".cert-img-btn");
    imgBtn.addEventListener("click", () => {
      openCertificateModal(cert);
    });

    container.appendChild(card);
  });
}

/**
 * Render Tautan Kontak
 */
function renderContacts(contact) {
  const container = document.getElementById("contact-links-container");
  if (!container || !contact) return;

  container.innerHTML = "";

  const items = [
    { label: "Email", value: contact.email, href: `mailto:${contact.email}` },
    { label: "GitHub", value: extractHandle(contact.github), href: contact.github },
    { label: "LinkedIn", value: extractHandle(contact.linkedin), href: contact.linkedin },
    { label: "WhatsApp", value: "08812922553", href: contact.whatsapp }
  ];

  items.forEach(item => {
    if (!item.value) return;

    const a = document.createElement("a");
    a.className = "contact-card";
    a.href = item.href;
    a.target = item.href.startsWith("mailto:") ? "_self" : "_blank";
    a.rel = "noopener noreferrer";

    a.innerHTML = `
      <span class="contact-label">${escapeHtml(item.label)}</span>
      <span class="contact-value">${escapeHtml(item.value)}</span>
    `;

    container.appendChild(a);
  });
}

/**
 * Modal Pratinjau Sertifikat
 */
let lastActiveElement = null;

function initCertificateModal() {
  const modal = document.getElementById("cert-modal");
  const closeBtn = document.getElementById("modal-close-btn");
  const backdrop = document.getElementById("modal-backdrop");

  if (!modal) return;

  const closeModal = () => {
    modal.setAttribute("hidden", "true");
    document.body.style.overflow = "";
    if (lastActiveElement) {
      lastActiveElement.focus();
    }
  };

  if (closeBtn) closeBtn.addEventListener("click", closeModal);
  if (backdrop) backdrop.addEventListener("click", closeModal);

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !modal.hasAttribute("hidden")) {
      closeModal();
    }
  });
}

function openCertificateModal(cert) {
  const modal = document.getElementById("cert-modal");
  const modalTitle = document.getElementById("modal-title");
  const modalImg = document.getElementById("modal-img");
  const modalIssuer = document.getElementById("modal-issuer");
  const modalCredLink = document.getElementById("modal-cred-link");
  const closeBtn = document.getElementById("modal-close-btn");

  if (!modal) return;

  lastActiveElement = document.activeElement;

  if (modalTitle) modalTitle.textContent = cert.judul;
  if (modalImg) {
    modalImg.src = cert.image;
    modalImg.alt = cert.imageAlt || cert.judul;
  }
  if (modalIssuer) modalIssuer.textContent = `${cert.penerbit} (${cert.tahun})`;

  if (modalCredLink) {
    if (cert.credentialUrl) {
      modalCredLink.href = cert.credentialUrl;
      modalCredLink.removeAttribute("hidden");
    } else {
      modalCredLink.setAttribute("hidden", "true");
    }
  }

  modal.removeAttribute("hidden");
  document.body.style.overflow = "hidden"; // Mencegah scrolling latar saat modal terbuka

  if (closeBtn) closeBtn.focus();
}

/**
 * Utilitas sanitasi teks sederhana untuk mencegah XSS
 */
function escapeHtml(str) {
  if (typeof str !== "string") return "";
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function extractHandle(url) {
  if (!url) return "";
  try {
    const clean = url.replace(/\/$/, "");
    const parts = clean.split("/");
    return parts[parts.length - 1] || url;
  } catch {
    return url;
  }
}
