import React, { useEffect, useMemo, useRef, useState } from "react";
import CarForm from "./CarForm";
import GeneralForm from "./GeneralForm"
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
    services_title: "Unsere Leistungen",
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
    services_title: "Our Services",
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
    services_title: "Notre Services",
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

  return (
    <>
      {/* Non-standard but convenient: include CDN here if not in index.html */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
      />

      <style>
        {`
        .hero { background: linear-gradient(rgba(26, 58, 95, 0.8), rgba(26, 58, 95, 0.9)), url('images/hero-image.jpg'); background-size: cover; background-position: center; color: white; text-align: center; padding: 140px 0 80px; position: relative; margin-top: 70px; }
        `}
      </style>

      

      {/* Hero */}
      <section id="home" className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>{t("hero_title")}</h1>
            <p>{t("hero_subtitle")}</p>
            <a href="#vehicle-purchase" className="btn">
              {t("hero_button")}
            </a>

            <div className="hero-badges">
              <div className="badge">
                <i className="fas fa-check-circle"></i> Faire Preise
              </div>
              <div className="badge">
                <i className="fas fa-check-circle"></i> Schnelle Abwicklung
              </div>
              <div className="badge">
                <i className="fas fa-check-circle"></i> Professionelle Beratung
              </div>
              <div className="badge">
                <i className="fas fa-check-circle"></i> Wunschauto-Service
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="services">
        <div className="container">
          <h2>{t("services_title")}</h2>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">
                <i className="fas fa-car"></i>
              </div>
              <h3>{t("service1_title")}</h3>
              <p>{t("service1_text")}</p>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <i className="fas fa-passport"></i>
              </div>
              <h3>{t("service2_title")}</h3>
              <p>{t("service2_text")}</p>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <i className="fas fa-file-alt"></i>
              </div>
              <h3>{t("service3_title")}</h3>
              <p>{t("service3_text")}</p>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <i className="fas fa-handshake"></i>
              </div>
              <h3>{t("service4_title")}</h3>
              <p>{t("service4_text")}</p>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <i className="fas fa-car-side"></i>
              </div>
              <h3>Vermittlung & Wunschauto-Service</h3>
              <p>
                Sie suchen ein bestimmtes Fahrzeug? Ich helfe bei der Beschaffung
                Ihres Wunschautos - national und international
              </p>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <i className="fas fa-search"></i>
              </div>
              <h3>Individuelle Fahrzeugsuche</h3>
              <p>
                Gezielte Suche nach Ihrem Traumauto mit spezifischen
                Ausstattungswünschen und Budgetvorgaben
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Fahrzeug-Ankauf / Wunschauto-Service */}
      <section id="vehicle-purchase" className="vehicle-purchase">
        <div className="container">
          <h2>Fahrzeug Ankauf & Vermittlung</h2>

          <div className="purchase-intro">
            <p className="section-subtitle">
              Wir kaufen Ihr Fahrzeug direkt an oder helfen bei der Suche nach
              Ihrem Wunschauto
            </p>
            <div className="purchase-features">
              <h3>Wir bieten zwei Services an:</h3>
              <div className="features-grid">
                <div className="feature">
                  <span className="feature-icon">
                    <i className="fas fa-check"></i>
                  </span>
                  <span>
                    <strong>Fahrzeugankauf:</strong> Wir kaufen Ihr Auto zu
                    fairen Konditionen
                  </span>
                </div>
                <div className="feature">
                  <span className="feature-icon">
                    <i className="fas fa-check"></i>
                  </span>
                  <span>
                    <strong>Wunschauto-Service:</strong> Wir finden Ihr
                    Traumauto nach Ihren Vorgaben
                  </span>
                </div>
              </div>
              <p className="feature-note">
                <strong>
                  Egal ob Verkauf oder Kauf - wir machen Ihnen ein faires Angebot
                  und finden Ihr Wunschfahrzeug!
                </strong>
              </p>
            </div>
          </div>


            <h2>Wir kaufen Occasionen aller Automarken und Modellen</h2>



            <div className="purchase-intro">

            <div className="purchase-features">

              <div className="features-grid">
                <div className="feature">
                  <span className="feature-icon">
                    <i className="fas fa-check"></i>
                  </span>
                  <span>
                    <strong>Auch mit hohen Kilometerzahlen</strong>
                  </span>
                </div>
                <div className="feature">
                  <span className="feature-icon">
                    <i className="fas fa-check"></i>
                  </span>
                  <span>
                    <strong>Fahrzeuge mit Defekten oder Schäden</strong>
                  </span>
                </div>
                <div className="feature">
                  <span className="feature-icon">
                    <i className="fas fa-check"></i>
                  </span>
                  <span>
                    <strong>Unfallfahrzeuge</strong>
                  </span>
                </div>
                <div className="feature">
                  <span className="feature-icon">
                    <i className="fas fa-check"></i>
                  </span>
                  <span>
                    <strong>Wirtschaftliche Totalschäden</strong>
                  </span>
                </div>
                <div className="feature">
                  <span className="feature-icon">
                    <i className="fas fa-check"></i>
                  </span>
                  <span>
                    <strong>Junge und alte Fahrzeuge</strong>
                  </span>
                </div>
                <div className="feature">
                  <span className="feature-icon">
                    <i className="fas fa-check"></i>
                  </span>
                  <span>
                    <strong>Luxusfahrzeuge & Alltagsautos</strong>
                  </span>
                </div>
                <div className="feature">
                  <span className="feature-icon">
                    <i className="fas fa-check"></i>
                  </span>
                  <span>
                    <strong>Mit oder ohne Service-Historie</strong>
                  </span>
                </div>
                <div className="feature">
                  <span className="feature-icon">
                    <i className="fas fa-check"></i>
                  </span>
                  <span>
                    <strong>Luxusfahrzeuge & Alltagsautos</strong>
                  </span>
                </div>
              </div>
              <p className="feature-note">
                <strong>
                  Egal in welchem Zustand - wir machen Ihnen ein faires Angebot!
                </strong>
              </p>
            </div>


          </div>

          <CarForm />

        </div>
      </section>

      {/* Über uns */}
      <section id="about" className="about">
        <div className="container">
          <h2>Über AUTO M.A.H.</h2>
          <div className="about-content">
            <div className="about-image">
              <img src="images/profil-bild.jpg" alt="Inhaber AUTO M.A.H." />
              <div className="owner-name">
                <h3>Mohamed Ali Hussein</h3>
                <p>Inhaber & Geschäftsführer</p>
              </div>
            </div>
            <div className="about-text">
              <h3>
                Ihr Spezialist für Schweizer Fahrzeugimport und individuelle
                Autovermittlung
              </h3>
              <p>
                Als erfahrener Autohändler konzentriere ich mich auf den Ankauf
                und Import von Fahrzeugen aus der Schweiz. Ich kaufe Autos direkt
                in der Schweiz, führe die komplette Verzollung nach Deutschland
                durch und vertreibe die Fahrzeuge anschließend auf dem deutschen
                Markt oder exportiere sie in den EU-Raum.
              </p>

              <p>
                Mit meiner Expertise im Schweizer Automarkt und umfassenden
                Kenntnissen der deutschen Zollbestimmungen sorge ich für einen
                reibungslosen, effizienten Importprozess. Ich beherrsche alle
                notwendigen Formalitäten und garantiere eine professionelle
                Abwicklung.
              </p>

              <p>
                <strong>Neu: Wunschauto-Service</strong>
                <br />
                Sie suchen ein bestimmtes Fahrzeug mit spezieller Ausstattung? Ich
                helfe Ihnen bei der Suche nach Ihrem Traumauto - national und
                international. Durch mein Netzwerk und Marktkenntnis finde ich
                Fahrzeuge, die Ihren Vorstellungen entsprechen.
              </p>

              <div className="business-note">
                <p>
                  <strong>
                    Sie haben Fragen zum Autoimport oder suchen ein bestimmtes
                    Fahrzeug?
                  </strong>{" "}
                  Ich berate Sie gerne zu allen Themen rund um Fahrzeugimport,
                  Verzollung und individuelle Fahrzeugsuche.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Kontakt */}
      <section id="contact" className="contact">
        <div className="container">
          <h2>Kontaktieren Sie uns gerne</h2>
          <div className="contact-content">
            <div className="contact-info">
              <h3>AUTO M.A.H.</h3>
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
                  <i className="fas fa-map-marker-alt"></i> Daimlerstr. 10, 79585 Steinen, DE
                </p>
            </div>
            

            {/* Rechte Spalte: Kontaktformular */}
            <GeneralForm/>
            
          </div>
        </div>
      </section>

      
    </>
  );
}
