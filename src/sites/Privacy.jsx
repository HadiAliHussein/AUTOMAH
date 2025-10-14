// src/sites/Privacy.jsx
import React from "react";
import { useI18n } from "../I18nProvider";
import "./styles.css";

export default function Privacy() {
  const { t, lang, setLang } = useI18n();

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
        <br></br><br></br><br></br>
      <section id="services" className="services">
        <div className="container">
          <h2>{t("privacy.title")}</h2>

          {/* Sprachumschalter – nutzt denselben Zustand aus I18nProvider */}
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
            // Wir rendern den von dir gepflegten HTML-Block aus translations.js
            dangerouslySetInnerHTML={{ __html: t("privacy.html") }}
          />
        </div>
      </section>
    </>
  );
}
