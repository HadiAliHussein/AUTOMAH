import React from "react";
import { useNavigate } from "react-router-dom";
import { useI18n } from "../I18nProvider";
import "./styles.css";

export default function Footer() {
  const { t } = useI18n();
  const tr = (key, vars) => {
    let s = t(key);
    if (vars) {
      Object.keys(vars).forEach((k) => {
        s = s.replace(new RegExp(`\\{${k}\\}`, "g"), String(vars[k]));
      });
    }
    return s;
  };

  const navigate = useNavigate();

  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
      />

      <footer className="footer">
        <div className="container">
          <div className="footer-links">
            {/* Quick contact */}
            <div className="footer-section">
              <h3>{t("footer.quick_contact")}</h3>
              <div className="footer-content">
                <p>
                  <strong>{t("footer.brand")}</strong>
                </p>
                <p>
                  {t("footer.owner_label")} {t("footer.owner_name")}
                </p>
                <p>
                  <i className="fas fa-map-marker-alt"></i> {t("footer.address")}
                </p>
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
                  <small>{t("footer.vat_line")}</small>
                </p>
              </div>
            </div>

            {/* Legal */}
            <div className="footer-section">
              <h3>{t("footer.legal")}</h3>
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
                  {t("footer.imprint")}
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
                  {t("footer.privacy")}
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
                  {t("footer.tos")}
                </button>
              </div>
            </div>

            {/* Info */}
            <div className="footer-section">
              <h3>{t("footer.info")}</h3>
              <div className="footer-content">
                <h4>{t("footer.broker_service")}</h4>
                <p>{t("footer.broker_text")}</p>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <p>
              {tr("footer.bottom_line", {
                year: new Date().getFullYear(),
              })}
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
