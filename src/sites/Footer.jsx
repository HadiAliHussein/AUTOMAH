import React, { useEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import './styles.css'

// React version of the provided static page
// Usage:
// 1) Add this component to your React app and render <AutoMAH />.
// 2) Ensure Font Awesome is available (either in index.html or via npm). For CDN, add this in public/index.html:
//    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
// 3) Place your images (logo.png, hero-image.jpg, profil-bild.jpg) in /public or update paths accordingly.

const translations = {
  de: {
    // Navigation
    nav_home: "Start",
    nav_services: "Leistungen",
    nav_purchase: "Fahrzeug Ankauf",
    nav_about: "Über uns",
    nav_contact: "Kontakt",

    // Hero
    hero_title: "Professioneller Autoimport aus der Schweiz",
    hero_subtitle:
      "Ankauf Schweiz & DE • Verzollung • B2B • EU-Export • Vermittlung",
    hero_button: "Jetzt Ankauf anfragen",

    // Services
    services_title: "Meine Leistungen",
    service1_title: "Fahrzeugankauf Schweiz & Deutschland",
    service1_text:
      "Ich kaufe qualitativ hochwertige Fahrzeuge direkt vom Schweizer und deutschen Markt an - faire Preise, schnelle Abwicklung",
    service2_title: "Import & Verzollung",
    service2_text:
      "Komplette Verzollung der Fahrzeuge nach deutschen Bestimmungen - professionell und rechtssicher",
    service3_title: "Deutsche Zulassung & TÜV-Abnahme",
    service3_text:
      "Service und TÜV Hauptuntersuchung - fahrzeugfertig für den Verkauf",
    service4_title: "Handel & Vertrieb",
    service4_text:
      "Verkauf der importierten Fahrzeuge auf dem deutschen Markt oder Export in EU-Länder",
  },
  en: {
    // Navigation
    nav_home: "Home",
    nav_services: "Services",
    nav_purchase: "Vehicle Purchase",
    nav_about: "About Us",
    nav_contact: "Contact",

    // Hero
    hero_title: "Professional Car Import from Switzerland",
    hero_subtitle:
      "Purchase Switzerland & DE • Customs Clearance • B2B • EU Export • Mediation",
    hero_button: "Request Purchase Now",

    // Services
    services_title: "My Services",
    service1_title: "Vehicle Purchase Switzerland & Germany",
    service1_text:
      "I purchase high-quality vehicles directly from the Swiss and German markets - fair prices, fast processing",
    service2_title: "Import & Customs Clearance",
    service2_text:
      "Complete customs clearance of vehicles according to German regulations - professional and legally secure",
    service3_title: "German Registration & TÜV Inspection",
    service3_text:
      "Service and TÜV main inspection - vehicle-ready for sale",
    service4_title: "Trade & Distribution",
    service4_text:
      "Sale of imported vehicles on the German market or export to EU countries",
  },
  fr: {
    // Navigation
    nav_home: "Accueil",
    nav_services: "Services",
    nav_purchase: "Achat Véhicule",
    nav_about: "À Propos",
    nav_contact: "Contact",

    // Hero
    hero_title: "Importation Professionnelle de Voitures depuis la Suisse",
    hero_subtitle:
      "Achat Suisse & DE • Dédouanement • B2B • Export UE • Médiation",
    hero_button: "Demander un Achat Maintenant",

    // Services
    services_title: "Mes Services",
    service1_title: "Achat de Véhicules Suisse & Allemagne",
    service1_text:
      "J'achète des véhicules de haute qualité directement sur les marchés suisse et allemand - prix équitables, traitement rapide",
    service2_title: "Import & Dédouanement",
    service2_text:
      "Dédouanement complet des véhicules selon les réglementations allemandes - professionnel et juridiquement sécurisé",
    service3_title: "Immatriculation Allemande & Contrôle TÜV",
    service3_text:
      "Service et contrôle technique principal TÜV - véhicule prêt à la vente",
    service4_title: "Commerce & Distribution",
    service4_text:
      "Vente de véhicules importés sur le marché allemand ou export vers les pays UE",
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
        // Section is considered active if its top is near or above the navbar and it's on screen
        if (rect.top <= 120 && rect.bottom >= 200) {
          current = id;
        }
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

export default function Footer() {
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

  const onSubmit = (e) => {
    e.preventDefault();
    // Here you would typically assemble form data and send to your backend.
    alert("Danke! Ihre Anfrage wurde erfasst (Demo). Bitte Backend anbinden.");
  };

  const onFilesChange = (e) => {
    const files = Array.from(e.target.files || []);
    // enforce max 5 files in UI (front-end validation)
    const limited = files.slice(0, 5);
    if (imagesInputRef.current && files.length > 5) {
      // reset and set only 5 by creating new FileList is non-trivial; just warn user
      alert("Bitte max. 5 Bilder hochladen. Es werden nur die ersten 5 berücksichtigt.");
    }
    setFilesInfo({ count: limited.length, names: limited.map((f) => f.name) });
  };


  const navigate = useNavigate();

  return (
    <>
      {/* Non-standard but convenient: include CDN here if not in index.html */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
      />

      

      

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-links">



            <div className="footer-section">
              <h3>Schnellkontakt</h3>
              <div className="footer-content">
                <p>
                  <strong>AUTO M.A.H.</strong>
                </p>
                <p>Inhaber: Mohamed Ali Hussein</p>
                <p>
                  <i className="fas fa-map-marker-alt"></i> Daimlerstr. 10, 79585
                  Steinen, DE
                </p>
                <p>
                  <i className="fas fa-phone"></i>{" "}
                  <a
                    href="tel:+4917696084998"
                    style={{
                      color: "#fff",
                      textDecoration: "none",
                    }}
                  >
                    +49 176 96084998
                  </a>
                </p>

                <p>
                  <i className="fas fa-envelope"></i>{" "}
                  <a
                    href="mailto:auto.mah@hotmail.com"
                    style={{
                      color: "#fff",
                      textDecoration: "none",
                    }}
                  >
                    auto.mah@hotmail.com
                  </a>
                </p>
                <p>
                  <small>
                    Umsatzsteuer-Identifikationsnummer nach § 27 a des
                    Umsatzsteuergesetzes: DE402063042
                  </small>
                </p>
              </div>
            </div>

            <div className="footer-section">
            <h3>Rechtliches</h3>
            <div
                className="footer-content"
                style={{
                display: "flex",
                flexDirection: "column",
                gap: "6px",
                marginTop: "8px",
                }}
            >
                <button
                onClick={() => navigate("/imprint")}
                style={{
                    all: "unset",
                    cursor: "pointer",
                    color: "#fff",
                    textDecoration: "none",
                    transition: "opacity 0.2s ease",
                }}
                onMouseOver={(e) => (e.target.style.opacity = "0.8")}
                onMouseOut={(e) => (e.target.style.opacity = "1")}
                >
                Impressum
                </button>

                <button
                onClick={() => navigate("/privacy")}
                style={{
                    all: "unset",
                    cursor: "pointer",
                    color: "#fff",
                    textDecoration: "none",
                    transition: "opacity 0.2s ease",
                }}
                onMouseOver={(e) => (e.target.style.opacity = "0.8")}
                onMouseOut={(e) => (e.target.style.opacity = "1")}
                >
                Datenschutzerklärung
                </button>

                <button
                onClick={() => navigate("/tos")}
                style={{
                    all: "unset",
                    cursor: "pointer",
                    color: "#fff",
                    textDecoration: "none",
                    transition: "opacity 0.2s ease",
                }}
                onMouseOver={(e) => (e.target.style.opacity = "0.8")}
                onMouseOut={(e) => (e.target.style.opacity = "1")}
                >
                Allgemeine Geschäftsbedingungen
                </button>
            </div>
            </div>

            <div className="footer-section">
              <h3>Infos</h3>
              <div className="footer-content">

                <h4>Vermittlungsservice</h4>
                <p>
                  Wunschauto-Service erfolgt auf Provisionsbasis nach erfolgreicher
                  Vermittlung.
                </p>
              </div>
            </div>

            
          </div>

          <div className="footer-bottom">
            <p>
              &copy; {new Date().getFullYear()} AUTO M.A.H. - Autoimport &
              Verzollung • B2B • Handel • Export • Vermittlung
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
