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
    privacy_title: "Datenschutzerklärung",

    // Datenschutz – kompletter HTML-Block
    privacy_html: `
      <h2>1. Datenschutz auf einen Blick</h2>
      <h3>Allgemeine Hinweise</h3>
      <p>Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten Datenschutzerklärung.</p>

      <h3>Datenerfassung auf dieser Website</h3>
      <h4>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</h4>
      <p>Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Abschnitt „Hinweis zur Verantwortlichen Stelle“ in dieser Datenschutzerklärung entnehmen.</p>
      <h4>Wie erfassen wir Ihre Daten?</h4>
      <p>Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z.&nbsp;B. um Daten handeln, die Sie in ein Kontaktformular eingeben.</p>
      <p>Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere IT-Systeme erfasst (z.&nbsp;B. Browser, Betriebssystem, Zeitpunkt des Aufrufs). Die Erfassung dieser technischen Daten erfolgt automatisch, sobald Sie diese Website betreten.</p>
      <h4>Wofür nutzen wir Ihre Daten?</h4>
      <p>Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Eine Analyse des Nutzerverhaltens findet nicht statt.</p>
      <h4>Welche Rechte haben Sie bezüglich Ihrer Daten?</h4>
      <p>Sie haben jederzeit das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit sowie das Recht auf Beschwerde bei einer Aufsichtsbehörde. Hierzu sowie zu weiteren Fragen können Sie sich jederzeit an uns wenden.</p>

      <h3>Analyse-Tools und Tools von Drittanbietern</h3>
      <p>Auf dieser Website werden <strong>keine</strong> Cookies gesetzt, <strong>kein</strong> Tracking und <strong>keine</strong> Analyse-Tools eingesetzt. Es erfolgt keine Profilbildung, Reichweitenmessung oder statistische Auswertung Ihres Nutzerverhaltens.</p>
      <p>Die Nutzung dieser Website ist ohne Angabe personenbezogener Daten möglich, sofern Sie nicht freiwillig das Kontaktformular ausfüllen.</p>

      <h2>2. Hosting</h2>
      <p>Wir hosten die Inhalte unserer Website bei folgendem Anbieter:</p>
      <h3>DigitalOcean</h3>
      <p>Anbieter ist die DigitalOcean, LLC, 101 Avenue of the Americas, 10th Floor, New York, NY 10013, USA („DigitalOcean“). Beim Besuch unserer Website können Server-Logfiles verarbeitet werden (z. B. IP-Adresse, Datum/Uhrzeit, Referrer-URL, User-Agent). Details: <a href="https://www.digitalocean.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">Privacy Policy von DigitalOcean</a>.</p>
      <p>Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an einer zuverlässigen, performanten und sicheren Bereitstellung). Wir haben mit DigitalOcean einen Auftragsverarbeitungsvertrag (Art. 28 DSGVO) abgeschlossen; etwaige Übermittlungen in die USA stützen wir auf geeignete Garantien (Art. 46 DSGVO, z. B. Standardvertragsklauseln) sowie technische und organisatorische Maßnahmen.</p>

      <h2>3. Allgemeine Hinweise und Pflichtinformationen</h2>
      <h3>Datenschutz</h3>
      <p>Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Vorschriften sowie dieser Datenschutzerklärung. Bitte beachten Sie, dass die Datenübertragung im Internet Sicherheitslücken aufweisen kann.</p>

      <h3>Hinweis zur verantwortlichen Stelle</h3>
      <p>Verantwortlich: Mohamed Ali Hussein</p>
      <p>Telefon: +49 (0) 176 960 849 98<br>E-Mail: auto.mah@hotmail.com</p>

      <h3>Speicherdauer</h3>
      <p>Soweit innerhalb dieser Erklärung keine speziellere Speicherdauer genannt ist, verbleiben personenbezogene Daten bei uns, bis der Verarbeitungszweck entfällt oder Sie Ihr Löschersuchen geltend machen. Gesetzliche Aufbewahrungspflichten bleiben unberührt.</p>

      <h3>Rechtsgrundlagen</h3>
      <p>Je nach Fall: Art. 6 Abs. 1 lit. a (Einwilligung), lit. b (Vertrag/Vorvertrag), lit. c (rechtliche Verpflichtung) oder lit. f (berechtigtes Interesse) DSGVO. Einwilligungen können jederzeit mit Wirkung für die Zukunft widerrufen werden.</p>

      <h3>Empfänger von personenbezogenen Daten</h3>
      <p>Eine Weitergabe an Dritte erfolgt nicht, außer wenn gesetzlich vorgeschrieben, zur Vertragserfüllung erforderlich, berechtigte Interessen überwiegen oder eine andere Rechtsgrundlage dies erlaubt.</p>

      <h3>Ihre Rechte</h3>
      <p>Auskunft, Berichtigung, Löschung, Einschränkung, Widerspruch (Art. 21 DSGVO), Datenübertragbarkeit, Beschwerderecht bei einer Aufsichtsbehörde.</p>

      <h3>SSL-/TLS-Verschlüsselung</h3>
      <p>Diese Seite nutzt SSL-/TLS-Verschlüsselung. Erkennbar an „https://“ und dem Schloss-Symbol im Browser.</p>

      <h2>4. Datenerfassung auf dieser Website</h2>
      <h3>Server-Log-Dateien</h3>
      <p>Technische Daten (z. B. Browsertyp/-version, Betriebssystem, Referrer-URL, Hostname, Uhrzeit, IP-Adresse) können durch den Provider verarbeitet werden. Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO (technische Bereitstellung).</p>

      <h3>Kontaktformular</h3>
      <p>Wenn Sie uns über das Kontaktformular kontaktieren, verarbeiten wir die von Ihnen freiwillig eingegebenen Daten (z. B. Name, Telefon, E-Mail, Fahrzeugdaten) ausschließlich zur Bearbeitung Ihrer Anfrage und zur Kontaktaufnahme. Eine Weitergabe an Dritte erfolgt nicht.</p>
      <p>Rechtsgrundlagen: Art. 6 Abs. 1 lit. b DSGVO (Vertrag/Vorvertrag) oder lit. f DSGVO (berechtigtes Interesse an effektiver Kommunikation) bzw. lit. a DSGVO (Einwilligung, sofern abgefragt). Die Daten werden auf Wunsch oder nach Abschluss der Kommunikation gelöscht, gesetzliche Aufbewahrungsfristen bleiben unberührt.</p>

      <h3>Anfrage per E-Mail oder Telefon</h3>
      <p>Bei Kontaktaufnahme per E-Mail oder Telefon verarbeiten wir Ihre Angaben zum Zweck der Bearbeitung. Keine Weitergabe ohne Einwilligung. Rechtsgrundlagen wie vorstehend; Löschung nach Zweckerfüllung bzw. auf Wunsch.</p>
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
    privacy_title: "Privacy Policy",
    privacy_html: `
      <h2>1. Privacy at a Glance</h2>
    <h3>General Information</h3>
    <p>The following notes provide a simple overview of what happens to your personal data when you visit this website. Personal data is any data by which you can be personally identified. Detailed information on data protection can be found in our privacy policy set out below.</p>

    <h3>Data Collection on This Website</h3>
    <h4>Who is responsible for data collection on this website?</h4>
    <p>Data processing on this website is carried out by the website operator. You can find the operator’s contact details in the section “Notice Regarding the Controller” in this privacy policy.</p>
    <h4>How do we collect your data?</h4>
    <p>On the one hand, your data is collected when you provide it to us. This can be, for example, data that you enter into a contact form.</p>
    <p>Other data is collected automatically or after your consent when visiting the website by our IT systems (e.g., browser, operating system, time of access). The collection of this technical data takes place automatically as soon as you enter this website.</p>
    <h4>What do we use your data for?</h4>
    <p>Part of the data is collected to ensure the error-free provision of the website. There is no analysis of user behavior.</p>
    <h4>What rights do you have regarding your data?</h4>
    <p>You have the right at any time to obtain information about the origin, recipients, and purpose of your stored personal data. You also have the right to request rectification or erasure of this data, to restrict processing, to data portability, and to lodge a complaint with a supervisory authority. You can contact us at any time regarding this or any other questions on the subject of data protection.</p>

    <h3>Analytics Tools and Third-Party Tools</h3>
    <p>No <strong>cookies</strong> are set on this website, there is <strong>no</strong> tracking, and <strong>no</strong> analytics tools are used. There is no profiling, reach measurement, or statistical evaluation of your user behavior.</p>
    <p>You can use this website without providing personal data unless you voluntarily fill out the contact form.</p>

    <h2>2. Hosting</h2>
    <p>We host the content of our website with the following provider:</p>
    <h3>DigitalOcean</h3>
    <p>The provider is DigitalOcean, LLC, 101 Avenue of the Americas, 10th Floor, New York, NY 10013, USA (“DigitalOcean”). When you visit our website, server log files may be processed (e.g., IP address, date/time, referrer URL, user agent). Details: <a href="https://www.digitalocean.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">DigitalOcean Privacy Policy</a>.</p>
    <p>The legal basis is Art. 6(1)(f) GDPR (legitimate interest in a reliable, performant, and secure provision of our website). We have concluded a data processing agreement with DigitalOcean (Art. 28 GDPR); any transfers to the USA are based on appropriate safeguards (Art. 46 GDPR, e.g., Standard Contractual Clauses) as well as technical and organizational measures.</p>

    <h2>3. General Notes and Mandatory Information</h2>
    <h3>Data Protection</h3>
    <p>We treat your personal data confidentially and in accordance with the statutory data protection regulations as well as this privacy policy. Please note that data transmission on the Internet (e.g., communication by email) may have security vulnerabilities.</p>

    <h3>Notice Regarding the Controller</h3>
    <p>Controller: Mohamed Ali Hussein</p>
    <p>Phone: +49 (0) 176 960 849 98<br>Email: auto.mah@hotmail.com</p>

    <h3>Storage Period</h3>
    <p>Unless a more specific storage period has been specified within this statement, personal data will remain with us until the purpose for the data processing ceases to apply or you request deletion. Statutory retention obligations remain unaffected.</p>

    <h3>Legal Bases</h3>
    <p>Depending on the case: Art. 6(1)(a) GDPR (consent), Art. 6(1)(b) GDPR (contract/pre-contractual measures), Art. 6(1)(c) GDPR (legal obligation), or Art. 6(1)(f) GDPR (legitimate interests). Consent can be withdrawn at any time with effect for the future.</p>

    <h3>Recipients of Personal Data</h3>
    <p>Personal data will not be disclosed to third parties except where required by law, necessary for contract performance, where our legitimate interests prevail, or where another legal basis permits disclosure.</p>

    <h3>Your Rights</h3>
    <p>Right of access, rectification, erasure, restriction, objection (Art. 21 GDPR), data portability, and the right to lodge a complaint with a supervisory authority.</p>

    <h3>SSL/TLS Encryption</h3>
    <p>This site uses SSL/TLS encryption. You can recognize an encrypted connection by the “https://” and the lock symbol in the browser’s address bar.</p>

    <h2>4. Data Collection on This Website</h2>
    <h3>Server Log Files</h3>
    <p>Technical data (e.g., browser type/version, operating system, referrer URL, host name, time of server request, IP address) may be processed by the provider. Legal basis: Art. 6(1)(f) GDPR (technical provision).</p>

    <h3>Contact Form</h3>
    <p>If you contact us via the contact form, we process the data you voluntarily enter (e.g., name, phone, email, vehicle details) solely to handle your inquiry and to contact you. There is no disclosure to third parties.</p>
    <p>Legal bases: Art. 6(1)(b) GDPR (contract/pre-contract), or Art. 6(1)(f) GDPR (legitimate interest in effective communication), or Art. 6(1)(a) GDPR (consent, if obtained). Data will be deleted upon request or after the communication has been completed; statutory retention obligations remain unaffected.</p>

    <h3>Inquiry by Email or Telephone</h3>
    <p>If you contact us by email or telephone, we process your details for the purpose of handling your request. No disclosure without consent. Legal bases as above; deletion after the purpose has been fulfilled or upon request.</p>

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
    privacy_title: "Politique de Confidentialité",
    privacy_html: `
      <h2>1. Protection des données en un coup d’œil</h2>
<h3>Informations générales</h3>
<p>Les informations ci-dessous donnent un aperçu simple de ce qu’il advient de vos données personnelles lorsque vous visitez ce site web. Les données personnelles sont toutes les données permettant de vous identifier personnellement. Des informations détaillées sur la protection des données figurent dans notre politique de confidentialité ci-après.</p>

<h3>Collecte des données sur ce site</h3>
<h4>Qui est responsable de la collecte des données sur ce site&nbsp;?</h4>
<p>Le traitement des données sur ce site est effectué par l’exploitant du site. Vous trouverez ses coordonnées dans la section «&nbsp;Information concernant le responsable du traitement&nbsp;» de la présente politique de confidentialité.</p>
<h4>Comment collectons-nous vos données&nbsp;?</h4>
<p>Vos données sont d’une part collectées lorsque vous nous les communiquez. Il peut s’agir, par exemple, des données que vous saisissez dans un formulaire de contact.</p>
<p>D’autres données sont collectées automatiquement ou après votre consentement lors de votre visite du site par nos systèmes informatiques (p.&nbsp;ex. navigateur, système d’exploitation, heure de consultation). La collecte de ces données techniques intervient automatiquement dès que vous accédez à ce site.</p>
<h4>À quelles fins utilisons-nous vos données&nbsp;?</h4>
<p>Une partie des données est collectée afin de garantir la mise à disposition sans erreur du site. Aucune analyse du comportement des utilisateurs n’a lieu.</p>
<h4>Quels sont vos droits relatifs à vos données&nbsp;?</h4>
<p>Vous avez le droit, à tout moment, d’obtenir des informations sur l’origine, les destinataires et la finalité de vos données personnelles enregistrées. Vous avez également le droit de demander la rectification ou l’effacement de ces données, la limitation du traitement, la portabilité des données ainsi que le droit d’introduire une réclamation auprès d’une autorité de contrôle. Vous pouvez nous contacter à tout moment à ce sujet et pour toute autre question relative à la protection des données.</p>

<h3>Outils d’analyse et outils de tiers</h3>
<p>Aucun <strong>cookie</strong> n’est installé sur ce site, aucun <strong>suivi</strong> n’est effectué et aucun <strong>outil d’analyse</strong> n’est utilisé. Il n’y a pas de profilage, de mesure d’audience ni d’évaluation statistique de votre comportement d’utilisation.</p>
<p>Vous pouvez utiliser ce site sans fournir de données personnelles, sauf si vous remplissez volontairement le formulaire de contact.</p>

<h2>2. Hébergement</h2>
<p>Nous hébergeons le contenu de notre site auprès du prestataire suivant&nbsp;:</p>
<h3>DigitalOcean</h3>
<p>Le prestataire est DigitalOcean, LLC, 101 Avenue of the Americas, 10th Floor, New York, NY 10013, USA («&nbsp;DigitalOcean&nbsp;»). Lors de votre visite, des journaux serveurs peuvent être traités (p.&nbsp;ex. adresse IP, date/heure, URL référente, user-agent). Détails&nbsp;: <a href="https://www.digitalocean.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">Politique de confidentialité de DigitalOcean</a>.</p>
<p>Base juridique&nbsp;: art. 6, par. 1, point f) du RGPD (intérêt légitime à une mise à disposition fiable, performante et sécurisée). Nous avons conclu un contrat de sous-traitance avec DigitalOcean (art. 28 RGPD)&nbsp;; les transferts éventuels vers les États-Unis reposent sur des garanties appropriées (art. 46 RGPD, p.&nbsp;ex. clauses contractuelles types) ainsi que sur des mesures techniques et organisationnelles.</p>

<h2>3. Informations générales et mentions obligatoires</h2>
<h3>Protection des données</h3>
<p>Nous traitons vos données personnelles de manière confidentielle et conformément aux dispositions légales en vigueur ainsi qu’à la présente politique de confidentialité. Veuillez noter que la transmission de données sur Internet (par ex. par e-mail) peut présenter des failles de sécurité.</p>

<h3>Information concernant le responsable du traitement</h3>
<p>Responsable&nbsp;: Mohamed Ali Hussein</p>
<p>Téléphone&nbsp;: +49 (0) 176 960 849 98<br>E-mail&nbsp;: auto.mah@hotmail.com</p>

<h3>Durée de conservation</h3>
<p>Sauf indication contraire dans la présente déclaration, les données personnelles sont conservées chez nous jusqu’à ce que la finalité du traitement cesse ou que vous demandiez leur suppression. Les obligations légales de conservation demeurent inchangées.</p>

<h3>Bases juridiques</h3>
<p>Selon les cas&nbsp;: art. 6, par. 1, point a) du RGPD (consentement), point b) (contrat/pré-contrat), point c) (obligation légale) ou point f) (intérêts légitimes). Les consentements peuvent être retirés à tout moment avec effet pour l’avenir.</p>

<h3>Destinataires des données personnelles</h3>
<p>Aucune transmission à des tiers n’a lieu, sauf si la loi l’exige, si cela est nécessaire à l’exécution d’un contrat, si nos intérêts légitimes prévalent ou si une autre base juridique l’autorise.</p>

<h3>Vos droits</h3>
<p>Droit d’accès, de rectification, d’effacement, de limitation, d’opposition (art. 21 RGPD), de portabilité des données, et droit d’introduire une réclamation auprès d’une autorité de contrôle.</p>

<h3>Chiffrement SSL/TLS</h3>
<p>Ce site utilise un chiffrement SSL/TLS. Vous pouvez reconnaître une connexion chiffrée au «&nbsp;https://&nbsp;» et à l’icône de cadenas dans la barre d’adresse du navigateur.</p>

<h2>4. Collecte des données sur ce site</h2>
<h3>Journaux serveurs</h3>
<p>Des données techniques (p.&nbsp;ex. type/version du navigateur, système d’exploitation, URL référente, nom d’hôte, heure de la requête serveur, adresse IP) peuvent être traitées par le prestataire. Base juridique&nbsp;: art. 6, par. 1, point f) du RGPD (fourniture technique).</p>

<h3>Formulaire de contact</h3>
<p>Si vous nous contactez via le formulaire de contact, nous traitons les données que vous saisissez volontairement (p.&nbsp;ex. nom, téléphone, e-mail, détails du véhicule) uniquement afin de traiter votre demande et de vous recontacter. Aucune transmission à des tiers.</p>
<p>Bases juridiques&nbsp;: art. 6, par. 1, point b) du RGPD (contrat/pré-contrat), ou point f) (intérêt légitime à une communication efficace), ou point a) (consentement, le cas échéant). Les données sont supprimées sur demande ou après la fin des échanges&nbsp;; les obligations légales de conservation demeurent inchangées.</p>

<h3>Demande par e-mail ou téléphone</h3>
<p>Si vous nous contactez par e-mail ou par téléphone, nous traitons vos informations aux fins du traitement de votre demande. Aucune transmission sans consentement. Bases juridiques comme ci-dessus&nbsp;; suppression après réalisation de la finalité ou sur demande.</p>

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
