// Alla texter på sidan, på tyska och engelska.
// Nycklarna matchar data-i18n / data-i18n-html-attributen i index.html.
const translations = {
  de: {
    "nav.about": "Über den Club",
    "nav.gallery": "Galerie",
    "nav.benefits": "Vorteile",
    "nav.rules": "Regeln",
    "nav.discord": "Auf Discord beitreten",
    "nav.login": "Anmelden",
    "login.title": "Mitgliederbereich",
    "login.text": "Hier entsteht bald ein Mitgliederbereich mit exklusiven Dokumenten und Guides. Die Anmeldung ist noch nicht verfügbar – schau bald wieder vorbei!",
    "gallery.slide1.alt": "Willkommen in unserer Discord-Community",
    "gallery.slide2.alt": "Gut informiert vor dem Kauf",
    "gallery.slide3.alt": "Wissen, bei wem du least",
    "gallery.prev": "Vorheriges Bild",
    "gallery.next": "Nächstes Bild",
    "hero.heading": 'Willkommen bei <span class="accent">Zeekr Club</span>',
    "hero.text": "Die Community für Zeekr-Besitzer und -Enthusiasten. Teile Erfahrungen, hol dir Tipps und triff Gleichgesinnte auf Discord.",
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
    "footer.impressum": "Impressum",
    "footer.datenschutz": "Datenschutz",
    "footer.kontakt": "Kontakt",
    "cookie.text": "Diese Seite nutzt nur technisch notwendige lokale Speicherung (z. B. für deine Sprachauswahl) – keine Tracking-Cookies.",
    "cookie.more": "Mehr erfahren",
    "cookie.ok": "Alles klar",
    "legal.back": "Zurück zur Startseite",
    "legal.impressum.title": "Impressum",
    "legal.impressum.info.heading": "Angaben gemäß § 5 TMG",
    "legal.impressum.contact.heading": "Kontakt",
    "legal.impressum.contact.text": 'Am schnellsten erreichst du uns über unser <a href="kontakt.html">Kontaktformular</a>.',
    "legal.impressum.liability.heading": "Haftung für Inhalte",
    "legal.impressum.liability.text": "Als Betreiber dieser Seite bemühen wir uns um korrekte und aktuelle Inhalte, können jedoch keine Gewähr für Richtigkeit, Vollständigkeit und Aktualität übernehmen. Für Inhalte externer Links (z. B. Discord, Facebook) sind ausschließlich deren Betreiber verantwortlich.",
    "legal.privacy.title": "Datenschutzerklärung",
    "legal.privacy.controller.heading": "Verantwortlicher",
    "legal.privacy.controller.text": 'Zeekr Club DE, siehe <a href="impressum.html">Impressum</a>. Fragen zum Datenschutz beantworten wir gerne über unser <a href="kontakt.html">Kontaktformular</a>.',
    "legal.privacy.hosting.heading": "Hosting",
    "legal.privacy.hosting.text": "Diese Website wird bei Vercel Inc. gehostet. Beim Aufruf der Seite verarbeitet Vercel automatisch technische Server-Logs (z. B. IP-Adresse, Zeitpunkt, aufgerufene Seite), um den Betrieb sicherzustellen. Rechtsgrundlage ist unser berechtigtes Interesse an einem sicheren Betrieb (Art. 6 Abs. 1 lit. f DSGVO).",
    "legal.privacy.storage.heading": "Lokale Speicherung im Browser",
    "legal.privacy.storage.text": "Diese Seite speichert ausschließlich technisch notwendige Daten lokal in deinem Browser (localStorage): deine Sprachauswahl (Deutsch/Englisch) und ob du den Cookie-Hinweis bereits gesehen hast. Diese Daten verlassen deinen Browser nicht und werden nicht an uns übermittelt. Es werden keine Tracking- oder Analyse-Cookies eingesetzt.",
    "legal.privacy.contact.heading": "Kontaktformular",
    "legal.privacy.contact.text": "Unser Kontaktformular öffnet dein eigenes E-Mail-Programm mit einer vorausgefüllten Nachricht an uns. Die Daten werden direkt per E-Mail übermittelt und nicht auf unserem Server gespeichert.",
    "legal.privacy.links.heading": "Externe Links",
    "legal.privacy.links.text": "Diese Seite verlinkt zu Discord und Facebook-Gruppen. Für die dortige Datenverarbeitung gelten die Datenschutzbestimmungen des jeweiligen Anbieters.",
    "legal.privacy.rights.heading": "Deine Rechte",
    "legal.privacy.rights.text": "Du hast das Recht auf Auskunft, Berichtigung, Löschung und Einschränkung der Verarbeitung deiner Daten sowie auf Datenübertragbarkeit und Widerspruch. Wende dich hierzu über unser Kontaktformular an uns.",
    "legal.contact.title": "Kontakt",
    "legal.contact.text": "Schreib uns eine Nachricht – dein E-Mail-Programm öffnet sich mit allem schon ausgefüllt.",
    "legal.contact.nameLabel": "Name",
    "legal.contact.emailLabel": "Deine E-Mail-Adresse",
    "legal.contact.messageLabel": "Nachricht",
    "legal.contact.submit": "Senden",
  },
  en: {
    "nav.about": "About",
    "nav.gallery": "Gallery",
    "nav.benefits": "Benefits",
    "nav.rules": "Rules",
    "nav.discord": "Join on Discord",
    "nav.login": "Log in",
    "login.title": "Members area",
    "login.text": "A members area with exclusive documents and guides is coming soon. Login isn't available yet – check back soon!",
    "gallery.slide1.alt": "Welcome to our Discord community",
    "gallery.slide2.alt": "Know what you need before you buy",
    "gallery.slide3.alt": "Know who you're leasing from",
    "gallery.prev": "Previous image",
    "gallery.next": "Next image",
    "hero.heading": 'Welcome to <span class="accent">Zeekr Club</span>',
    "hero.text": "The community for Zeekr owners and enthusiasts. Share experiences, get tips, and meet like-minded people on Discord.",
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
    "footer.impressum": "Legal notice",
    "footer.datenschutz": "Privacy policy",
    "footer.kontakt": "Contact",
    "cookie.text": "This site only uses technically necessary local storage (e.g. for your language choice) – no tracking cookies.",
    "cookie.more": "Learn more",
    "cookie.ok": "Got it",
    "legal.back": "Back to homepage",
    "legal.impressum.title": "Legal notice",
    "legal.impressum.info.heading": "Information pursuant to § 5 TMG",
    "legal.impressum.contact.heading": "Contact",
    "legal.impressum.contact.text": 'The fastest way to reach us is via our <a href="kontakt.html">contact form</a>.',
    "legal.impressum.liability.heading": "Liability for content",
    "legal.impressum.liability.text": "As the operator of this site we strive to keep content accurate and up to date, but cannot guarantee its correctness, completeness, or timeliness. The operators of external links (e.g. Discord, Facebook) are solely responsible for their own content.",
    "legal.privacy.title": "Privacy policy",
    "legal.privacy.controller.heading": "Data controller",
    "legal.privacy.controller.text": 'Zeekr Club DE, see <a href="impressum.html">legal notice</a>. For privacy questions, please reach out via our <a href="kontakt.html">contact form</a>.',
    "legal.privacy.hosting.heading": "Hosting",
    "legal.privacy.hosting.text": "This website is hosted by Vercel Inc. When you visit the site, Vercel automatically processes technical server logs (e.g. IP address, timestamp, page requested) to keep the service running. The legal basis is our legitimate interest in secure operation (Art. 6(1)(f) GDPR).",
    "legal.privacy.storage.heading": "Local storage in your browser",
    "legal.privacy.storage.text": "This site only stores technically necessary data locally in your browser (localStorage): your language choice (German/English) and whether you've already seen the cookie notice. This data never leaves your browser and is not sent to us. No tracking or analytics cookies are used.",
    "legal.privacy.contact.heading": "Contact form",
    "legal.privacy.contact.text": "Our contact form opens your own email app with a pre-filled message to us. The data is sent directly via email and is not stored on our server.",
    "legal.privacy.links.heading": "External links",
    "legal.privacy.links.text": "This site links to Discord and Facebook groups. Their own privacy policies apply to any data processing there.",
    "legal.privacy.rights.heading": "Your rights",
    "legal.privacy.rights.text": "You have the right to access, rectify, erase, and restrict the processing of your data, as well as to data portability and objection. Please contact us via our contact form.",
    "legal.contact.title": "Contact",
    "legal.contact.text": "Send us a message – your email app will open with everything already filled in.",
    "legal.contact.nameLabel": "Name",
    "legal.contact.emailLabel": "Your email address",
    "legal.contact.messageLabel": "Message",
    "legal.contact.submit": "Send",
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

  // Bildspelets bilder finns i en tysk och en engelsk version
  document.querySelectorAll("[data-src-de]").forEach((img) => {
    const src = lang === "en" ? img.getAttribute("data-src-en") : img.getAttribute("data-src-de");
    if (src) img.src = src;
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
    autoplayTimer = setInterval(() => showSlide(currentSlide + 1), 15000);
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

// ---------- Cookie-/lagringshänvisning ----------
// Sidan använder inga tracking-cookies, bara nödvändig localStorage (språk, denna banner).
(function setupCookieBanner() {
  let dismissed = false;
  try {
    dismissed = localStorage.getItem("zeekr-cookie-notice") === "dismissed";
  } catch (e) {
    dismissed = false;
  }
  if (dismissed) return;

  const banner = document.createElement("div");
  banner.className = "cookie-banner";
  banner.innerHTML =
    '<p data-i18n="cookie.text"></p>' +
    '<div class="cookie-banner-actions">' +
    '<a href="datenschutz.html" data-i18n="cookie.more"></a>' +
    '<button type="button" class="btn btn-primary" data-i18n="cookie.ok"></button>' +
    "</div>";
  document.body.appendChild(banner);
  applyLanguage(getSavedLang() || DEFAULT_LANG);

  banner.querySelector(".btn-primary").addEventListener("click", () => {
    try {
      localStorage.setItem("zeekr-cookie-notice", "dismissed");
    } catch (e) {
      // localStorage kan vara blockerat, strunta i det då
    }
    banner.remove();
  });
})();

// ---------- Kontaktformulär (öppnar besökarens e-postprogram) ----------
const contactForm = document.getElementById("contact-form");

if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = contactForm.name.value.trim();
    const email = contactForm.email.value.trim();
    const message = contactForm.message.value.trim();

    const subject = encodeURIComponent("Nachricht von " + name + " (Zeekr Club Website)");
    const body = encodeURIComponent(message + "\n\n– " + name + " (" + email + ")");

    window.location.href = "mailto:nygdavid@gmail.com?subject=" + subject + "&body=" + body;
  });
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
