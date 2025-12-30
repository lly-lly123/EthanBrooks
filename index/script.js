// Simple language translations
const translations = {
  en: {
    "logo": "EthanBrooks",
    "nav.home": "Home",
    "nav.about": "About",
    "nav.portfolio": "Portfolio",
    "nav.contact": "Contact",
    "hero.kicker": "Portfolio & Resume",
    "hero.role": "UX/UI Designer",
    "hero.description":
      "Creative UX/UI designer with 5 years of experience building modern web and mobile applications. Passionate about creating intuitive and beautiful user experiences.",
    "hero.download": "Download Resume",
    "hero.viewWork": "View Portfolio",
    "hero.summaryTitle": "Product-focused UX/UI designer",
    "hero.summaryText":
      "Specialized in crafting clean interfaces and smooth user flows for digital products.",
    "about.title": "About Me",
    "about.subtitle": "Passionate about creating intuitive and beautiful user experiences.",
    "about.paragraph1":
      "Creative UX/UI designer with 5 years of experience building modern web and mobile applications, from concept to launch. I focus on clean visual language, clear information hierarchy, and flows that feel effortless to use.",
    "about.paragraph2":
      "I enjoy collaborating with product managers, developers, and stakeholders to turn ideas into tested prototypes and shipped products. My work spans responsive web design, native mobile interfaces, and component-based design systems.",
    "about.skillsTitle": "Skills",
    "about.detailsTitle": "Profile details",
    "about.details.locationLabel": "Location",
    "about.details.locationValue": "San Francisco, CA, USA (open to remote)",
    "about.details.experienceLabel": "Experience",
    "about.details.experienceValue": "5 years in UX/UI design",
    "about.details.focusLabel": "Focus",
    "about.details.focusValue": "Web & mobile product design, UX flows",
    "about.details.toolsLabel": "Tools",
    "about.details.toolsValue": "Figma, Adobe XD, Photoshop, Illustrator",
    "about.experienceTitle": "Recent experience",
    "about.experience1.period": "2021 — Present",
    "about.experience1.location": "San Francisco · Hybrid",
    "about.experience1.role": "Senior UX/UI Designer – CreativeTech Solutions",
    "about.experience1.text":
      "Leading end-to-end design for web and mobile products, focusing on simplifying complex workflows, improving conversion, and aligning design decisions with business goals.",
    "about.experience2.period": "2019 — 2021",
    "about.experience2.location": "San Francisco · On-site",
    "about.experience2.role": "UX/UI Designer – PixelFlow Studio",
    "about.experience2.text":
      "Designed brand websites and portfolio experiences for clients, collaborating on user research, wireframes, and interactive prototypes for reviews and usability testing.",
    "about.educationTitle": "Education",
    "about.education1.degree": "Bachelor of Arts in Graphic Design",
    "about.education1.school": "University of California · 2015–2019",
    "about.education2.degree": "UX Design Certification",
    "about.education2.school": "Interaction Design Foundation · 2020",
    "portfolio.title": "Selected Projects",
    "portfolio.subtitle": "A snapshot of recent design work across web and mobile products.",
    "portfolio.project1.title": "Project 1: Redesign of e-commerce app",
    "portfolio.project1.description":
      "Redesigned a major e-commerce app for better usability and a modern visual system, simplifying checkout and improving product discovery to increase conversion.",
    "portfolio.project2.title": "Project 2: Portfolio website for a photographer",
    "portfolio.project2.description":
      "Responsive portfolio website for a professional photographer, highlighting visual storytelling, project galleries, and smooth browsing across devices.",
    "portfolio.project3.title": "Project 3: Mobile banking app interface",
    "portfolio.project3.description":
      "Mobile banking app interface designed with a focus on security, trust, and clear access to core actions like transfers, payments, and budgeting.",
    "contact.title": "Contact Me",
    "contact.subtitle":
      "Feel free to reach out for collaborations, freelance work, or just to say hello.",
    "contact.form.nameLabel": "Name",
    "contact.form.namePlaceholder": "Your name",
    "contact.form.emailLabel": "Email",
    "contact.form.emailPlaceholder": "you@example.com",
    "contact.form.messageLabel": "Message",
    "contact.form.messagePlaceholder": "How can I help you?",
    "contact.form.submit": "Send Message",
    "contact.infoTitle": "Let's work together",
    "contact.infoText":
      "I am open to remote-friendly roles, contract work, and selected freelance projects. Share a bit about your product, timeline, and goals, and I'll get back to you shortly.",
    "contact.infoEmailLabel": "Email",
    "contact.infoPhoneLabel": "Phone",
    "contact.infoAddressLabel": "Address",
    "contact.infoAddressValue":
      "1234 Design Street, San Francisco, CA, USA",
    "photos.title": "Photography snapshots",
    "photos.subtitle":
      "A small selection of personal photography exploring light, texture, and everyday scenes.",
    "footer.role": "UX/UI Designer",
  },
  es: {
    "logo": "EthanBrooks",
    "nav.home": "Inicio",
    "nav.about": "Sobre mí",
    "nav.portfolio": "Portafolio",
    "nav.contact": "Contacto",
    "hero.kicker": "Portafolio y Currículum",
    "hero.role": "Diseñador UX/UI",
    "hero.description":
      "Diseñador UX/UI creativo con 5 años de experiencia creando aplicaciones web y móviles modernas.",
    "hero.download": "Descargar CV",
    "hero.viewWork": "Ver portafolio",
    "hero.summaryTitle": "Diseñador UX/UI enfocado en producto",
    "hero.summaryText":
      "Especializado en crear interfaces limpias y flujos de usuario fluidos para productos digitales.",
    "about.title": "Sobre mí",
    "about.subtitle":
      "Apasionado por crear experiencias de usuario intuitivas y hermosas.",
    "about.paragraph1":
      "Diseñador UX/UI creativo con 5 años de experiencia creando aplicaciones web y móviles modernas, desde la idea hasta el lanzamiento. Me centro en un lenguaje visual limpio, jerarquía clara y flujos que se sienten naturales de usar.",
    "about.paragraph2":
      "Disfruto colaborar con producto, desarrollo y otros interesados para convertir ideas en prototipos probados y productos en producción. Mi trabajo abarca diseño web responsivo, interfaces móviles nativas y sistemas de diseño basados en componentes.",
    "about.skillsTitle": "Habilidades",
    "about.detailsTitle": "Detalles del perfil",
    "about.details.locationLabel": "Ubicación",
    "about.details.locationValue": "San Francisco, EE. UU. (abierto a remoto)",
    "about.details.experienceLabel": "Experiencia",
    "about.details.experienceValue": "5 años en diseño UX/UI",
    "about.details.focusLabel": "Enfoque",
    "about.details.focusValue":
      "Diseño de producto web y móvil, flujos de experiencia",
    "about.details.toolsLabel": "Herramientas",
    "about.details.toolsValue":
      "Figma, Adobe XD, Photoshop, Illustrator",
    "about.experienceTitle": "Experiencia reciente",
    "about.experience1.period": "2021 — Actualidad",
    "about.experience1.location": "San Francisco · Híbrido",
    "about.experience1.role":
      "Senior UX/UI Designer – CreativeTech Solutions",
    "about.experience1.text":
      "Liderando el diseño de productos web y móviles, simplificando flujos complejos, mejorando la conversión y alineando las decisiones de diseño con los objetivos de negocio.",
    "about.experience2.period": "2019 — 2021",
    "about.experience2.location": "San Francisco · Presencial",
    "about.experience2.role":
      "UX/UI Designer – PixelFlow Studio",
    "about.experience2.text":
      "Diseñé sitios de marca y portafolios para clientes, colaborando en investigación de usuario, wireframes y prototipos interactivos para pruebas y revisiones.",
    "about.educationTitle": "Educación",
    "about.education1.degree":
      "Bachelor of Arts en Diseño Gráfico",
    "about.education1.school":
      "University of California · 2015–2019",
    "about.education2.degree": "Certificación en UX Design",
    "about.education2.school":
      "Interaction Design Foundation · 2020",
    "portfolio.title": "Proyectos seleccionados",
    "portfolio.subtitle":
      "Una muestra de trabajo reciente de diseño en productos web y móviles.",
    "portfolio.project1.title": "Proyecto 1: Rediseño de app de comercio electrónico",
    "portfolio.project1.description":
      "Rediseño de una app de e-commerce para mejorar la usabilidad y modernizar el sistema visual, simplificando el pago y mejorando el descubrimiento de productos para aumentar la conversión.",
    "portfolio.project2.title": "Proyecto 2: Web de portafolio para fotógrafo",
    "portfolio.project2.description":
      "Sitio de portafolio responsivo para un fotógrafo profesional, destacando la narrativa visual, galerías de proyectos y una navegación fluida en todos los dispositivos.",
    "portfolio.project3.title": "Proyecto 3: Interfaz de app de banca móvil",
    "portfolio.project3.description":
      "Interfaz de banca móvil diseñada con foco en seguridad, confianza y acceso claro a acciones clave como transferencias, pagos y control de presupuesto.",
    "contact.title": "Contáctame",
    "contact.subtitle":
      "No dudes en escribirme para colaboraciones, proyectos freelance o simplemente para saludar.",
    "contact.form.nameLabel": "Nombre",
    "contact.form.namePlaceholder": "Tu nombre",
    "contact.form.emailLabel": "Correo electrónico",
    "contact.form.emailPlaceholder": "tu@ejemplo.com",
    "contact.form.messageLabel": "Mensaje",
    "contact.form.messagePlaceholder": "¿En qué puedo ayudarte?",
    "contact.form.submit": "Enviar mensaje",
    "contact.infoTitle": "Trabajemos juntos",
    "contact.infoText":
      "Estoy abierto a roles remotos, trabajo por contrato y proyectos freelance seleccionados. Cuéntame sobre tu producto, plazos y objetivos, y te responderé pronto.",
    "contact.infoEmailLabel": "Correo",
    "contact.infoPhoneLabel": "Teléfono",
    "contact.infoAddressLabel": "Dirección",
    "contact.infoAddressValue":
      "1234 Design Street, San Francisco, CA, EE. UU.",
    "photos.title": "Instantáneas de fotografía",
    "photos.subtitle":
      "Una pequeña selección de fotografía personal que explora luz, textura y escenas cotidianas.",
    "footer.role": "Diseñador UX/UI",
  },
};

function applyTranslations(lang) {
  const dict = translations[lang] || translations.en;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) {
      el.textContent = dict[key];
    }
  });

  document
    .querySelectorAll("[data-i18n-placeholder]")
    .forEach((el) => {
      const key = el.getAttribute("data-i18n-placeholder");
      if (dict[key]) {
        el.setAttribute("placeholder", dict[key]);
      }
    });

  // 更新 html 的 lang 属性，利于可访问性与 SEO
  if (typeof document !== "undefined" && document.documentElement) {
    document.documentElement.lang = lang;
  }
}

function setActiveLanguage(lang) {
  const buttons = document.querySelectorAll(".lang-btn");
  buttons.forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.lang === lang);
  });
}

function initLanguageSwitcher() {
  const savedLang = window.localStorage.getItem("ethan_site_lang");
  const initialLang = (savedLang && translations[savedLang]) ? savedLang : "en";

  applyTranslations(initialLang);
  setActiveLanguage(initialLang);

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const lang = btn.dataset.lang;
      applyTranslations(lang);
      setActiveLanguage(lang);
      window.localStorage.setItem("ethan_site_lang", lang);
    });
  });
}

function initNavToggle() {
  const nav = document.querySelector(".main-nav");
  const toggle = document.querySelector(".nav-toggle");
  if (!nav || !toggle) return;

  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    toggle.classList.toggle("open", isOpen);
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      if (nav.classList.contains("open")) {
        nav.classList.remove("open");
        toggle.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  });
}

function initYear() {
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
}

function generateResumePdf() {
  if (typeof window.html2pdf === "undefined") {
    alert("PDF generation library is not loaded. Please refresh the page and try again.");
    console.error("html2pdf.js is not loaded.");
    return;
  }

  // 检查是否在 file:// 协议下（本地文件）
  const isLocalFile = window.location.protocol === "file:";
  if (isLocalFile) {
    const useServer = confirm(
      "PDF generation may not work with local files.\n\n" +
      "For best results, please:\n" +
      "1. Use a local server (e.g., 'python3 -m http.server 8000')\n" +
      "2. Open http://localhost:8000/index.html\n\n" +
      "Click OK to try anyway, or Cancel to stop."
    );
    if (!useServer) return;
  }

  // 使用主内容区域（包含英雄区、关于、作品集、联系和水印）
  const sourceElement = document.querySelector("main") || document.body;

  // 为了避免滚动条对截图的影响，生成前暂时滚动到顶部
  const originalScrollY = window.scrollY;
  window.scrollTo(0, 0);

  // 显示加载提示
  const btn = document.getElementById("download-resume-btn");
  const originalText = btn ? btn.textContent : "";
  if (btn) {
    btn.textContent = "Generating PDF...";
    btn.disabled = true;
  }

  const opt = {
    margin: [0.4, 0.4, 0.4, 0.4],
    filename: "Ethan_Brooks_Resume.pdf",
    image: { type: "jpeg", quality: 0.98 },
    html2canvas: {
      scale: window.devicePixelRatio > 1 ? 2 : 1.5,
      useCORS: false,
      allowTaint: true,
      logging: false,
      scrollX: 0,
      scrollY: 0,
      windowWidth: document.documentElement.scrollWidth,
      windowHeight: document.documentElement.scrollHeight,
      backgroundColor: "#ffffff",
    },
    jsPDF: { unit: "in", format: "a4", orientation: "portrait" },
    pagebreak: {
      mode: ["css", "legacy"],
      avoid: ["img", ".page-watermark"],
    },
  };

  window.html2pdf()
    .set(opt)
    .from(sourceElement)
    .save()
    .then(() => {
      window.scrollTo(0, originalScrollY);
      if (btn) {
        btn.textContent = originalText;
        btn.disabled = false;
      }
    })
    .catch((err) => {
      console.error("Failed to generate PDF:", err);
      window.scrollTo(0, originalScrollY);
      if (btn) {
        btn.textContent = originalText;
        btn.disabled = false;
      }
      
      let errorMsg = "Failed to generate PDF. ";
      if (err.message && err.message.includes("SecurityError")) {
        errorMsg += "This is likely due to browser security restrictions with local files.\n\n";
        errorMsg += "Please use a local server instead:\n";
        errorMsg += "1. Open Terminal\n";
        errorMsg += "2. Run: cd \"" + window.location.pathname.replace(/\/[^/]*$/, "") + "\"\n";
        errorMsg += "3. Run: python3 -m http.server 8000\n";
        errorMsg += "4. Open: http://localhost:8000/index.html";
      } else {
        errorMsg += err.message || "Unknown error occurred.";
      }
      alert(errorMsg);
    });
}

function initResumePdfDownload() {
  const btn = document.getElementById("download-resume-btn");
  if (!btn) return;

  btn.addEventListener("click", (event) => {
    event.preventDefault();
    btn.blur();
    generateResumePdf();
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initLanguageSwitcher();
  initNavToggle();
  initYear();
  initResumePdfDownload();
});


