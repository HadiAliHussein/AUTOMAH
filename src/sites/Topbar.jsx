// src/sites/Topbar.jsx
import React, { useEffect, useMemo, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useI18n } from "../I18nProvider"; // ⬅️ aus deinem Provider holen
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

export default function Topbar() {
  const { lang, setLang, t } = useI18n();        // ⬅️ kommt aus dem globalen Provider
  const [menuOpen, setMenuOpen] = useState(false);
  const yearMax = useMemo(() => new Date().getFullYear(), []);
  const active = useActiveSection(["home", "services", "vehicle-purchase", "about", "contact"]);

  const navigate = useNavigate();
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  // Body scroll lock für Mobile-Menü
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // Auto-close on desktop resize
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 900) setMenuOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
      />

      <nav className="navbar">
        <div className="nav-container">
          <button
            type="button"
            onClick={() => navigate("/")}
            style={{
              all: "unset",
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              cursor: "pointer",
              color: "inherit",
            }}
          >
            <img
              src="/images/logo.png"
              alt="AUTO M.A.H. Logo"
              className="logo-image"
              style={{ height: "36px", width: "auto" }}
            />
            <h1
              style={{
                fontSize: "1.4rem",
                fontWeight: "bold",
                lineHeight: "1",
                margin: 0,
                display: "flex",
                alignItems: "center",
                color: "#1a3a5f",
              }}
            >
              AUTO M.A.H.
            </h1>
          </button>

          <button
            className="mobile-menu-toggle"
            id="mobileMenuToggle"
            aria-label="Menü"
            aria-expanded={menuOpen}
            aria-controls="navMenu"
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
          >
            <i className="fas fa-bars" aria-hidden="true"></i>
          </button>

          <ul className={`nav-menu ${menuOpen ? "active" : ""}`} id="navMenu" role="menu">
            {/* Nur Ankerlinks auf der Startseite */}
            {isHomePage && (
              <>
                <li role="none">
                  <a href="#home" className={active === "home" ? "active" : ""} onClick={closeMenu}>
                    {t("nav_home")}
                  </a>
                </li>
                <li role="none">
                  <a
                    href="#services"
                    className={active === "services" ? "active" : ""}
                    onClick={closeMenu}
                  >
                    {t("nav_services")}
                  </a>
                </li>
                <li role="none">
                  <a
                    href="#vehicle-purchase"
                    className={active === "vehicle-purchase" ? "active" : ""}
                    onClick={closeMenu}
                  >
                    {t("nav_purchase")}
                  </a>
                </li>
                <li role="none">
                  <a href="#about" className={active === "about" ? "active" : ""} onClick={closeMenu}>
                    {t("nav_about")}
                  </a>
                </li>
                <li role="none">
                  <a
                    href="#contact"
                    className={active === "contact" ? "active" : ""}
                    onClick={closeMenu}
                  >
                    {t("nav_contact")}
                  </a>
                </li>
              </>
            )}

            {/* Sprachumschalter – immer sichtbar */}
            <li className="language-container" role="none">
              <div className="language-switcher" role="group" aria-label="Sprache">
                {["de", "en", "fr"].map((code) => (
                  <button
                    key={code}
                    className={lang === code ? "active" : ""}
                    onClick={() => {
                      setLang(code);   // ⬅️ upd. globalen Zustand -> ganze App re-rendert ohne Reload
                      setMenuOpen(false);
                    }}
                    type="button"
                  >
                    {code.toUpperCase()}
                  </button>
                ))}
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
