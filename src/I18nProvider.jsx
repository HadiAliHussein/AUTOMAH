// src/i18n/I18nProvider.jsx
import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
import translations from "./translations";

const I18nContext = createContext(null);

export function I18nProvider({ children }) {
  // Startsprache: localStorage -> Browser -> 'de'
  const initial = (() => {
    const saved = localStorage.getItem("lang");
    if (saved && translations[saved]) return saved;
    const browser = (navigator.language || "de").slice(0, 2).toLowerCase();
    return translations[browser] ? browser : "de";
  })();

  const [lang, setLang] = useState(initial);

  useEffect(() => {
    localStorage.setItem("lang", lang);
    // (optional) <html lang="..."> setzen
    document.documentElement.lang = lang;
  }, [lang]);

  const t = useMemo(() => {
    const dict = translations[lang] || {};
    return (key, fallback = key) => {
      // erlaubt verschachtelte Keys "section.key"
      const val = key.split(".").reduce((acc, k) => (acc && acc[k] != null ? acc[k] : undefined), dict);
      return (val ?? fallback);
    };
  }, [lang]);

  const value = useMemo(() => ({ lang, setLang, t }), [lang, t]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}
