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
    privacy_title: "Allgemeine Geschäftsbedingungen (AGB)",

    // Datenschutz – kompletter HTML-Block
    privacy_html: `

  <h3>1. Geltungsbereich</h3>
  <p>
    Diese Website dient ausschließlich der Kontaktaufnahme zwischen Interessenten und dem
    Fahrzeughändler <strong>AUTO M.A.H.</strong> (Inhaber: Mohamed Ali Hussein).
    Über die Website werden keine Fahrzeuge direkt verkauft und es findet keine Zahlungsabwicklung statt.
  </p>

  <h3>2. Leistungen</h3>
  <p>
    Der Betreiber bietet zwei Arten von Dienstleistungen an:
  </p>
  <p>
    <li><strong>Fahrzeugankauf:</strong> Interessenten können ihr Fahrzeug zum Verkauf anbieten.</li>
    <li><strong>Wunschauto-Service:</strong> Der Betreiber vermittelt auf Wunsch geeignete Fahrzeuge. 
      Die Vermittlung erfolgt auf Provisionsbasis nach erfolgreicher Fahrzeugvermittlung.
    </li>
  </p>

  <h3>3. Vertragsverhältnis</h3>
  <p>
    Durch die Nutzung des Kontaktformulars oder die direkte Kontaktaufnahme über Telefon oder E-Mail 
    entsteht noch kein rechtsverbindlicher Vertrag. Ein verbindliches Vertragsverhältnis kommt erst 
    zustande, wenn der Betreiber das Fahrzeug ausdrücklich ankauft oder eine erfolgreiche Vermittlung erfolgt.
  </p>

  <h3>4. Haftung</h3>
  <p>
    Der Betreiber übernimmt keine Haftung für die Richtigkeit, Vollständigkeit oder Aktualität der auf der
    Website bereitgestellten Informationen. Ansprüche auf Schadensersatz sind ausgeschlossen, soweit kein
    vorsätzliches oder grob fahrlässiges Verhalten vorliegt.
  </p>

  <h3>5. Datenschutz</h3>
  <p>
    Personenbezogene Daten, die über das Kontaktformular oder per E-Mail übermittelt werden,
    werden ausschließlich zur Bearbeitung der Anfrage verwendet. Eine Weitergabe an Dritte erfolgt nicht.
    Weitere Informationen finden Sie in unserer <a href="/privacy">Datenschutzerklärung</a>.
  </p>

  <h3>6. Schlussbestimmungen</h3>
  <p>
    Es gilt das Recht der Bundesrepublik Deutschland. Gerichtsstand ist, soweit gesetzlich zulässig,
    der Sitz des Unternehmens in Steinen (DE).
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
    privacy_title: "Terms and Conditions",
    privacy_html: `

  <h3>1. Scope</h3>
  <p>
    This website is operated solely for communication between interested parties and the car dealer
    <strong>AUTO M.A.H.</strong> (Owner: Mohamed Ali Hussein).
    No vehicles are sold directly through this website, and no payment processing takes place.
  </p>

  <h3>2. Services</h3>
  <p>
    The operator offers two types of services:
  </p>
  <p>
    <li><strong>Vehicle Purchase:</strong> Customers can offer their vehicle for sale.</li>
    <li><strong>Car Search Service:</strong> The operator helps customers find a desired vehicle.
      This service is commission-based and only payable after a successful vehicle mediation.
    </li>
  </p>

  <h3>3. Contractual Relationship</h3>
  <p>
    Submitting the contact form or contacting us by phone or email does not constitute a binding contract.
    A legally binding agreement is only concluded when the operator explicitly purchases a vehicle
    or a successful mediation has taken place.
  </p>

  <h3>4. Liability</h3>
  <p>
    The operator assumes no liability for the accuracy, completeness, or timeliness of the information
    provided on this website. Claims for damages are excluded unless based on intentional or grossly
    negligent conduct.
  </p>

  <h3>5. Data Protection</h3>
  <p>
    Personal data submitted via the contact form or email are used solely to process your inquiry.
    Data will not be shared with third parties. For details, please refer to our
    <a href="/privacy">Privacy Policy</a>.
  </p>

  <h3>6. Final Provisions</h3>
  <p>
    German law applies. The place of jurisdiction, where legally permissible, is the company’s registered
    office in Steinen, Germany.
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
    privacy_title: "Conditions Générales (CGV)",
    privacy_html: `

  <h3>1. Champ d’application</h3>
  <p>
    Ce site internet sert uniquement à la mise en relation entre les clients intéressés et le
    concessionnaire automobile <strong>AUTO M.A.H.</strong> (Propriétaire : Mohamed Ali Hussein).
    Aucun véhicule n’est vendu directement sur le site et aucun paiement n’est effectué en ligne.
  </p>

  <h3>2. Prestations</h3>
  <p>
    Le prestataire propose deux types de services :
  </p>
  <p>
    <li><strong>Achat de véhicules :</strong> les clients peuvent proposer leur véhicule à la vente.</li>
    <li><strong>Service "voiture souhaitée" :</strong> le prestataire aide à trouver un véhicule spécifique.
      Ce service est basé sur une commission due uniquement après une médiation réussie.
    </li>
  </p>

  <h3>3. Relation contractuelle</h3>
  <p>
    L’envoi d’un formulaire de contact ou un contact par téléphone ou e-mail ne crée pas de contrat
    juridiquement contraignant. Un accord n’est conclu que lorsque le prestataire achète explicitement
    un véhicule ou qu’une médiation aboutit avec succès.
  </p>

  <h3>4. Responsabilité</h3>
  <p>
    Le prestataire n’assume aucune responsabilité quant à l’exactitude, l’exhaustivité ou l’actualité
    des informations publiées sur le site. Toute demande de dommages-intérêts est exclue, sauf en cas
    de faute intentionnelle ou de négligence grave.
  </p>

  <h3>5. Protection des données</h3>
  <p>
    Les données personnelles transmises via le formulaire de contact ou par e-mail sont utilisées
    exclusivement pour traiter la demande. Aucune transmission à des tiers n’a lieu.
    Pour plus d’informations, consultez notre <a href="/privacy">Politique de confidentialité</a>.
  </p>

  <h3>6. Dispositions finales</h3>
  <p>
    Le droit allemand s’applique. Le lieu de juridiction, dans la mesure permise par la loi, est le siège
    de l’entreprise à Steinen (Allemagne).
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
