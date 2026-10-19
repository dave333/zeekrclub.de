// Alla texter på sidan, på tyska och engelska.
// Nycklarna matchar data-i18n / data-i18n-html-attributen i index.html.
const translations = {
  de: {
    "nav.about": "Über den Club",
    "nav.gallery": "Galerie",
    "nav.benefits": "Vorteile",
    "nav.rules": "Regeln",
    "nav.discord": "Auf Discord beitreten",
    "gallery.heading": "Galerie",
    "gallery.slide1.alt": "Zeekr Club Deutschland – Zeekr kommt nach Deutschland",
    "gallery.slide2": "Bild 2 folgt bald",
    "gallery.slide3": "Bild 3 folgt bald",
    "gallery.prev": "Vorheriges Bild",
    "gallery.next": "Nächstes Bild",
    "hero.heading": 'Willkommen bei <span class="accent">Zeekr Club</span>',
    "hero.text": "Die Community für Zeekr-Besitzer und -Enthusiasten. Teile Erfahrungen, hol dir Tipps und triff Gleichgesinnte auf Discord.",
    "hero.cta": "Der Community beitreten",
    "about.heading": "Über den Club",
    "about.text": "Zeekr Club ist eine Community von und für Besitzer und Fans von Zeekr. Hier kannst du Fragen stellen, Bilder deines Autos teilen und über alles diskutieren – von Laden und Reichweite bis zu Zubehör und Software-Updates. Egal ob du bereits einen Zeekr besitzt oder einfach neugierig bist, du bist willkommen.",
    "benefits.heading": "Was du als Mitglied bekommst",
    "benefits.card1.title": "Gemeinschaft",
    "benefits.card1.text": "Tausche dich mit anderen Zeekr-Besitzern aus, teile Erfahrungen und erhalte Antworten auf deine Fragen.",
    "benefits.card2.title": "News & Tipps",
    "benefits.card2.text": "Bleib auf dem Laufenden über neue Modelle, Software und praktisches Zubehör.",
    "benefits.card3.title": "Treffen & Events",
    "benefits.card3.text": "Erfahre mehr über Treffen, Roadtrips und andere Events der Community.",
    "rules.heading": "Regeln auf einen Blick",
    "rules.item1": "Sei freundlich und respektvoll gegenüber anderen Mitgliedern.",
    "rules.item2": "Kein Spam, keine Werbung und keine illegalen Inhalte.",
    "rules.item3": "Halte Diskussionen im passenden Kanal.",
    "cta.heading": "Bereit, Mitglied zu werden?",
    "footer.facebookHeading": "Facebook-Gruppen",
    "footer.generalGroup": "Zeekr (Allgemein)",
    "footer.text": "© 2026 Zeekr Club. Nicht offiziell mit Zeekr verbunden.",
  },
  en: {
    "nav.about": "About",
    "nav.gallery": "Gallery",
    "nav.benefits": "Benefits",
    "nav.rules": "Rules",
    "nav.discord": "Join on Discord",
    "gallery.heading": "Gallery",
    "gallery.slide1.alt": "Zeekr Club Germany – Zeekr is coming to Germany",
    "gallery.slide2": "Image 2 coming soon",
    "gallery.slide3": "Image 3 coming soon",
    "gallery.prev": "Previous image",
    "gallery.next": "Next image",
    "hero.heading": 'Welcome to <span class="accent">Zeekr Club</span>',
    "hero.text": "The community for Zeekr owners and enthusiasts. Share experiences, get tips, and meet like-minded people on Discord.",
    "hero.cta": "Join the club",
    "about.heading": "About the club",
    "about.text": "Zeekr Club is a community built by and for Zeekr owners and fans. Here you can ask questions, share pictures of your car, and discuss everything from charging and range to accessories and software updates. Whether you already own a Zeekr or are just curious, you're welcome.",
    "benefits.heading": "What you get as a member",
    "benefits.card1.title": "Community",
    "benefits.card1.text": "Chat with other Zeekr owners, share experiences, and get answers to your questions.",
    "benefits.card2.title": "News & tips",
    "benefits.card2.text": "Stay up to date on new models, software, and handy accessories.",
    "benefits.card3.title": "Meetups & events",
    "benefits.card3.text": "Keep track of meetups, road trips, and other events organized by the community.",
    "rules.heading": "Rules at a glance",
    "rules.item1": "Be kind and respectful toward other members.",
    "rules.item2": "No spam, advertising, or illegal content.",
    "rules.item3": "Keep discussions relevant to the right channel.",
    "cta.heading": "Ready to join?",
    "footer.facebookHeading": "Facebook groups",
    "footer.generalGroup": "Zeekr (General)",
    "footer.text": "© 2026 Zeekr Club. Not officially affiliated with Zeekr.",
  },
};

const DEFAULT_LANG = "de";

// Läser bort / sparar vilket språk besökaren valde senast
function getSavedLang() {
  try {
    return localStorage.getItem("zeekr-lang");
  } catch (e) {
    return null;
  }
}

function saveLang(lang) {
  try {
    localStorage.setItem("zeekr-lang", lang);
  } catch (e) {
    // localStorage kan vara blockerat, strunta i det då
  }
}

// Byter allt textinnehåll på sidan till valt språk
function applyLanguage(lang) {
  const dict = translations[lang] || translations[DEFAULT_LANG];

  document.documentElement.lang = lang;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) el.textContent = dict[key];
  });

  document.querySelectorAll("[data-i18n-html]").forEach((el) => {
    const key = el.getAttribute("data-i18n-html");
    if (dict[key]) el.innerHTML = dict[key];
  });

  document.querySelectorAll("[data-i18n-alt]").forEach((el) => {
    const key = el.getAttribute("data-i18n-alt");
    if (dict[key]) el.setAttribute("alt", dict[key]);
  });

  document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
    const key = el.getAttribute("data-i18n-aria");
    if (dict[key]) el.setAttribute("aria-label", dict[key]);
  });

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.getAttribute("data-lang") === lang);
  });

  saveLang(lang);
}

document.querySelectorAll(".lang-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    applyLanguage(btn.getAttribute("data-lang"));
  });
});

applyLanguage(getSavedLang() || DEFAULT_LANG);

// ---------- Bildspel ----------
const slideshow = document.querySelector(".slideshow");

if (slideshow) {
  const slides = slideshow.querySelectorAll(".slide");
  const dots = slideshow.querySelectorAll(".dot");
  const prevBtn = slideshow.querySelector(".slide-arrow.prev");
  const nextBtn = slideshow.querySelector(".slide-arrow.next");
  let currentSlide = 0;
  let autoplayTimer = null;

  function showSlide(index) {
    currentSlide = (index + slides.length) % slides.length;
    slides.forEach((slide, i) => slide.classList.toggle("active", i === currentSlide));
    dots.forEach((dot, i) => dot.classList.toggle("active", i === currentSlide));
  }

  function startAutoplay() {
    stopAutoplay();
    autoplayTimer = setInterval(() => showSlide(currentSlide + 1), 6000);
  }

  function stopAutoplay() {
    if (autoplayTimer) clearInterval(autoplayTimer);
  }

  prevBtn.addEventListener("click", () => {
    showSlide(currentSlide - 1);
    startAutoplay();
  });

  nextBtn.addEventListener("click", () => {
    showSlide(currentSlide + 1);
    startAutoplay();
  });

  dots.forEach((dot, i) => {
    dot.addEventListener("click", () => {
      showSlide(i);
      startAutoplay();
    });
  });

  slideshow.addEventListener("mouseenter", stopAutoplay);
  slideshow.addEventListener("mouseleave", startAutoplay);

  startAutoplay();
}

// Gör så att klick på nav-länkar scrollar mjukt till rätt sektion
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    const targetId = link.getAttribute("href");
    const targetEl = document.querySelector(targetId);

    if (targetEl) {
      event.preventDefault();
      targetEl.scrollIntoView({ behavior: "smooth" });
    }
  });
});
