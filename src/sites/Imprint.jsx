import React, { useEffect, useMemo, useRef, useState } from "react";
import CarForm from "./CarForm";
import "./styles.css";

const translations = {
  de: {
    // Navigation / Titles
    nav_home: "Start",
    nav_services: "Leistungen",
    nav_purchase: "Fahrzeug Ankauf",
    nav_about: "Über uns",
    nav_contact: "Kontakt",
    hero_title: "Professioneller Autoimport aus der Schweiz",
    hero_subtitle: "Ankauf Schweiz & DE • Verzollung • B2B • EU-Export • Vermittlung",
    hero_button: "Jetzt Ankauf anfragen",
    privacy_title: "Impressum",

    // Datenschutz – kompletter HTML-Block
    privacy_html: `

  <p><strong>AUTO M.A.H.</strong><br>
  Inhaber: Mohamed Ali Hussein</p>

  <p>
    Daimlerstr. 10<br>
    79585 Steinen, Deutschland
  </p>

  <p>
    Tel.: <a href="tel:+4917696084998">+49 176 96084998</a><br>
    E-Mail: <a href="mailto:auto.mah@hotmail.com">auto.mah@hotmail.com</a>
  </p>

  <p>
    Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG:<br>
    <strong>DE402063042</strong>
  </p>

  <p><strong>Verantwortlich i. S. d. § 18 Abs. 2 MStV</strong><br>
    Mohamed Ali Hussein, Daimlerstr. 10, 79585 Steinen
  </p>

  <h3>EU-Streitschlichtung</h3>
  <p>
    Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:
    <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer">
      https://ec.europa.eu/consumers/odr
    </a>.
  </p>

  <h3>Verbraucherstreitbeilegung / Universalschlichtungsstelle</h3>
  <p>
    Wir sind nicht verpflichtet und nicht bereit, an Streitbeilegungsverfahren vor einer
    Verbraucherschlichtungsstelle teilzunehmen.
  </p>
    `,
  },

  en: {
    nav_home: "Home",
    nav_services: "Services",
    nav_purchase: "Vehicle Purchase",
    nav_about: "About Us",
    nav_contact: "Contact",
    hero_title: "Professional Car Import from Switzerland",
    hero_subtitle: "Purchase Switzerland & DE • Customs Clearance • B2B • EU Export • Mediation",
    hero_button: "Request Purchase Now",
    privacy_title: "Legal Notice (Imprint)",
    privacy_html: `

  <p><strong>AUTO M.A.H.</strong><br>
  Owner: Mohamed Ali Hussein</p>

  <p>
    Daimlerstr. 10<br>
    79585 Steinen, Germany
  </p>

  <p>
    Phone: <a href="tel:+4917696084998">+49 176 96084998</a><br>
    Email: <a href="mailto:auto.mah@hotmail.com">auto.mah@hotmail.com</a>
  </p>

  <p>
    VAT ID (pursuant to § 27a German VAT Act):<br>
    <strong>DE402063042</strong>
  </p>

  <p><strong>Editorially responsible (Sec. 18 (2) MStV):</strong><br>
    Mohamed Ali Hussein, Daimlerstr. 10, 79585 Steinen
  </p>

  <h3>EU Online Dispute Resolution (ODR)</h3>
  <p>
    The European Commission provides a platform for Online Dispute Resolution (ODR):
    <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer">
      https://ec.europa.eu/consumers/odr
    </a>.
  </p>

  <h3>Consumer Dispute Resolution</h3>
  <p>
    We are neither obliged nor willing to participate in dispute resolution proceedings
    before a consumer arbitration board.
  </p>

    `,
  },

  fr: {
    nav_home: "Accueil",
    nav_services: "Services",
    nav_purchase: "Achat Véhicule",
    nav_about: "À Propos",
    nav_contact: "Contact",
    hero_title: "Importation Professionnelle de Voitures depuis la Suisse",
    hero_subtitle: "Achat Suisse & DE • Dédouanement • B2B • Export UE • Médiation",
    hero_button: "Demander un Achat Maintenant",
    privacy_title: "Mentions légale",
    privacy_html: `

  <p><strong>AUTO M.A.H.</strong><br>
  Propriétaire : Mohamed Ali Hussein</p>

  <p>
    Daimlerstr. 10<br>
    79585 Steinen, Allemagne
  </p>

  <p>
    Tél. : <a href="tel:+4917696084998">+49 176 96084998</a><br>
    E-mail : <a href="mailto:auto.mah@hotmail.com">auto.mah@hotmail.com</a>
  </p>

  <p>
    N° de TVA intracommunautaire (art. 27a loi allemande sur la TVA) :<br>
    <strong>DE402063042</strong>
  </p>

  <p><strong>Responsable de la publication (art. 18 (2) MStV)</strong><br>
    Mohamed Ali Hussein, Daimlerstr. 10, 79585 Steinen
  </p>

  <h3>Règlement en ligne des litiges (UE)</h3>
  <p>
    La Commission européenne met à disposition une plateforme de règlement en ligne des litiges (RLL) :
    <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer">
      https://ec.europa.eu/consumers/odr
    </a>.
  </p>

  <h3>Règlement des litiges de consommation</h3>
  <p>
    Nous ne sommes ni tenus ni disposés à participer à une procédure de règlement des litiges
    devant un organisme de médiation pour les consommateurs.
  </p>

    `,
  },
};

function useActiveSection(sectionIds) {
  const [active, setActive] = useState(sectionIds[0] || "");
  useEffect(() => {
    const handler = () => {
      let current = sectionIds[0] || "";
      sectionIds.forEach((id) => {
        const el = document.getElementById(id);
        if (!el) return;
        const rect = el.getBoundingClientRect();
        if (rect.top <= 120 && rect.bottom >= 200) current = id;
      });
      setActive(current);
    };
    handler();
    window.addEventListener("scroll", handler, { passive: true });
    window.addEventListener("resize", handler);
    return () => {
      window.removeEventListener("scroll", handler);
      window.removeEventListener("resize", handler);
    };
  }, [sectionIds]);
  return active;
}

export default function AutoMAH() {
  const [lang, setLang] = useState(() => localStorage.getItem("preferredLanguage") || "de");
  const [menuOpen, setMenuOpen] = useState(false);
  const [serviceType, setServiceType] = useState("purchase");
  const [filesInfo, setFilesInfo] = useState({ count: 0, names: [] });
  const yearMax = useMemo(() => new Date().getFullYear(), []);
  const active = useActiveSection(["home", "services", "vehicle-purchase", "about", "contact"]);
  const imagesInputRef = useRef(null);

  const t = (key) => translations[lang]?.[key] ?? translations.de[key] ?? key;

  useEffect(() => {
    localStorage.setItem("preferredLanguage", lang);
  }, [lang]);

  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
      />

      <style>
        {`
        .hero { background: linear-gradient(rgba(26, 58, 95, 0.8), rgba(26, 58, 95, 0.9)), url('images/hero-image.jpg'); background-size: cover; background-position: center; color: white; text-align: center; padding: 140px 0 80px; position: relative; margin-top: 70px; }
        `}
      </style>

      {/* Beispiel: Abstand-Placeholder entfernen, falls nicht benötigt */}
      <br /><br /><br />

      {/* Privacy / Services Section */}
      <section id="services" className="services">
        <div className="container">
          <h2>{t("privacy_title")}</h2>

          {/* Sprachumschalter lokal (optional) */}
          <div style={{ margin: "12px 0 24px", display: "flex", gap: 8 }}>
            {["de", "en", "fr"].map((code) => (
              <button
                key={code}
                onClick={() => setLang(code)}
                type="button"
                style={{
                  padding: "6px 10px",
                  borderRadius: 6,
                  border: lang === code ? "2px solid #1a3a5f" : "1px solid #ccc",
                  background: "#fff",
                  cursor: "pointer",
                  fontWeight: lang === code ? 700 : 500,
                }}
              >
                {code.toUpperCase()}
              </button>
            ))}
          </div>

          <div
            className="privacy-content"
            // ⚠️ Wir haben die Texte selbst definiert → safe zu benutzen
            dangerouslySetInnerHTML={{ __html: t("privacy_html") }}
          />
        </div>
      </section>
    </>
  );
}
