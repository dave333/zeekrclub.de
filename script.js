// Alla texter på sidan, på tyska och engelska.
// Nycklarna matchar data-i18n / data-i18n-html-attributen i index.html.
const translations = {
  de: {
    "nav.about": "Über den Club",
    "nav.gallery": "Galerie",
    "nav.forum": "Forum",
    "nav.benefits": "Themen",
    "nav.rules": "Regeln",
    "nav.discord": "Auf Discord beitreten",
    "nav.login": "Anmelden",
    "login.title": "Mitgliederbereich",
    "login.text": "Hier entsteht bald ein Mitgliederbereich mit exklusiven Dokumenten und Guides. Melde dich mit deinem Discord-Konto an, das du bereits vom Forum kennst.",
    "login.welcomePrefix": "Angemeldet als",
    "login.welcomeSuffix": "über Discord.",
    "login.cta": "Mit Discord anmelden",
    "login.logout": "Abmelden",
    "gallery.slide1.alt": "Willkommen in unserer Discord-Community",
    "gallery.slide2.alt": "Gut informiert vor dem Kauf",
    "gallery.slide3.alt": "Wissen, bei wem du least",
    "gallery.prev": "Vorheriges Bild",
    "gallery.next": "Nächstes Bild",
    "hero.heading": 'Willkommen bei <span class="accent">Zeekr Club</span>',
    "hero.text": "Die Community für Zeekr-Besitzer und -Enthusiasten. Teile Erfahrungen, hol dir Tipps und triff Gleichgesinnte auf Discord.",
    "about.heading": "Über den Club",
    "about.text": "Zeekr Club ist eine Community von und für Besitzer und Fans von Zeekr. Hier kannst du Fragen stellen, Bilder deines Autos teilen und über alles diskutieren – von Laden und Reichweite bis zu Zubehör und Software-Updates. Egal ob du bereits einen Zeekr besitzt oder einfach neugierig bist, du bist willkommen.",
    "benefits.heading": "Worüber wir reden",
    "benefits.card1.title": "Zeekr 7X",
    "benefits.card1.text": "Alles rund um den Zeekr 7X – Erfahrungen, Ausstattung und mehr.",
    "benefits.card2.title": "Zeekr 7GT",
    "benefits.card2.text": "Alles rund um den Zeekr 7GT – Erfahrungen, Ausstattung und mehr.",
    "benefits.card3.title": "Leasingbedingungen",
    "benefits.card3.text": "Erfahrungen, Preise und Verträge rund ums Leasing.",
    "benefits.card4.title": "Software",
    "benefits.card4.text": "Updates, Funktionen und bekannte Probleme.",
    "benefits.card5.title": "Vergleich mit Audi, BMW & Mercedes",
    "benefits.card5.text": "Wie schlägt sich Zeekr gegen die etablierte Konkurrenz?",
    "benefits.card6.title": "Allgemeines",
    "benefits.card6.text": "Alles andere rund um Zeekr, das sonst nirgendwo reinpasst.",
    "rules.heading": "Regeln auf einen Blick",
    "rules.item1": "Sei freundlich und respektvoll gegenüber anderen Mitgliedern.",
    "rules.item2": "Kein Spam, keine Werbung und keine illegalen Inhalte.",
    "rules.item3": "Halte Diskussionen im passenden Kanal.",
    "cta.heading": "Bereit, Mitglied zu werden?",
    "forum.heading": "Neueste Themen im Forum",
    "forum.loading": "Lädt...",
    "forum.error": "Themen konnten nicht geladen werden.",
    "forum.cta": "Zum Forum",
    "forum.replies": "Antworten",
    "founding.eyebrow": "🚀 Werde eines unserer ersten 100 Gründungsmitglieder!",
    "founding.heading": "Werde Gründungsmitglied",
    "founding.lead": "Zeekrclub.de – eine unabhängige Community für Zeekr-Enthusiasten in ganz Europa. Egal ob du über den Kauf deines ersten Zeekr nachdenkst oder bereits einen fährst – Zeekrclub.de ist der Ort für Fragen, Erfahrungsaustausch, Technikdiskussionen und gegenseitiges Lernen.",
    "founding.offer.heading": "🎁 Ein exklusives Angebot für unsere ersten 100 aktiven Mitglieder!",
    "founding.offer.text": "Werde Gründungsmitglied und sichere dir KOSTENLOSEN LEBENSLANGEN ZUGANG zu allen Inhalten und Premium-Funktionen auf Zeekrclub.de.",
    "founding.steps.heading": "So wirst du Gründungsmitglied:",
    "founding.steps.item1": "Registriere dein Konto auf Zeekrclub.de.",
    "founding.steps.item2": "Stell dich der Community mit einer kurzen persönlichen Vorstellung vor.",
    "founding.steps.item3": "Trage mit mindestens drei aussagekräftigen Beiträgen (neue Themen oder Antworten) zur Community bei.",
    "founding.matters.heading": "⭐ Dein Beitrag zählt!",
    "founding.matters.text1": "Eine reine Registrierung reicht nicht aus! Die ersten 100 Mitglieder, die ALLE DREI Anforderungen erfüllen, erhalten den Status Gründungsmitglied und lebenslange kostenlose Mitgliedschaft. Wir möchten diejenigen belohnen, die aktiv am Aufbau unserer Community mitwirken – mit Wissen, Erfahrungen und Ideen.",
    "founding.matters.text2": "Als Gründungsmitglied erhältst du außerdem ein exklusives Gründungsmitglied-Abzeichen auf deinem Profil – als bleibende Anerkennung dafür, dass du die Community von Anfang an mitgestaltet hast.",
    "founding.matters.highlight": "Nur 100 Plätze verfügbar – vergeben nach dem Prinzip „Wer zuerst kommt\": an Mitglieder, die alle drei Anforderungen erfüllen!",
    "founding.matters.closing": "Gemeinsam bauen wir Europas engagierteste und unabhängigste Zeekr-Community auf.",
    "founding.cta": "Jetzt registrieren",
    "founding.banner": "🚀 Werde eines unserer ersten 100 Gründungsmitglieder – kostenloser lebenslanger Zugang",
    "footer.facebookHeading": "Facebook-Gruppen",
    "footer.generalGroup": "Zeekr (Allgemein)",
    "footer.text": "© 2026 Zeekr Club. Nicht offiziell mit Zeekr verbunden.",
    "footer.impressum": "Impressum",
    "footer.datenschutz": "Datenschutz",
    "footer.kontakt": "Kontakt",
    "footer.founding": "Gründungsmitglieder",
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
    "nav.forum": "Forum",
    "nav.benefits": "Topics",
    "nav.rules": "Rules",
    "nav.discord": "Join on Discord",
    "nav.login": "Log in",
    "login.title": "Members area",
    "login.text": "A members area with exclusive documents and guides is coming soon. Log in with the Discord account you already use for the forum.",
    "login.welcomePrefix": "Signed in as",
    "login.welcomeSuffix": "via Discord.",
    "login.cta": "Log in with Discord",
    "login.logout": "Log out",
    "gallery.slide1.alt": "Welcome to our Discord community",
    "gallery.slide2.alt": "Know what you need before you buy",
    "gallery.slide3.alt": "Know who you're leasing from",
    "gallery.prev": "Previous image",
    "gallery.next": "Next image",
    "hero.heading": 'Welcome to <span class="accent">Zeekr Club</span>',
    "hero.text": "The community for Zeekr owners and enthusiasts. Share experiences, get tips, and meet like-minded people on Discord.",
    "about.heading": "About the club",
    "about.text": "Zeekr Club is a community built by and for Zeekr owners and fans. Here you can ask questions, share pictures of your car, and discuss everything from charging and range to accessories and software updates. Whether you already own a Zeekr or are just curious, you're welcome.",
    "benefits.heading": "What we talk about",
    "benefits.card1.title": "Zeekr 7X",
    "benefits.card1.text": "Everything about the Zeekr 7X — experiences, specs, and more.",
    "benefits.card2.title": "Zeekr 7GT",
    "benefits.card2.text": "Everything about the Zeekr 7GT — experiences, specs, and more.",
    "benefits.card3.title": "Leasing terms",
    "benefits.card3.text": "Experiences, pricing, and contracts around leasing.",
    "benefits.card4.title": "Software",
    "benefits.card4.text": "Updates, features, and known issues.",
    "benefits.card5.title": "Compared to Audi, BMW & Mercedes",
    "benefits.card5.text": "How does Zeekr stack up against the established competition?",
    "benefits.card6.title": "General chat",
    "benefits.card6.text": "Everything else Zeekr-related that doesn't fit anywhere else.",
    "rules.heading": "Rules at a glance",
    "rules.item1": "Be kind and respectful toward other members.",
    "rules.item2": "No spam, advertising, or illegal content.",
    "rules.item3": "Keep discussions relevant to the right channel.",
    "cta.heading": "Ready to join?",
    "forum.heading": "Latest forum threads",
    "forum.loading": "Loading...",
    "forum.error": "Couldn't load threads.",
    "forum.cta": "Go to forum",
    "forum.replies": "replies",
    "founding.eyebrow": "🚀 Become one of our first 100 Founding Members!",
    "founding.heading": "Become a Founding Member",
    "founding.lead": "Zeekrclub.de – an independent community for Zeekr enthusiasts across Europe. Whether you're considering buying your first Zeekr or already driving one, Zeekrclub.de is the place to ask questions, share experiences, discuss technology, and learn from others.",
    "founding.offer.heading": "🎁 An exclusive offer for our first 100 active members!",
    "founding.offer.text": "Become one of our Founding Members and enjoy FREE LIFETIME ACCESS to all content and premium features on Zeekrclub.de.",
    "founding.steps.heading": "How to become a Founding Member:",
    "founding.steps.item1": "Register your account at Zeekrclub.de.",
    "founding.steps.item2": "Introduce yourself to the community with a short personal introduction.",
    "founding.steps.item3": "Contribute to the community by creating or replying to at least three meaningful posts.",
    "founding.matters.heading": "⭐ Your contribution matters!",
    "founding.matters.text1": "Simply registering is not enough! The first 100 members who successfully complete ALL THREE requirements will earn Founding Member status and receive free lifetime membership. We want to reward those who actively help build our community by sharing knowledge, experiences, and ideas.",
    "founding.matters.text2": "As a Founding Member, you'll also receive an exclusive Founding Member badge on your profile, recognizing you as one of the people who helped build the community from the very beginning – forever!",
    "founding.matters.highlight": "Only 100 spots available – awarded on a first-come, first-served basis to members who complete all three requirements!",
    "founding.matters.closing": "Together, we're building Europe's most engaged and independent Zeekr community.",
    "founding.cta": "Register now",
    "founding.banner": "🚀 Become one of our first 100 Founding Members – free lifetime access",
    "footer.facebookHeading": "Facebook groups",
    "footer.generalGroup": "Zeekr (General)",
    "footer.text": "© 2026 Zeekr Club. Not officially affiliated with Zeekr.",
    "footer.impressum": "Legal notice",
    "footer.datenschutz": "Privacy policy",
    "footer.kontakt": "Contact",
    "footer.founding": "Founding Members",
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

// ---------- Inloggningsstatus i headern (alla sidor) ----------
const headerLoginLinks = document.querySelectorAll(".login-link");

if (headerLoginLinks.length > 0) {
  fetch("/api/me", { credentials: "same-origin" })
    .then((res) => res.json())
    .then((data) => {
      if (data.loggedIn) {
        headerLoginLinks.forEach((link) => {
          link.textContent = data.username;
          link.removeAttribute("data-i18n");
        });
      }
    })
    .catch(() => {
      // Backend inte nåbar – lämna standardlänken som den är
    });
}

// ---------- Inloggningsstatus (login.html) ----------
const loginLoggedIn = document.getElementById("login-logged-in");
const loginLoggedOut = document.getElementById("login-logged-out");

if (loginLoggedIn && loginLoggedOut) {
  fetch("/api/me", { credentials: "same-origin" })
    .then((res) => res.json())
    .then((data) => {
      if (data.loggedIn) {
        document.getElementById("login-username").textContent = data.username;
        if (data.avatar) {
          const avatarEl = document.getElementById("login-avatar");
          avatarEl.src = data.avatar;
          avatarEl.hidden = false;
        }
        loginLoggedIn.hidden = false;
        loginLoggedOut.hidden = true;
      }
    })
    .catch(() => {
      // Backend inte nåbar – visa standardläget (utloggad)
    });
}

// ---------- Senaste trådarna från forumet ----------
const threadList = document.getElementById("thread-list");

if (threadList) {
  fetch("/forum-api/latest.json")
    .then((res) => {
      if (!res.ok) throw new Error("HTTP " + res.status);
      return res.json();
    })
    .then((data) => {
      const topics = (data.topic_list && data.topic_list.topics) || [];
      threadList.innerHTML = "";

      if (topics.length === 0) {
        const li = document.createElement("li");
        li.className = "thread-error";
        li.textContent = (translations[getSavedLang() || DEFAULT_LANG] || translations[DEFAULT_LANG])["forum.error"];
        threadList.appendChild(li);
        return;
      }

      const dict = translations[getSavedLang() || DEFAULT_LANG] || translations[DEFAULT_LANG];

      topics.slice(0, 10).forEach((topic) => {
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.href = `https://forum.zeekrclub.de/t/${topic.slug}/${topic.id}`;
        a.target = "_blank";
        a.rel = "noopener noreferrer";

        const title = document.createElement("span");
        title.textContent = topic.title;

        const replies = document.createElement("span");
        replies.className = "thread-replies";
        replies.textContent = topic.posts_count - 1 + " " + dict["forum.replies"];

        a.appendChild(title);
        a.appendChild(replies);
        li.appendChild(a);
        threadList.appendChild(li);
      });
    })
    .catch(() => {
      const dict = translations[getSavedLang() || DEFAULT_LANG] || translations[DEFAULT_LANG];
      threadList.innerHTML = "";
      const li = document.createElement("li");
      li.className = "thread-error";
      li.textContent = dict["forum.error"];
      threadList.appendChild(li);
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
