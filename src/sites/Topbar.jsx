import React, { useEffect, useMemo, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./styles.css";

const translations = {
  de: {
    nav_home: "Start",
    nav_services: "Leistungen",
    nav_purchase: "Fahrzeug Ankauf",
    nav_about: "Über uns",
    nav_contact: "Kontakt",
  },
  en: {
    nav_home: "Home",
    nav_services: "Services",
    nav_purchase: "Vehicle Purchase",
    nav_about: "About Us",
    nav_contact: "Contact",
  },
  fr: {
    nav_home: "Accueil",
    nav_services: "Services",
    nav_purchase: "Achat Véhicule",
    nav_about: "À Propos",
    nav_contact: "Contact",
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

export default function Topbar() {
  const [lang, setLang] = useState(() => localStorage.getItem("preferredLanguage") || "de");
  const [menuOpen, setMenuOpen] = useState(false);
  const yearMax = useMemo(() => new Date().getFullYear(), []);
  const active = useActiveSection(["home", "services", "vehicle-purchase", "about", "contact"]);

  const t = (key) => translations[lang]?.[key] ?? translations.de[key] ?? key;

  const navigate = useNavigate();
  const location = useLocation(); // <- hier kommt die Magie

  useEffect(() => {
    localStorage.setItem("preferredLanguage", lang);
  }, [lang]);

  // Body scroll lock
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

  const isHomePage = location.pathname === "/"; // ✅ prüft, ob man sich auf der Startseite befindet

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
            {/* ✅ Nur anzeigen, wenn man sich auf der Startseite "/" befindet */}
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

            {/* Sprachumschalter bleibt immer sichtbar */}
            <li className="language-container" role="none">
              <div className="language-switcher" role="group" aria-label="Sprache">
                {["de", "en", "fr"].map((code) => (
                  <button
                    key={code}
                    className={lang === code ? "active" : ""}
                    onClick={() => {
                      setLang(code);
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
