// src/translations.js
const translations = {
  de: {
    // Navigation (falls du sie global brauchst)
    nav_home: "Start",
    nav_services: "Leistungen",
    nav_purchase: "Fahrzeug Ankauf",
    nav_about: "Über uns",
    nav_contact: "Kontakt",

    global: {
      demo_submit_info:
        "Danke! Ihre Anfrage wurde erfasst (Demo). Bitte Backend anbinden.",
    },

    hero: {
      title: "Professioneller Autoimport aus der Schweiz",
      subtitle:
        "Ankauf Schweiz & DE • Verzollung • B2B • EU-Export • Vermittlung",
      cta: "Jetzt Ankauf anfragen",
      badge_fair: "Faire Preise",
      badge_fast: "Schnelle Abwicklung",
      badge_pro: "Professionelle Beratung",
      badge_wish: "Wunschauto-Service",
    },

    services: {
      title: "Unsere Leistungen",
      card1: {
        title: "Fahrzeugankauf Schweiz & Deutschland",
        text: "Ich kaufe qualitativ hochwertige Fahrzeuge direkt vom Schweizer und deutschen Markt an - faire Preise, schnelle Abwicklung",
      },
      card2: {
        title: "Import & Verzollung",
        text: "Komplette Verzollung der Fahrzeuge nach deutschen Bestimmungen - professionell und rechtssicher",
      },
      card3: {
        title: "Deutsche Zulassung & TÜV-Abnahme",
        text: "Service und TÜV Hauptuntersuchung - fahrzeugfertig für den Verkauf",
      },
      card4: {
        title: "Handel & Vertrieb",
        text: "Verkauf der importierten Fahrzeuge auf dem deutschen Markt oder Export in EU-Länder",
      },
      card5: {
        title: "Vermittlung & Wunschauto-Service",
        text: "Sie suchen ein bestimmtes Fahrzeug? Ich helfe bei der Beschaffung Ihres Wunschautos - national und international",
      },
      card6: {
        title: "Individuelle Fahrzeugsuche",
        text: "Gezielte Suche nach Ihrem Traumauto mit spezifischen Ausstattungswünschen und Budgetvorgaben",
      },
    },

    purchase: {
      title: "Fahrzeug Ankauf & Vermittlung",
      subtitle:
        "Wir kaufen Ihr Fahrzeug direkt an oder helfen bei der Suche nach Ihrem Wunschauto",
      offer_two_services: "Wir bieten zwei Services an:",
      feature_buy: {
        title: "Fahrzeugankauf:",
        text: "Wir kaufen Ihr Auto zu fairen Konditionen",
      },
      feature_wish: {
        title: "Wunschauto-Service:",
        text: "Wir finden Ihr Traumauto nach Ihren Vorgaben",
      },
      feature_note:
        "Egal ob Verkauf oder Kauf - wir machen Ihnen ein faires Angebot und finden Ihr Wunschfahrzeug!",

      accept_all_title: "Wir kaufen Occasionen aller Automarken und Modellen",
      accept_high_mileage: "Auch mit hohen Kilometerzahlen",
      accept_defects: "Fahrzeuge mit Defekten oder Schäden",
      accept_accident: "Unfallfahrzeuge",
      accept_total_loss: "Wirtschaftliche Totalschäden",
      accept_young_old: "Junge und alte Fahrzeuge",
      accept_luxury_daily: "Luxusfahrzeuge & Alltagsautos",
      accept_with_without_history: "Mit oder ohne Service-Historie",
      fair_offer_any_condition:
        "Egal in welchem Zustand - wir machen Ihnen ein faires Angebot!",
    },

    about: {
      title: "Über AUTO M.A.H.",
      owner_alt: "Inhaber AUTO M.A.H.",
      owner_name: "Mohamed Ali Hussein",
      owner_role: "Inhaber & Geschäftsführer",
      headline:
        "Ihr Spezialist für Schweizer Fahrzeugimport und individuelle Autovermittlung",
      p1: "Als erfahrener Autohändler konzentriere ich mich auf den Ankauf und Import von Fahrzeugen aus der Schweiz. Ich kaufe Autos direkt in der Schweiz, führe die komplette Verzollung nach Deutschland durch und vertreibe die Fahrzeuge anschließend auf dem deutschen Markt oder exportiere sie in den EU-Raum.",
      p2: "Mit meiner Expertise im Schweizer Automarkt und umfassenden Kenntnissen der deutschen Zollbestimmungen sorge ich für einen reibungslosen, effizienten Importprozess. Ich beherrsche alle notwendigen Formalitäten und garantiere eine professionelle Abwicklung.",
      new_wish_service_title: "Neu: Wunschauto-Service",
      new_wish_service_text:
        "Sie suchen ein bestimmtes Fahrzeug mit spezieller Ausstattung? Ich helfe Ihnen bei der Suche nach Ihrem Traumauto - national und international. Durch mein Netzwerk und Marktkenntnis finde ich Fahrzeuge, die Ihren Vorstellungen entsprechen.",
      note_strong:
        "Sie haben Fragen zum Autoimport oder suchen ein bestimmtes Fahrzeug?",
      note_text:
        "Ich berate Sie gerne zu allen Themen rund um Fahrzeugimport, Verzollung und individuelle Fahrzeugsuche.",
    },

    contact: {
      title: "Kontaktieren Sie uns gerne",
      brand: "AUTO M.A.H.",
    },

    vehicle: {
      max_5_images:
        "Bitte max. 5 Bilder hochladen. Es werden nur die ersten 5 berücksichtigt.",
    },

    // ======================
    // CarForm (NEU)
    // ======================
    carform: {
      title: "Ankauf-Anfrage oder Wunschauto-Service",
      service_title: "Welchen Service wünschen Sie?",
      service_purchase: "Fahrzeug verkaufen (Ankauf)",
      service_wish: "Wunschauto finden (Vermittlung)",

      vehicle_title: "Fahrzeug-Daten",
      brand_label: "Marke *",
      brand_placeholder: "Bitte wählen",
      brand_other_label: "Eigene Marke *",
      brand_other_ph: "z.B. Alfa Romeo",
      model_label: "Modell *",
      model_placeholder: "Bitte Modell wählen",
      model_first_choose: "Bitte zuerst Marke wählen",
      model_other_label: "Modell *",
      model_other_ph: "z.B. Giulia",
      year_label: "Baujahr *",
      year_ph: "z.B. {example}",
      mileage_label: "Kilometerstand *",
      mileage_ph: "z.B. 75000",

      price_title: "Preisvorstellung",
      price_label: "Ihre Preisvorstellung (€) *",
      price_ph: "Welchen Preis haben Sie sich vorgestellt?",

      budget_title: "Budgetvorstellung",
      budget_label: "Ihre Budgetvorstellung (€)",
      budget_ph: "Wie hoch ist Ihr Maximalbudget?",

      features_title: "Ihre Wunschausstattung",
      equipment_label: "Besondere Ausstattungswünsche",
      equipment_ph:
        "z.B. Lederausstattung, Panoramadach, Sonderausstattung...",
      color_label: "Bevorzugte Farbe",
      color_ph: "Farbe des Fahrzeugs",
      fuel_label: "Kraftstoffart",
      fuel_placeholder: "Bitte wählen",
      fuel_petrol: "Benzin",
      fuel_diesel: "Diesel",
      fuel_hybrid: "Hybrid",
      fuel_electric: "Elektro",
      fuel_any: "Egal",

      photos_title: "Fahrzeug-Fotos",
      photos_label: "Bilder hochladen *",
      files_none: "Keine Dateien ausgewählt",
      files_count: "{count} Datei(en): {names}",
      photos_hint:
        "Bitte laden Sie Fotos von allen Seiten, Innenraum und eventuellen Schäden hoch (max. 10 Bilder).",
      req_title: "Erforderliche Fotos:",
      req_front: "Frontansicht",
      req_rear: "Heckansicht",
      req_sides: "Seitenansicht (beide Seiten)",
      req_interior: "Innenraum",
      req_odo: "Tachometer (Kilometerstand)",
      req_damage: "Eventuelle Schäden oder Defekte",

      contacts_title: "Ihre Kontaktdaten",
      name_label: "Name *",
      name_ph: "Ihr Name",
      email_label: "E-Mail *",
      email_ph: "Ihre E-Mail",
      phone_label: "Telefon *",
      phone_ph: "Ihre Telefonnummer",
      location_label: "Ort/PLZ *",
      location_ph: "Ihr Standort",
      message_label: "Nachricht (optional)",
      message_ph: "Zusätzliche Informationen oder Terminwünsche...",
      privacy_prefix: "Ich stimme der",
      privacy_link: "Datenschutzerklärung",
      privacy_suffix:
        "zu. Meine Daten werden streng vertraulich behandelt und nicht an Dritte weitergegeben. *",

      btn_sending: "Senden…",
      btn_submit_purchase: "Kostenlose Bewertung anfordern",
      btn_submit_wish: "Kostenlose Fahrzeugsuche anfragen",

      alert_max10:
        "Bitte maximal 10 Bilder hochladen. Es werden nur die ersten 10 übernommen.",
      err_brand: "Bitte eine Automarke wählen.",
      err_brand_other: "Bitte die Marke eintragen.",
      err_model_other: "Bitte das Modell eintragen.",
      err_model: "Bitte ein Modell wählen.",
      err_year_range: "Baujahr muss zwischen {min} und {max} liegen.",
      err_mileage: "Kilometerstand ist ungültig.",
      err_price: "Bitte eine gültige Preisvorstellung angeben.",
      err_images_required: "Bitte mindestens ein Fahrzeugfoto hochladen.",
      err_contacts: "Bitte alle Kontaktdaten ausfüllen.",
      err_privacy: "Bitte der Datenschutzerklärung zustimmen.",
      err_webhook: "Discord-WebHook fehlgeschlagen.",
      err_generic: "Es ist ein Fehler aufgetreten.",
      success_alert: "Vielen Dank! Ihre Anfrage wurde erfolgreich versendet.",
      warn_only_first10:
        "Es werden nur die ersten 10 Bilder an Discord gesendet.",
      brand_other_fallback: "Andere",

      embed: {
        title_purchase: "Ankauf-Anfrage",
        title_wish: "Wunschauto-Anfrage",
        service_name: "Service",
      },
      service_purchase_full: "Ankauf (Fahrzeug verkaufen)",
      service_wish_full: "Vermittlung (Wunschauto)",

      field_brand: "Marke",
      field_model: "Modell",
      field_year: "Baujahr",
      field_mileage: "Kilometerstand",
      field_price: "Preisvorstellung (€)",
      field_budget: "Budget (€)",
      field_color: "Farbe",
      field_fuel: "Kraftstoff",
      field_equipment: "Ausstattung",
      field_name: "Name",
      field_phone: "Telefon",
      field_email: "E-Mail",
      field_location: "Ort/PLZ",
      field_message: "Nachricht",

      discord_content_purchase: "Neue Ankauf-Anfrage",
      discord_content_wish: "Neue Wunschauto-Anfrage",
    },

    // ===== GeneralForm (NEU) =====
    generalform: {
      heading_intro: "Bei welchem Anliegen können wir behilflich sein?",
      topic_label: "Anliegen *",
      topic_placeholder: "Bitte wählen",
      topic_zoll: "Zolltechnisches Anliegen",
      topic_recht: "Rechtliches Anliegen",
      topic_sonstiges: "Sonstiges Anliegen",

      contacts_title: "Ihre Kontaktdaten",
      name_label: "Name *",
      name_ph: "Ihr Name",
      email_label: "E-Mail *",
      email_ph: "Ihre E-Mail",
      phone_label: "Telefon *",
      phone_ph: "Ihre Telefonnummer",
      location_label: "Ort/PLZ *",
      location_ph: "Ihr Standort",
      message_label: "Nachricht (optional)",
      message_ph: "Zusätzliche Informationen oder Terminwünsche...",

      privacy_prefix: "Ich stimme der",
      privacy_link: "Datenschutzerklärung",
      privacy_suffix: "zu. Meine Daten werden streng vertraulich behandelt und nicht an Dritte weitergegeben. *",

      btn_sending: "Senden…",
      btn_submit: "Anfrage senden",

      err_topic: "Bitte ein Anliegen auswählen.",
      err_name: "Bitte Ihren Namen eintragen.",
      err_email: "Bitte Ihre E-Mail eintragen.",
      err_phone: "Bitte Ihre Telefonnummer eintragen.",
      err_location: "Bitte Ihren Ort/PLZ eintragen.",
      err_privacy: "Bitte der Datenschutzerklärung zustimmen.",
      err_webhook: "Discord-WebHook fehlgeschlagen.",
      err_generic: "Es ist ein Fehler aufgetreten.",
      success_alert: "Vielen Dank! Ihre Anfrage wurde erfolgreich versendet.",

      field_topic: "Anliegen",
      field_name: "Name",
      field_phone: "Telefon",
      field_email: "E-Mail",
      field_location: "Ort/PLZ",
      field_message: "Nachricht",

      embed_title: "Neue Kontaktanfrage ({topic})",
      discord_content: "Neue Kontaktanfrage ({topic})",
    },

    // ========= Footer ==========
    footer: {
        quick_contact: "Schnellkontakt",
        brand: "AUTO M.A.H.",
        owner_label: "Inhaber:",
        owner_name: "Mohamed Ali Hussein",
        address: "Daimlerstr. 10, 79585 Steinen, DE",
        legal: "Rechtliches",
        imprint: "Impressum",
        privacy: "Datenschutzerklärung",
        tos: "Allgemeine Geschäftsbedingungen",
        info: "Infos",
        broker_service: "Vermittlungsservice",
        broker_text: "Wunschauto-Service erfolgt auf Provisionsbasis nach erfolgreicher Vermittlung.",
        vat_line: "Umsatzsteuer-Identifikationsnummer nach § 27a UStG: DE402063042",
        bottom_line: "© {year} AUTO M.A.H. - Autoimport & Verzollung • B2B • Handel • Export • Vermittlung",
    },

    // ========== Privacy =================
    privacy: {
        title: "Datenschutzerklärung",
        html: `
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

    // ======= AGB =========
    tos: {
    title: "Allgemeine Geschäftsbedingungen (AGB)",
    html: `
        <h3>1. Geltungsbereich</h3>
        <p>
        Diese Website dient ausschließlich der Kontaktaufnahme zwischen Interessenten und dem
        Fahrzeughändler <strong>AUTO M.A.H.</strong> (Inhaber: Mohamed Ali Hussein).
        Über die Website werden keine Fahrzeuge direkt verkauft und es findet keine Zahlungsabwicklung statt.
        </p>

        <h3>2. Leistungen</h3>
        <p>Der Betreiber bietet zwei Arten von Dienstleistungen an:</p>
        <ul>
        <li><strong>Fahrzeugankauf:</strong> Interessenten können ihr Fahrzeug zum Verkauf anbieten.</li>
        <li><strong>Wunschauto-Service:</strong> Der Betreiber vermittelt auf Wunsch geeignete Fahrzeuge.
            Die Vermittlung erfolgt auf Provisionsbasis nach erfolgreicher Fahrzeugvermittlung.
        </li>
        </ul>

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

    // ========= Impressum ==========
    imprint: {
        title: "Impressum",
        html: `
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



  },

  en: {
    nav_home: "Home",
    nav_services: "Services",
    nav_purchase: "Vehicle Purchase",
    nav_about: "About Us",
    nav_contact: "Contact",

    global: {
      demo_submit_info:
        "Thanks! Your request has been recorded (demo). Please connect a backend.",
    },

    hero: {
      title: "Professional Car Import from Switzerland",
      subtitle:
        "Purchase Switzerland & DE • Customs Clearance • B2B • EU Export • Mediation",
      cta: "Request Purchase Now",
      badge_fair: "Fair prices",
      badge_fast: "Fast processing",
      badge_pro: "Professional advice",
      badge_wish: "Dream car service",
    },

    services: {
      title: "Our Services",
      card1: {
        title: "Vehicle Purchase Switzerland & Germany",
        text: "I purchase high-quality vehicles directly from the Swiss and German markets - fair prices, fast processing",
      },
      card2: {
        title: "Import & Customs Clearance",
        text: "Complete customs clearance of vehicles according to German regulations - professional and legally secure",
      },
      card3: {
        title: "German Registration & TÜV Inspection",
        text: "Service and TÜV main inspection - vehicle-ready for sale",
      },
      card4: {
        title: "Trade & Distribution",
        text: "Sale of imported vehicles on the German market or export to EU countries",
      },
      card5: {
        title: "Mediation & Dream Car Service",
        text: "Looking for a specific car? I help you source your dream car - nationally and internationally",
      },
      card6: {
        title: "Custom Vehicle Search",
        text: "Targeted search for your dream car with specific equipment and budget requirements",
      },
    },

    purchase: {
      title: "Vehicle Purchase & Mediation",
      subtitle:
        "We buy your vehicle directly or help you find your dream car",
      offer_two_services: "We offer two services:",
      feature_buy: {
        title: "Vehicle purchase:",
        text: "We buy your car on fair terms",
      },
      feature_wish: {
        title: "Dream car service:",
        text: "We find your dream car according to your specifications",
      },
      feature_note:
        "Whether selling or buying – we make you a fair offer and find your dream vehicle!",

      accept_all_title: "We buy cars of all brands and models",
      accept_high_mileage: "Even with high mileage",
      accept_defects: "Vehicles with defects or damage",
      accept_accident: "Accident vehicles",
      accept_total_loss: "Economic total loss",
      accept_young_old: "Young and old vehicles",
      accept_luxury_daily: "Luxury & daily cars",
      accept_with_without_history: "With or without service history",
      fair_offer_any_condition:
        "No matter the condition – we'll make you a fair offer!",
    },

    about: {
      title: "About AUTO M.A.H.",
      owner_alt: "Owner AUTO M.A.H.",
      owner_name: "Mohamed Ali Hussein",
      owner_role: "Owner & Managing Director",
      headline:
        "Your specialist for Swiss vehicle import and custom car mediation",
      p1: "As an experienced car dealer, I focus on buying and importing vehicles from Switzerland. I buy cars directly in Switzerland, handle the complete customs clearance to Germany and then distribute the vehicles on the German market or export them to the EU.",
      p2: "With my expertise in the Swiss car market and extensive knowledge of German customs regulations, I ensure a smooth and efficient import process. I handle all necessary formalities and guarantee professional processing.",
      new_wish_service_title: "New: Dream Car Service",
      new_wish_service_text:
        "Looking for a specific car with special equipment? I will help you find your dream car – nationally and internationally. Through my network and market knowledge, I find vehicles that match your expectations.",
      note_strong:
        "Do you have questions about car import or are you looking for a specific vehicle?",
      note_text:
        "I will be happy to advise you on all topics related to vehicle import, customs clearance and individual vehicle search.",
    },

    contact: {
      title: "Feel free to contact us",
      brand: "AUTO M.A.H.",
    },

    vehicle: {
      max_5_images:
        "Please upload a maximum of 5 images. Only the first 5 will be considered.",
    },

    // ======================
    // CarForm (NEW)
    // ======================
    carform: {
      title: "Sell Your Car or Request a Dream Car",
      service_title: "Which service do you need?",
      service_purchase: "Sell a car (Purchase)",
      service_wish: "Find a car (Mediation)",

      vehicle_title: "Vehicle Details",
      brand_label: "Brand *",
      brand_placeholder: "Please select",
      brand_other_label: "Custom brand *",
      brand_other_ph: "e.g., Alfa Romeo",
      model_label: "Model *",
      model_placeholder: "Please select a model",
      model_first_choose: "Please select a brand first",
      model_other_label: "Model *",
      model_other_ph: "e.g., Giulia",
      year_label: "Year *",
      year_ph: "e.g., {example}",
      mileage_label: "Mileage *",
      mileage_ph: "e.g., 75000",

      price_title: "Expected Price",
      price_label: "Your expected price (€) *",
      price_ph: "What price do you have in mind?",

      budget_title: "Budget",
      budget_label: "Your budget (€)",
      budget_ph: "What is your maximum budget?",

      features_title: "Desired Features",
      equipment_label: "Special equipment wishes",
      equipment_ph:
        "e.g., leather seats, panoramic roof, special options...",
      color_label: "Preferred color",
      color_ph: "Vehicle color",
      fuel_label: "Fuel type",
      fuel_placeholder: "Please select",
      fuel_petrol: "Petrol",
      fuel_diesel: "Diesel",
      fuel_hybrid: "Hybrid",
      fuel_electric: "Electric",
      fuel_any: "Any",

      photos_title: "Vehicle Photos",
      photos_label: "Upload photos *",
      files_none: "No files selected",
      files_count: "{count} file(s): {names}",
      photos_hint:
        "Please upload photos of all sides, interior and any damages (max. 10 images).",
      req_title: "Required photos:",
      req_front: "Front view",
      req_rear: "Rear view",
      req_sides: "Side view (both sides)",
      req_interior: "Interior",
      req_odo: "Odometer (mileage)",
      req_damage: "Any damage or defects",

      contacts_title: "Your Contact Details",
      name_label: "Name *",
      name_ph: "Your name",
      email_label: "Email *",
      email_ph: "Your email",
      phone_label: "Phone *",
      phone_ph: "Your phone number",
      location_label: "City/ZIP *",
      location_ph: "Your location",
      message_label: "Message (optional)",
      message_ph: "Additional info or appointment requests...",
      privacy_prefix: "I agree to the",
      privacy_link: "privacy policy",
      privacy_suffix:
        ". My data will be kept strictly confidential and not shared with third parties. *",

      btn_sending: "Sending…",
      btn_submit_purchase: "Request free valuation",
      btn_submit_wish: "Request free car search",

      alert_max10:
        "Please upload a maximum of 10 images. Only the first 10 will be used.",
      err_brand: "Please select a brand.",
      err_brand_other: "Please enter the brand.",
      err_model_other: "Please enter the model.",
      err_model: "Please select a model.",
      err_year_range: "Year must be between {min} and {max}.",
      err_mileage: "Mileage is invalid.",
      err_price: "Please provide a valid expected price.",
      err_images_required: "Please upload at least one vehicle photo.",
      err_contacts: "Please fill out all contact fields.",
      err_privacy: "Please accept the privacy policy.",
      err_webhook: "Discord webhook failed.",
      err_generic: "An error occurred.",
      success_alert: "Thank you! Your request has been sent successfully.",
      warn_only_first10:
        "Only the first 10 images will be sent to Discord.",
      brand_other_fallback: "Other",

      embed: {
        title_purchase: "Purchase Request",
        title_wish: "Dream Car Request",
        service_name: "Service",
      },
      service_purchase_full: "Purchase (sell a car)",
      service_wish_full: "Mediation (dream car)",

      field_brand: "Brand",
      field_model: "Model",
      field_year: "Year",
      field_mileage: "Mileage",
      field_price: "Expected price (€)",
      field_budget: "Budget (€)",
      field_color: "Color",
      field_fuel: "Fuel",
      field_equipment: "Equipment",
      field_name: "Name",
      field_phone: "Phone",
      field_email: "Email",
      field_location: "City/ZIP",
      field_message: "Message",

      discord_content_purchase: "New purchase request",
      discord_content_wish: "New dream car request",
    },

    // ===== GeneralForm (NEW) =====
    generalform: {
      heading_intro: "What can we help you with?",
      topic_label: "Topic *",
      topic_placeholder: "Please select",
      topic_zoll: "Customs-related inquiry",
      topic_recht: "Legal inquiry",
      topic_sonstiges: "Other inquiry",

      contacts_title: "Your Contact Details",
      name_label: "Name *",
      name_ph: "Your name",
      email_label: "Email *",
      email_ph: "Your email",
      phone_label: "Phone *",
      phone_ph: "Your phone number",
      location_label: "City/ZIP *",
      location_ph: "Your location",
      message_label: "Message (optional)",
      message_ph: "Additional information or appointment requests...",

      privacy_prefix: "I agree to the",
      privacy_link: "privacy policy",
      privacy_suffix: ". My data will be kept strictly confidential and not shared with third parties. *",

      btn_sending: "Sending…",
      btn_submit: "Send request",

      err_topic: "Please select a topic.",
      err_name: "Please enter your name.",
      err_email: "Please enter your email.",
      err_phone: "Please enter your phone number.",
      err_location: "Please enter your city/ZIP.",
      err_privacy: "Please accept the privacy policy.",
      err_webhook: "Discord webhook failed.",
      err_generic: "An error occurred.",
      success_alert: "Thank you! Your request has been sent successfully.",

      field_topic: "Topic",
      field_name: "Name",
      field_phone: "Phone",
      field_email: "Email",
      field_location: "City/ZIP",
      field_message: "Message",

      embed_title: "New contact request ({topic})",
      discord_content: "New contact request ({topic})",
    },

    // ========= Footer ==========
    footer: {
        quick_contact: "Quick contact",
        brand: "AUTO M.A.H.",
        owner_label: "Owner:",
        owner_name: "Mohamed Ali Hussein",
        address: "Daimlerstr. 10, 79585 Steinen, DE",
        legal: "Legal",
        imprint: "Imprint",
        privacy: "Privacy Policy",
        tos: "Terms & Conditions",
        info: "Info",
        broker_service: "Brokerage service",
        broker_text: "Dream car service is commission-based upon successful mediation.",
        vat_line: "VAT ID (per § 27a UStG): DE402063042",
        bottom_line: "© {year} AUTO M.A.H. – Car import & customs • B2B • Trade • Export • Brokerage",
    },

    // ========== Privacy =========
    privacy: {
        title: "Privacy Policy",
        html: `
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

    // ======== AGB ========

    tos: {
        title: "Terms and Conditions",
        html: `
            <h3>1. Scope</h3>
            <p>
            This website is operated solely for communication between interested parties and the car dealer
            <strong>AUTO M.A.H.</strong> (Owner: Mohamed Ali Hussein).
            No vehicles are sold directly through this website, and no payment processing takes place.
            </p>

            <h3>2. Services</h3>
            <p>The operator offers two types of services:</p>
            <ul>
            <li><strong>Vehicle Purchase:</strong> Customers can offer their vehicle for sale.</li>
            <li><strong>Car Search Service:</strong> The operator helps customers find a desired vehicle.
                This service is commission-based and only payable after a successful vehicle mediation.
            </li>
            </ul>

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

    // =========== Impressum ===========

    imprint: {
        title: "Legal Notice (Imprint)",
        html: `
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




  },

  fr: {
    nav_home: "Accueil",
    nav_services: "Services",
    nav_purchase: "Achat Véhicule",
    nav_about: "À Propos",
    nav_contact: "Contact",

    global: {
      demo_submit_info:
        "Merci ! Votre demande a été enregistrée (démo). Veuillez connecter un backend.",
    },

    hero: {
      title: "Importation professionnelle de voitures depuis la Suisse",
      subtitle:
        "Achat Suisse & DE • Dédouanement • B2B • Export UE • Médiation",
      cta: "Demander un achat maintenant",
      badge_fair: "Prix équitables",
      badge_fast: "Traitement rapide",
      badge_pro: "Conseil professionnel",
      badge_wish: "Service voiture de rêve",
    },

    services: {
      title: "Nos services",
      card1: {
        title: "Achat de véhicules Suisse & Allemagne",
        text: "J'achète des véhicules de haute qualité directement sur les marchés suisse et allemand - prix équitables, traitement rapide",
      },
      card2: {
        title: "Import & Dédouanement",
        text: "Dédouanement complet des véhicules selon les réglementations allemandes - professionnel et juridiquement sécurisé",
      },
      card3: {
        title: "Immatriculation allemande & Contrôle TÜV",
        text: "Service et contrôle technique principal TÜV - véhicule prêt à la vente",
      },
      card4: {
        title: "Commerce & Distribution",
        text: "Vente de véhicules importés sur le marché allemand ou export vers les pays de l'UE",
      },
      card5: {
        title: "Médiation & Service voiture de rêve",
        text: "Vous cherchez un véhicule spécifique ? Je vous aide à trouver votre voiture idéale - nationalement et internationalement",
      },
      card6: {
        title: "Recherche de véhicule sur mesure",
        text: "Recherche ciblée de votre voiture idéale avec des exigences spécifiques d'équipement et de budget",
      },
    },

    purchase: {
      title: "Achat de véhicule & Médiation",
      subtitle:
        "Nous achetons votre véhicule directement ou vous aidons à trouver votre voiture idéale",
      offer_two_services: "Nous proposons deux services :",
      feature_buy: {
        title: "Achat de véhicule :",
        text: "Nous achetons votre voiture à des conditions équitables",
      },
      feature_wish: {
        title: "Service voiture de rêve :",
        text: "Nous trouvons votre voiture idéale selon vos spécifications",
      },
      feature_note:
        "Que ce soit pour vendre ou acheter – nous vous faisons une offre équitable et trouvons votre véhicule idéal !",

      accept_all_title:
        "Nous achetons des occasions de toutes marques et modèles",
      accept_high_mileage: "Même avec un kilométrage élevé",
      accept_defects: "Véhicules avec défauts ou dommages",
      accept_accident: "Véhicules accidentés",
      accept_total_loss: "Perte totale économique",
      accept_young_old: "Véhicules jeunes et anciens",
      accept_luxury_daily: "Véhicules de luxe & du quotidien",
      accept_with_without_history:
        "Avec ou sans historique d'entretien",
      fair_offer_any_condition:
        "Quel que soit l'état – nous vous faisons une offre équitable !",
    },

    about: {
      title: "À propos d'AUTO M.A.H.",
      owner_alt: "Propriétaire AUTO M.A.H.",
      owner_name: "Mohamed Ali Hussein",
      owner_role: "Propriétaire & Directeur Général",
      headline:
        "Votre spécialiste de l'importation de véhicules suisses et de la médiation automobile sur mesure",
      p1: "En tant que marchand automobile expérimenté, je me concentre sur l'achat et l'importation de véhicules de Suisse. J'achète des voitures directement en Suisse, effectue le dédouanement complet vers l'Allemagne puis les distribue sur le marché allemand ou les exporte vers l'UE.",
      p2: "Avec mon expertise du marché automobile suisse et une connaissance approfondie des réglementations douanières allemandes, j'assure un processus d'importation fluide et efficace. Je gère toutes les formalités nécessaires et garantis un traitement professionnel.",
      new_wish_service_title: "Nouveau : Service voiture de rêve",
      new_wish_service_text:
        "Vous recherchez un véhicule spécifique avec un équipement particulier ? Je vous aide à trouver votre voiture idéale – au niveau national et international. Grâce à mon réseau et à ma connaissance du marché, je trouve des véhicules qui correspondent à vos attentes.",
      note_strong:
        "Vous avez des questions sur l'importation de voitures ou recherchez un véhicule spécifique ?",
      note_text:
        "Je vous conseille volontiers sur tous les sujets liés à l'importation de véhicules, au dédouanement et à la recherche automobile individuelle.",
    },

    contact: {
      title: "Contactez-nous volontiers",
      brand: "AUTO M.A.H.",
    },

    vehicle: {
      max_5_images:
        "Veuillez télécharger au maximum 5 images. Seules les 5 premières seront prises en compte.",
    },

    // ======================
    // CarForm (NOUVEAU)
    // ======================
    carform: {
      title: "Vendre un véhicule ou demander une voiture souhaitée",
      service_title: "Quel service désirez-vous ?",
      service_purchase: "Vendre un véhicule (Achat)",
      service_wish: "Trouver un véhicule (Médiation)",

      vehicle_title: "Données du véhicule",
      brand_label: "Marque *",
      brand_placeholder: "Veuillez choisir",
      brand_other_label: "Marque personnalisée *",
      brand_other_ph: "ex. Alfa Romeo",
      model_label: "Modèle *",
      model_placeholder: "Veuillez choisir un modèle",
      model_first_choose: "Veuillez d’abord choisir une marque",
      model_other_label: "Modèle *",
      model_other_ph: "ex. Giulia",
      year_label: "Année *",
      year_ph: "ex. {example}",
      mileage_label: "Kilométrage *",
      mileage_ph: "ex. 75000",

      price_title: "Prix souhaité",
      price_label: "Votre prix souhaité (€) *",
      price_ph: "Quel prix avez-vous en tête ?",

      budget_title: "Budget",
      budget_label: "Votre budget (€)",
      budget_ph: "Quel est votre budget maximum ?",

      features_title: "Équipements souhaités",
      equipment_label: "Souhaits d’équipement particuliers",
      equipment_ph:
        "ex. cuir, toit panoramique, options spéciales...",
      color_label: "Couleur préférée",
      color_ph: "Couleur du véhicule",
      fuel_label: "Type de carburant",
      fuel_placeholder: "Veuillez choisir",
      fuel_petrol: "Essence",
      fuel_diesel: "Diesel",
      fuel_hybrid: "Hybride",
      fuel_electric: "Électrique",
      fuel_any: "Peu importe",

      photos_title: "Photos du véhicule",
      photos_label: "Téléverser des photos *",
      files_none: "Aucun fichier sélectionné",
      files_count: "{count} fichier(s) : {names}",
      photos_hint:
        "Veuillez téléverser des photos de tous les côtés, de l’intérieur et d’éventuels dommages (10 images max.).",
      req_title: "Photos requises :",
      req_front: "Vue avant",
      req_rear: "Vue arrière",
      req_sides: "Vue latérale (les deux côtés)",
      req_interior: "Intérieur",
      req_odo: "Compteur (kilométrage)",
      req_damage: "Éventuels dommages ou défauts",

      contacts_title: "Vos coordonnées",
      name_label: "Nom *",
      name_ph: "Votre nom",
      email_label: "E-mail *",
      email_ph: "Votre e-mail",
      phone_label: "Téléphone *",
      phone_ph: "Votre numéro de téléphone",
      location_label: "Ville/Code postal *",
      location_ph: "Votre localité",
      message_label: "Message (facultatif)",
      message_ph:
        "Informations supplémentaires ou demande de rendez-vous...",
      privacy_prefix: "J’accepte la",
      privacy_link: "politique de confidentialité",
      privacy_suffix:
        ". Mes données seront traitées de manière strictement confidentielle et ne seront pas transmises à des tiers. *",

      btn_sending: "Envoi…",
      btn_submit_purchase: "Demander une estimation gratuite",
      btn_submit_wish: "Demander une recherche de véhicule",

      alert_max10:
        "Veuillez téléverser au maximum 10 images. Seules les 10 premières seront utilisées.",
      err_brand: "Veuillez choisir une marque.",
      err_brand_other: "Veuillez saisir la marque.",
      err_model_other: "Veuillez saisir le modèle.",
      err_model: "Veuillez choisir un modèle.",
      err_year_range:
        "L’année doit être comprise entre {min} et {max}.",
      err_mileage: "Le kilométrage est invalide.",
      err_price:
        "Veuillez indiquer un prix souhaité valide.",
      err_images_required:
        "Veuillez téléverser au moins une photo du véhicule.",
      err_contacts:
        "Veuillez remplir toutes les coordonnées.",
      err_privacy:
        "Veuillez accepter la politique de confidentialité.",
      err_webhook: "Échec du webhook Discord.",
      err_generic: "Une erreur s’est produite.",
      success_alert:
        "Merci ! Votre demande a été envoyée avec succès.",
      warn_only_first10:
        "Seules les 10 premières images seront envoyées à Discord.",
      brand_other_fallback: "Autre",

      embed: {
        title_purchase: "Demande d’achat",
        title_wish: "Demande de voiture souhaitée",
        service_name: "Service",
      },
      service_purchase_full: "Achat (vendre un véhicule)",
      service_wish_full: "Médiation (voiture souhaitée)",

      field_brand: "Marque",
      field_model: "Modèle",
      field_year: "Année",
      field_mileage: "Kilométrage",
      field_price: "Prix souhaité (€)",
      field_budget: "Budget (€)",
      field_color: "Couleur",
      field_fuel: "Carburant",
      field_equipment: "Équipement",
      field_name: "Nom",
      field_phone: "Téléphone",
      field_email: "E-mail",
      field_location: "Ville/CP",
      field_message: "Message",

      discord_content_purchase: "Nouvelle demande d’achat",
      discord_content_wish:
        "Nouvelle demande de voiture souhaitée",
    },

    // ===== GeneralForm (NOUVEAU) =====
    generalform: {
      heading_intro: "Quel sujet pouvons-nous vous aider à traiter ?",
      topic_label: "Sujet *",
      topic_placeholder: "Veuillez choisir",
      topic_zoll: "Demande liée aux douanes",
      topic_recht: "Demande juridique",
      topic_sonstiges: "Autre demande",

      contacts_title: "Vos coordonnées",
      name_label: "Nom *",
      name_ph: "Votre nom",
      email_label: "E-mail *",
      email_ph: "Votre e-mail",
      phone_label: "Téléphone *",
      phone_ph: "Votre numéro de téléphone",
      location_label: "Ville/CP *",
      location_ph: "Votre localité",
      message_label: "Message (facultatif)",
      message_ph: "Informations supplémentaires ou demandes de rendez-vous...",

      privacy_prefix: "J’accepte la",
      privacy_link: "politique de confidentialité",
      privacy_suffix: ". Mes données seront traitées de manière strictement confidentielle et ne seront pas transmises à des tiers. *",

      btn_sending: "Envoi…",
      btn_submit: "Envoyer la demande",

      err_topic: "Veuillez choisir un sujet.",
      err_name: "Veuillez indiquer votre nom.",
      err_email: "Veuillez indiquer votre e-mail.",
      err_phone: "Veuillez indiquer votre numéro de téléphone.",
      err_location: "Veuillez indiquer votre ville/CP.",
      err_privacy: "Veuillez accepter la politique de confidentialité.",
      err_webhook: "Échec du webhook Discord.",
      err_generic: "Une erreur s’est produite.",
      success_alert: "Merci ! Votre demande a été envoyée avec succès.",

      field_topic: "Sujet",
      field_name: "Nom",
      field_phone: "Téléphone",
      field_email: "E-mail",
      field_location: "Ville/CP",
      field_message: "Message",

      embed_title: "Nouvelle demande de contact ({topic})",
      discord_content: "Nouvelle demande de contact ({topic})",
    },

        // ========= Footer ==========
    footer: {
        quick_contact: "Contact rapide",
        brand: "AUTO M.A.H.",
        owner_label: "Propriétaire :",
        owner_name: "Mohamed Ali Hussein",
        address: "Daimlerstr. 10, 79585 Steinen, DE",
        legal: "Mentions légales",
        imprint: "Mentions légales",
        privacy: "Politique de confidentialité",
        tos: "Conditions générales",
        info: "Infos",
        broker_service: "Service de médiation",
        broker_text: "Le service voiture de rêve est basé sur une commission après médiation réussie.",
        vat_line: "N° de TVA (conformément au § 27a UStG) : DE402063042",
        bottom_line: "© {year} AUTO M.A.H. – Import & dédouanement automobiles • B2B • Commerce • Export • Médiation",
    },

    // ====== Privacy ======
    privacy: {
        title: "Politique de Confidentialité",
        html: `
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

    // ======== AGB =========
    tos: {
        title: "Conditions Générales (CGV)",
        html: `
            <h3>1. Champ d’application</h3>
            <p>
            Ce site internet sert uniquement à la mise en relation entre les clients intéressés et le
            concessionnaire automobile <strong>AUTO M.A.H.</strong> (Propriétaire : Mohamed Ali Hussein).
            Aucun véhicule n’est vendu directement sur le site et aucun paiement n’est effectué en ligne.
            </p>

            <h3>2. Prestations</h3>
            <p>Le prestataire propose deux types de services :</p>
            <ul>
            <li><strong>Achat de véhicules :</strong> les clients peuvent proposer leur véhicule à la vente.</li>
            <li><strong>Service "voiture souhaitée" :</strong> le prestataire aide à trouver un véhicule spécifique.
                Ce service est basé sur une commission due uniquement après une médiation réussie.
            </li>
            </ul>

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

    // ========== Impressum ==========

    imprint: {
        title: "Mentions légales",
        html: `
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



  },
};

export default translations;
