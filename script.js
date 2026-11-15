// Alla texter på sidan, på tyska och engelska.
// Nycklarna matchar data-i18n / data-i18n-html-attributen i index.html.
const translations = {
  de: {
    "nav.about": "Über den Club",
    "nav.forum": "Forum",
    "nav.discord": "Auf Discord beitreten",
    "nav.login": "Anmelden",
    "menu.toggle": "Menü öffnen",
    "login.title": "Mitgliederbereich",
    "login.text": "Hier entsteht bald ein Mitgliederbereich mit exklusiven Dokumenten und Guides. Melde dich mit deinem Discord-Konto an, das du bereits vom Forum kennst.",
    "login.welcomePrefix": "Angemeldet als",
    "login.welcomeSuffix": "über Discord.",
    "login.cta": "Mit Discord anmelden",
    "login.logout": "Abmelden",
    "hero.text": "Die Community für Zeekr-Besitzer und -Enthusiasten. Teile Erfahrungen, hol dir Tipps und triff Gleichgesinnte auf Discord.",
    "about.heading": "Über den Club",
    "about.text": "Zeekr Club ist eine Community von und für Besitzer und Fans von Zeekr. Hier kannst du Fragen stellen, Bilder deines Autos teilen und über alles diskutieren – von Laden und Reichweite bis zu Zubehör und Software-Updates. Egal ob du bereits einen Zeekr besitzt oder einfach neugierig bist, du bist willkommen.",
    "rules.heading": "Regeln auf einen Blick",
    "rules.item1": "Sei freundlich und respektvoll gegenüber anderen Mitgliedern.",
    "rules.item2": "Kein Spam, keine Werbung und keine illegalen Inhalte.",
    "rules.item3": "Halte Diskussionen im passenden Kanal.",
    "cta.heading": "Bereit, Mitglied zu werden?",
    "forum.heading": "Neueste Themen im Forum",
    "forum.loading": "Lädt...",
    "forum.error": "Themen konnten nicht geladen werden.",
    "forum.cta": "Zum Forum",
    "founding.eyebrow": "🚀 Werde eines unserer ersten 100 Gründungsmitglieder!",
    "founding.heading": "Werde Gründungsmitglied",
    "founding.lead1": "Eine unabhängige Community für Zeekr-Enthusiasten. Egal ob du über den Kauf deines ersten Zeekr nachdenkst oder bereits einen fährst – auf Zeekrclub.de sorgen wir für die besten Deals, Vorteile und Rabatte, damit dein Zeekr-Leben so gut wie möglich wird.",
    "founding.lead2": "Das ist die Community, in der wir Erfahrungen teilen und über alles rund um die Marke diskutieren.",
    "founding.offer.heading": "🎁 Ein exklusives Angebot für unsere ersten 100 aktiven Mitglieder!",
    "founding.offer.text": "Werde Gründungsmitglied und sichere dir KOSTENLOSEN LEBENSLANGEN ZUGANG zu allen Inhalten und Premium-Funktionen.",
    "founding.steps.heading": "So wirst du Gründungsmitglied:",
    "founding.steps.item1": "Registriere dein Konto auf Zeekrclub.de.",
    "founding.steps.item2": "Stell dich der Community mit einer kurzen persönlichen Vorstellung auf Zeekrforum.de vor.",
    "founding.steps.item3": "Trage mit mindestens drei aussagekräftigen Beiträgen (neue Themen oder Antworten) zur Community bei.",
    "founding.matters.heading": "⭐ Dein Beitrag zählt!",
    "founding.matters.text1": "Eine reine Registrierung reicht nicht aus! Die ersten 100 Mitglieder, die ALLE DREI Anforderungen erfüllen, erhalten den Status Gründungsmitglied und lebenslange kostenlose Mitgliedschaft. Wir möchten diejenigen belohnen, die aktiv am Aufbau unserer Community mitwirken – mit Wissen, Erfahrungen und Ideen.",
    "founding.matters.text2": "Als Gründungsmitglied erhältst du außerdem ein exklusives Gründungsmitglied-Abzeichen auf deinem Profil – als bleibende Anerkennung dafür, dass du die Community von Anfang an mitgestaltet hast.",
    "founding.matters.highlight": "Nur 100 Plätze verfügbar – vergeben nach dem Prinzip „Wer zuerst kommt\": an Mitglieder, die alle drei Anforderungen erfüllen!",
    "founding.matters.closing": "Gemeinsam bauen wir Deutschlands engagierteste und unabhängigste Zeekr-Community auf.",
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
    "legal.impressum.info.heading": "Angaben gemäß § 5 DDG",
    "legal.impressum.contact.heading": "Kontakt",
    "legal.impressum.contact.text": 'Am schnellsten erreichst du uns über unser <a href="kontakt.html">Kontaktformular</a>.',
    "legal.impressum.dispute.heading": "Streitschlichtung",
    "legal.impressum.dispute.text": 'Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer">ec.europa.eu/consumers/odr</a>. Wir sind nicht verpflichtet und nicht bereit, an einem Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.',
    "legal.impressum.liability.heading": "Haftung für Inhalte",
    "legal.impressum.liability.text": "Als Betreiber dieser Seite bemühen wir uns um korrekte und aktuelle Inhalte, können jedoch keine Gewähr für Richtigkeit, Vollständigkeit und Aktualität übernehmen. Für Inhalte externer Links (z. B. Discord, Facebook) sind ausschließlich deren Betreiber verantwortlich.",
    "legal.privacy.title": "Datenschutzerklärung",
    "legal.privacy.controller.heading": "Verantwortlicher",
    "legal.privacy.controller.text": 'Zeekr Club DE, siehe <a href="impressum.html">Impressum</a>. Fragen zum Datenschutz beantworten wir gerne über unser <a href="kontakt.html">Kontaktformular</a>.',
    "legal.privacy.hosting.heading": "Hosting",
    "legal.privacy.hosting.text": "Diese Website wird bei Inleed (Schweden) auf einem eigenen virtuellen Server gehostet. Beim Aufruf der Seite verarbeitet der Hosting-Anbieter automatisch technische Server-Logs (z. B. IP-Adresse, Zeitpunkt, aufgerufene Seite), um den Betrieb sicherzustellen. Rechtsgrundlage ist unser berechtigtes Interesse an einem sicheren Betrieb (Art. 6 Abs. 1 lit. f DSGVO).",
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
    "zeekrclub.placeholder": "Hier entsteht bald mehr Inhalt.",
  },
  en: {
    "nav.about": "About",
    "nav.forum": "Forum",
    "nav.discord": "Join on Discord",
    "nav.login": "Log in",
    "menu.toggle": "Open menu",
    "login.title": "Members area",
    "login.text": "A members area with exclusive documents and guides is coming soon. Log in with the Discord account you already use for the forum.",
    "login.welcomePrefix": "Signed in as",
    "login.welcomeSuffix": "via Discord.",
    "login.cta": "Log in with Discord",
    "login.logout": "Log out",
    "hero.text": "The community for Zeekr owners and enthusiasts. Share experiences, get tips, and meet like-minded people on Discord.",
    "about.heading": "About the club",
    "about.text": "Zeekr Club is a community built by and for Zeekr owners and fans. Here you can ask questions, share pictures of your car, and discuss everything from charging and range to accessories and software updates. Whether you already own a Zeekr or are just curious, you're welcome.",
    "rules.heading": "Rules at a glance",
    "rules.item1": "Be kind and respectful toward other members.",
    "rules.item2": "No spam, advertising, or illegal content.",
    "rules.item3": "Keep discussions relevant to the right channel.",
    "cta.heading": "Ready to join?",
    "forum.heading": "Latest forum threads",
    "forum.loading": "Loading...",
    "forum.error": "Couldn't load threads.",
    "forum.cta": "Go to forum",
    "founding.eyebrow": "🚀 Become one of our first 100 Founding Members!",
    "founding.heading": "Become a Founding Member",
    "founding.lead1": "An independent community for Zeekr enthusiasts. Whether you're considering buying your first Zeekr or already driving one – on Zeekrclub.de we create the best deals, perks, and discounts to make your Zeekr life as good as it can be.",
    "founding.lead2": "This is the community where we share experiences and discuss everything about the brand.",
    "founding.offer.heading": "🎁 An exclusive offer for our first 100 active members!",
    "founding.offer.text": "Become one of our Founding Members and enjoy FREE LIFETIME ACCESS to all content and premium features.",
    "founding.steps.heading": "How to become a Founding Member:",
    "founding.steps.item1": "Register your account at Zeekrclub.de.",
    "founding.steps.item2": "Introduce yourself to the community with a short personal introduction on Zeekrforum.de.",
    "founding.steps.item3": "Contribute to the community by creating or replying to at least three meaningful posts.",
    "founding.matters.heading": "⭐ Your contribution matters!",
    "founding.matters.text1": "Simply registering is not enough! The first 100 members who successfully complete ALL THREE requirements will earn Founding Member status and receive free lifetime membership. We want to reward those who actively help build our community by sharing knowledge, experiences, and ideas.",
    "founding.matters.text2": "As a Founding Member, you'll also receive an exclusive Founding Member badge on your profile, recognizing you as one of the people who helped build the community from the very beginning – forever!",
    "founding.matters.highlight": "Only 100 spots available – awarded on a first-come, first-served basis to members who complete all three requirements!",
    "founding.matters.closing": "Together, we're building Germany's most engaged and independent Zeekr community.",
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
    "legal.impressum.info.heading": "Information pursuant to § 5 DDG",
    "legal.impressum.contact.heading": "Contact",
    "legal.impressum.contact.text": 'The fastest way to reach us is via our <a href="kontakt.html">contact form</a>.',
    "legal.impressum.dispute.heading": "Dispute resolution",
    "legal.impressum.dispute.text": 'The European Commission provides a platform for online dispute resolution (ODR): <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer">ec.europa.eu/consumers/odr</a>. We are not obliged or willing to participate in dispute resolution proceedings before a consumer arbitration board.',
    "legal.impressum.liability.heading": "Liability for content",
    "legal.impressum.liability.text": "As the operator of this site we strive to keep content accurate and up to date, but cannot guarantee its correctness, completeness, or timeliness. The operators of external links (e.g. Discord, Facebook) are solely responsible for their own content.",
    "legal.privacy.title": "Privacy policy",
    "legal.privacy.controller.heading": "Data controller",
    "legal.privacy.controller.text": 'Zeekr Club DE, see <a href="impressum.html">legal notice</a>. For privacy questions, please reach out via our <a href="kontakt.html">contact form</a>.',
    "legal.privacy.hosting.heading": "Hosting",
    "legal.privacy.hosting.text": "This website is hosted by Inleed (Sweden) on our own virtual server. When you visit the site, the hosting provider automatically processes technical server logs (e.g. IP address, timestamp, page requested) to keep the service running. The legal basis is our legitimate interest in secure operation (Art. 6(1)(f) GDPR).",
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
    "zeekrclub.placeholder": "More content is coming soon.",
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

// ---------- Infomeny (hamburgerknapp uppe till höger) ----------
(function setupInfoMenu() {
  const toggle = document.querySelector(".info-menu-toggle");
  const dropdown = document.querySelector(".info-menu-dropdown");
  if (!toggle || !dropdown) return;

  function closeMenu() {
    dropdown.hidden = true;
    toggle.setAttribute("aria-expanded", "false");
  }

  function openMenu() {
    dropdown.hidden = false;
    toggle.setAttribute("aria-expanded", "true");
  }

  toggle.addEventListener("click", (event) => {
    event.stopPropagation();
    if (dropdown.hidden) {
      openMenu();
    } else {
      closeMenu();
    }
  });

  document.addEventListener("click", (event) => {
    if (!dropdown.hidden && !dropdown.contains(event.target) && event.target !== toggle) {
      closeMenu();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeMenu();
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

      topics.slice(0, 10).forEach((topic) => {
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.href = `https://zeekrforum.de/t/${topic.slug}/${topic.id}`;
        a.target = "_blank";
        a.rel = "noopener noreferrer";

        const title = document.createElement("span");
        title.textContent = topic.title;

        a.appendChild(title);
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
