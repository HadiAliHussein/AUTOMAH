// src/sites/AutoMAH.jsx
import React, { useMemo, useRef, useState, useEffect } from "react";
import { useI18n } from "../I18nProvider"; // ⬅️ globaler i18n-Provider
import CarForm from "./CarForm";
import GeneralForm from "./GeneralForm";
import "./styles.css";

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
  const { t } = useI18n();
  const [menuOpen, setMenuOpen] = useState(false); // (falls du es hier noch brauchst)
  const [serviceType, setServiceType] = useState("purchase");
  const [filesInfo, setFilesInfo] = useState({ count: 0, names: [] });
  const yearMax = useMemo(() => new Date().getFullYear(), []);
  const active = useActiveSection(["home", "services", "vehicle-purchase", "about", "contact"]);
  const imagesInputRef = useRef(null);

  const onSubmit = (e) => {
    e.preventDefault();
    alert(t("global.demo_submit_info")); // Demo-Text
  };

  const onFilesChange = (e) => {
    const files = Array.from(e.target.files || []);
    const limited = files.slice(0, 5);
    if (imagesInputRef.current && files.length > 5) {
      alert(t("vehicle.max_5_images"));
    }
    setFilesInfo({ count: limited.length, names: limited.map((f) => f.name) });
  };

  return (
    <>
      {/* CDN, falls nicht in index.html eingebunden */}
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
            <h1>{t("hero.title")}</h1>
            <p>{t("hero.subtitle")}</p>
            <a href="#vehicle-purchase" className="btn">
              {t("hero.cta")}
            </a>

            <div className="hero-badges">
              <div className="badge">
                <i className="fas fa-check-circle"></i> {t("hero.badge_fair")}
              </div>
              <div className="badge">
                <i className="fas fa-check-circle"></i> {t("hero.badge_fast")}
              </div>
              <div className="badge">
                <i className="fas fa-check-circle"></i> {t("hero.badge_pro")}
              </div>
              <div className="badge">
                <i className="fas fa-check-circle"></i> {t("hero.badge_wish")}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="services">
        <div className="container">
          <h2>{t("services.title")}</h2>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">
                <i className="fas fa-car"></i>
              </div>
              <h3>{t("services.card1.title")}</h3>
              <p>{t("services.card1.text")}</p>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <i className="fas fa-passport"></i>
              </div>
              <h3>{t("services.card2.title")}</h3>
              <p>{t("services.card2.text")}</p>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <i className="fas fa-file-alt"></i>
              </div>
              <h3>{t("services.card3.title")}</h3>
              <p>{t("services.card3.text")}</p>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <i className="fas fa-handshake"></i>
              </div>
              <h3>{t("services.card4.title")}</h3>
              <p>{t("services.card4.text")}</p>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <i className="fas fa-car-side"></i>
              </div>
              <h3>{t("services.card5.title")}</h3>
              <p>{t("services.card5.text")}</p>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <i className="fas fa-search"></i>
              </div>
              <h3>{t("services.card6.title")}</h3>
              <p>{t("services.card6.text")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Fahrzeug-Ankauf / Wunschauto-Service */}
      <section id="vehicle-purchase" className="vehicle-purchase">
        <div className="container">
          <h2>{t("purchase.title")}</h2>

          <div className="purchase-intro">
            <p className="section-subtitle">
              {t("purchase.subtitle")}
            </p>
            <div className="purchase-features">
              <h3>{t("purchase.offer_two_services")}</h3>
              <div className="features-grid">
                <div className="feature">
                  <span className="feature-icon">
                    <i className="fas fa-check"></i>
                  </span>
                  <span>
                    <strong>{t("purchase.feature_buy.title")}</strong>{" "}
                    {t("purchase.feature_buy.text")}
                  </span>
                </div>
                <div className="feature">
                  <span className="feature-icon">
                    <i className="fas fa-check"></i>
                  </span>
                  <span>
                    <strong>{t("purchase.feature_wish.title")}</strong>{" "}
                    {t("purchase.feature_wish.text")}
                  </span>
                </div>
              </div>
              <p className="feature-note">
                <strong>{t("purchase.feature_note")}</strong>
              </p>
            </div>
          </div>

          <h2>{t("purchase.accept_all_title")}</h2>

          <div className="purchase-intro">
            <div className="purchase-features">
              <div className="features-grid">
                {[
                  t("purchase.accept_high_mileage"),
                  t("purchase.accept_defects"),
                  t("purchase.accept_accident"),
                  t("purchase.accept_total_loss"),
                  t("purchase.accept_young_old"),
                  t("purchase.accept_luxury_daily"),
                  t("purchase.accept_with_without_history"),
                  //t("purchase.accept_luxury_daily"), // du hattest diesen Punkt doppelt; bewusst gelassen
                ].map((txt, idx) => (
                  <div className="feature" key={idx}>
                    <span className="feature-icon">
                      <i className="fas fa-check"></i>
                    </span>
                    <span>
                      <strong>{txt}</strong>
                    </span>
                  </div>
                ))}
              </div>
              <p className="feature-note">
                <strong>{t("purchase.fair_offer_any_condition")}</strong>
              </p>
            </div>
          </div>

          <CarForm />
        </div>
      </section>

      {/* Über uns */}
      <section id="about" className="about">
        <div className="container">
          <h2>{t("about.title")}</h2>
          <div className="about-content">
            <div className="about-image">
              <img src="images/profil-bild.jpg" alt={t("about.owner_alt")} />
              <div className="owner-name">
                <h3>{t("about.owner_name")}</h3>
                <p>{t("about.owner_role")}</p>
              </div>
            </div>
            <div className="about-text">
              <h3>{t("about.headline")}</h3>
              <p>{t("about.p1")}</p>
              <p>{t("about.p2")}</p>
              <p>
                <strong>{t("about.new_wish_service_title")}</strong>
                <br />
                {t("about.new_wish_service_text")}
              </p>

              <div className="business-note">
                <p>
                  <strong>{t("about.note_strong")}</strong>{" "}
                  {t("about.note_text")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Kontakt */}
      <section id="contact" className="contact">
        <div className="container">
          <h2>{t("contact.title")}</h2>
          <div className="contact-content">
            <div className="contact-info">
              <h3>{t("contact.brand")}</h3>
              <p>
                <i className="fas fa-phone"></i>{" "}
                <a
                  href="tel:+4917696084998"
                  style={{ color: "#fff", textDecoration: "none" }}
                >
                  +49 176 96084998
                </a>
              </p>

              <p>
                <i className="fas fa-envelope"></i>{" "}
                <a
                  href="mailto:auto.mah@hotmail.com"
                  style={{ color: "#fff", textDecoration: "none" }}
                >
                  auto.mah@hotmail.com
                </a>
              </p>

              <p>
                <i className="fas fa-map-marker-alt"></i> Daimlerstr. 10, 79585 Steinen, DE
              </p>
            </div>

            {/* Rechte Spalte: Kontaktformular */}
            <GeneralForm />
          </div>
        </div>
      </section>
    </>
  );
}
