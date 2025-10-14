// src/sites/Imprint.jsx
import React from "react";
import { useI18n } from "../I18nProvider";
import "./styles.css";

export default function Imprint() {
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
      <section id="imprint" className="services">
        <div className="container">
          <h2>{t("imprint.title")}</h2>

          {/* Sprachumschalter */}
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

            <img
              src="/images/logo.png"
              alt="AUTO M.A.H. Logo"
              className="logo-image"
              style={{ height: "120px", width: "auto" , paddingBottom: "1rem"}}
            />

          <div
            className="privacy-content"
            dangerouslySetInnerHTML={{ __html: t("imprint.html") }}
          />
        </div>
      </section>
            <br></br><br></br><br></br>
    </>
  );
}
