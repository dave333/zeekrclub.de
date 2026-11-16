// Egen, självständig text/språklogik för testsidan (samma mönster som huvudsajtens script.js,
// men med ett eget litet ordlista-objekt eftersom innehållet bara hör hemma här).
const translations = {
  de: {
    "nav.cta": "Kostenlos beitreten",
    "hero.eyebrow": "ZEEKR CLUB DEUTSCHLAND",
    "hero.heading": "Dein Zeekr verdient mehr als nur eine Garage.",
    "hero.sub": "Schließe dich der unabhängigen Community für Zeekr-Besitzer in Deutschland an – für bessere Deals, ehrliche Erfahrungen und Menschen, die dein Auto genauso gut finden wie du.",
    "hero.cta": "Kostenlos beitreten →",
    "hero.microcopy": "Keine Kreditkarte nötig. In unter einer Minute dabei.",
    "trust.item1": "100 % unabhängig – nicht von Zeekr betrieben",
    "trust.item2": "Von Besitzern, für Besitzer",
    "trust.item3": "Aktive Community auf Discord & im Forum",
    "benefits.heading": "Das bringt dir die Mitgliedschaft",
    "benefits.card1.title": "Spare bei der Versicherung",
    "benefits.card1.text": "Wir verhandeln mit Partnern, damit du als Zeekr-Fahrer bessere Konditionen bekommst.",
    "benefits.card2.title": "Günstiger laden",
    "benefits.card2.text": "Profitiere von Rabatten auf öffentliches und privates Laden – entwickelt für den Alltag.",
    "benefits.card3.title": "Angebote für Reifen & Felgen",
    "benefits.card3.text": "Saisonreifen, Felgen und Zubehör zu Konditionen, die sich lohnen.",
    "benefits.card4.title": "Service & Fahrzeugpflege",
    "benefits.card4.text": "Von Aufbereitung bis Wartung: Vorteile bei ausgewählten Partnern.",
    "benefits.card5.title": "Eine starke Community",
    "benefits.card5.text": "Ehrliche Antworten von echten Besitzern – keine Verkaufsgespräche.",
    "steps.heading": "So wirst du Mitglied",
    "steps.item1.title": "Werde kostenloses Mitglied",
    "steps.item1.text": "Tritt in weniger als einer Minute unserem Discord oder Forum bei.",
    "steps.item2.title": "Stell dich kurz vor",
    "steps.item2.text": "Erzähl uns, welchen Zeekr du fährst oder dir wünschst.",
    "steps.item3.title": "Genieße die Vorteile",
    "steps.item3.text": "Zugang zu Deals, Wissen und einer Community, die dich wirklich versteht.",
    "founding.text": "🚀 Nur noch wenige Plätze: Werde einer unserer ersten 100 Gründungsmitglieder und sichere dir kostenlosen, lebenslangen Zugang.",
    "founding.cta": "Mehr erfahren →",
    "faq.heading": "Häufige Fragen",
    "faq.q1": "Ist Zeekr Club Deutschland offiziell von Zeekr?",
    "faq.a1": "Nein. Wir sind eine unabhängige, von Fans betriebene Community – das gibt uns die Freiheit, ehrlich zu sein.",
    "faq.q2": "Kostet die Mitgliedschaft etwas?",
    "faq.a2": "Die Basismitgliedschaft ist kostenlos. Gründungsmitglieder sichern sich zusätzlich lebenslangen Zugang zu allen zukünftigen Funktionen.",
    "faq.q3": "Ich besitze noch keinen Zeekr – kann ich trotzdem beitreten?",
    "faq.a3": "Ja! Alle, die sich für die Marke interessieren, sind herzlich willkommen.",
    "faq.q4": "Wo findet die Community statt?",
    "faq.a4": "Hauptsächlich auf Discord und in unserem Forum unter zeekrforum.de – beides kostenlos zugänglich.",
    "faq.q5": "Was passiert mit meinen Daten, wenn ich beitrete?",
    "faq.a5": 'Wir sammeln nur das Nötigste. Details findest du in unserer <a href="../datenschutz.html">Datenschutzerklärung</a>.',
    "final.heading": "Bereit, dazuzugehören?",
    "final.sub": "Werde in unter einer Minute Teil der Community – kostenlos und unverbindlich.",
    "final.form.name": "Name",
    "final.form.namePlaceholder": "Max Mustermann",
    "final.form.email": "E-Mail",
    "final.form.emailPlaceholder": "max@beispiel.de",
    "final.form.zip": "Postleitzahl",
    "final.form.zipPlaceholder": "12345",
    "final.form.model": "Welches Zeekr-Modell fährst oder interessiert dich? (optional)",
    "final.form.modelPlaceholder": "z. B. Zeekr 7X",
    "final.form.submit": "Jetzt Mitglied werden",
    "final.discord": "Oder tritt direkt auf Discord bei →",
    "footer.text": "© 2026 Zeekr Club. Nicht offiziell mit Zeekr verbunden.",
    "footer.impressum": "Impressum",
    "footer.datenschutz": "Datenschutz",
    "footer.kontakt": "Kontakt",
  },
  en: {
    "nav.cta": "Join for free",
    "hero.eyebrow": "ZEEKR CLUB GERMANY",
    "hero.heading": "Your Zeekr deserves more than just a garage.",
    "hero.sub": "Join the independent community for Zeekr owners in Germany – for better deals, honest experiences, and people who love your car as much as you do.",
    "hero.cta": "Join for free →",
    "hero.microcopy": "No credit card needed. Takes less than a minute.",
    "trust.item1": "100% independent – not run by Zeekr",
    "trust.item2": "By owners, for owners",
    "trust.item3": "Active community on Discord & our forum",
    "benefits.heading": "What membership gets you",
    "benefits.card1.title": "Save on insurance",
    "benefits.card1.text": "We negotiate with partners to get Zeekr drivers better rates.",
    "benefits.card2.title": "Charge for less",
    "benefits.card2.text": "Enjoy discounts on public and home charging, built for everyday use.",
    "benefits.card3.title": "Deals on tires & wheels",
    "benefits.card3.text": "Seasonal tires, wheels and accessories at prices that make sense.",
    "benefits.card4.title": "Service & vehicle care",
    "benefits.card4.text": "From detailing to maintenance: perks with selected partners.",
    "benefits.card5.title": "A strong community",
    "benefits.card5.text": "Honest answers from real owners – no sales pitches.",
    "steps.heading": "How to become a member",
    "steps.item1.title": "Become a free member",
    "steps.item1.text": "Join our Discord or forum in under a minute.",
    "steps.item2.title": "Introduce yourself",
    "steps.item2.text": "Tell us which Zeekr you drive or have your eye on.",
    "steps.item3.title": "Enjoy the benefits",
    "steps.item3.text": "Access deals, knowledge, and a community that truly gets it.",
    "founding.text": "🚀 Only a few spots left: become one of our first 100 Founding Members and lock in free lifetime access.",
    "founding.cta": "Learn more →",
    "faq.heading": "Frequently asked questions",
    "faq.q1": "Is Zeekr Club Germany official?",
    "faq.a1": "No. We're an independent, fan-run community – that's what lets us stay honest.",
    "faq.q2": "Does membership cost anything?",
    "faq.a2": "Basic membership is free. Founding Members additionally lock in lifetime access to everything we build next.",
    "faq.q3": "I don't own a Zeekr yet – can I still join?",
    "faq.a3": "Absolutely! Anyone interested in the brand is welcome.",
    "faq.q4": "Where does the community happen?",
    "faq.a4": "Mainly on Discord and our forum at zeekrforum.de – both free to join.",
    "faq.q5": "What happens to my data if I join?",
    "faq.a5": 'We only collect the essentials. Details are in our <a href="../datenschutz.html">privacy policy</a>.',
    "final.heading": "Ready to join?",
    "final.sub": "Become part of the community in under a minute – free, no strings attached.",
    "final.form.name": "Name",
    "final.form.namePlaceholder": "Jane Doe",
    "final.form.email": "Email",
    "final.form.emailPlaceholder": "jane@example.com",
    "final.form.zip": "Postal code",
    "final.form.zipPlaceholder": "12345",
    "final.form.model": "Which Zeekr model do you drive or have your eye on? (optional)",
    "final.form.modelPlaceholder": "e.g. Zeekr 7X",
    "final.form.submit": "Become a member",
    "final.discord": "Or join directly on Discord →",
    "footer.text": "© 2026 Zeekr Club. Not officially affiliated with Zeekr.",
    "footer.impressum": "Legal notice",
    "footer.datenschutz": "Privacy policy",
    "footer.kontakt": "Contact",
  },
};

const DEFAULT_LANG = "de";

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

  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (dict[key]) el.setAttribute("placeholder", dict[key]);
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

// ---------- Leadformulär (öppnar besökarens e-postprogram, samma princip som kontaktformuläret) ----------
const leadForm = document.getElementById("lead-form");

if (leadForm) {
  leadForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = leadForm.name.value.trim();
    const email = leadForm.email.value.trim();
    const zip = leadForm.zip.value.trim();
    const model = leadForm.model.value.trim();

    const subject = encodeURIComponent("Neues Mitglied – Zeekr Club (Testseite)");
    const bodyLines = ["Name: " + name, "E-Mail: " + email, "PLZ: " + zip];
    if (model) bodyLines.push("Zeekr-Modell: " + model);
    const body = encodeURIComponent(bodyLines.join("\n"));

    window.location.href = "mailto:nygdavid@gmail.com?subject=" + subject + "&body=" + body;
  });
}
