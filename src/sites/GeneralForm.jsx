import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ContactForm() {
  // ✅ Verschiedene Webhooks für jedes Anliegen
  const WEBHOOKS = {
    zoll: "https://discord.com/api/webhooks/1427743947056480326/F3OIbSlT36laY_sIL1a78jRgHcp0ifhYlv1_wqAgfL8xdVvMJbavPaNUm2d03f1gr6rS",
    recht: "https://discord.com/api/webhooks/1427745055820742697/qzIYF_iDQVsr5ztsqTLgHtRAzszVGaICa9_tR16fgt74pLCXr4E1pZL_eMQe03neynNm",
    sonstiges: "https://discord.com/api/webhooks/1427744900690214922/1_G3sP3dZA3iipv96G72G71r30XTiKKHdu6JMhnGBrG-67l3cnluVYOFFKBtsm1Pi2a5",
  };

  const [formData, setFormData] = useState({
    topic: "",
    name: "",
    email: "",
    phone: "",
    location: "",
    message: "",
    privacy: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  function handleChange(e) {
    const { name, type, value, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  function validate() {
    if (!formData.topic) return "Bitte ein Anliegen auswählen.";
    if (!formData.name?.trim()) return "Bitte Ihren Namen eintragen.";
    if (!formData.email?.trim()) return "Bitte Ihre E-Mail eintragen.";
    if (!formData.phone?.trim()) return "Bitte Ihre Telefonnummer eintragen.";
    if (!formData.location?.trim()) return "Bitte Ihren Ort/PLZ eintragen.";
    if (!formData.privacy) return "Bitte der Datenschutzerklärung zustimmen.";
    return null;
  }

  function buildDiscordEmbed() {
    const topicLabel =
      formData.topic === "zoll"
        ? "Zolltechnisches Anliegen"
        : formData.topic === "recht"
        ? "Rechtliches Anliegen"
        : "Sonstiges Anliegen";

    const fields = [
      { name: "Anliegen", value: topicLabel, inline: false },
      { name: "Name", value: formData.name || "-", inline: true },
      { name: "Telefon", value: formData.phone || "-", inline: true },
      { name: "E-Mail", value: formData.email || "-", inline: true },
      { name: "Ort/PLZ", value: formData.location || "-", inline: true },
    ];

    if (formData.message?.trim()) {
      fields.push({ name: "Nachricht", value: formData.message.trim(), inline: false });
    }

    return {
      title: `Neue Kontaktanfrage (${topicLabel})`,
      color: 0x1a3a5f,
      fields,
      timestamp: new Date().toISOString(),
    };
  }

  // ✅ Sende an den richtigen Webhook
  async function postToDiscord(embed, topic) {
    const webhookUrl = WEBHOOKS[topic];
    if (!webhookUrl) throw new Error("Kein Webhook für dieses Anliegen definiert.");

    const fd = new FormData();
    const payload = {
      username: "AUTO M.A.H. Kontaktformular",
      content: `Neue Kontaktanfrage (${embed.fields[0].value})`,
      embeds: [embed],
    };
    fd.append("payload_json", JSON.stringify(payload));

    const res = await fetch(webhookUrl, { method: "POST", body: fd });
    if (!res.ok) {
      const text = await res.text().catch(() => "");
      throw new Error(text || "Discord-WebHook fehlgeschlagen.");
    }
  }

  async function onSubmit(e) {
    e.preventDefault();
    const formEl = e.currentTarget;     // <— vorm await merken

    const error = validate();
    if (error) {
      alert(error);
      return;
    }

    setIsSubmitting(true);
    try {
      const embed = buildDiscordEmbed();
      await postToDiscord(embed, formData.topic);

      alert("Vielen Dank! Ihre Anfrage wurde erfolgreich versendet.");

      // sicheres Reset nach await
      formEl.reset();                    // <— nicht e.currentTarget
      setFormData({
        topic: "",
        name: "",
        email: "",
        phone: "",
        location: "",
        message: "",
        privacy: false,
      });
    } catch (err) {
      console.error(err);
      alert(err.message || "Es ist ein Fehler aufgetreten.");
    } finally {
      setIsSubmitting(false);
    }
  }

  const styles = {
    form: { margin: "0 auto", padding: 16, border: "1px solid #ddd", borderRadius: 8, color: "black" },
    section: { marginBottom: 24 },
    grid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 16 },
    full: { gridColumn: "1 / -1" },
    label: { display: "block", fontWeight: 600, marginBottom: 6 },
    input: { width: "100%", padding: 10, border: "1px solid #ccc", borderRadius: 6 },
    textarea: { width: "100%", padding: 10, border: "1px solid #ccc", borderRadius: 6, minHeight: 80 },
    h4: { marginBottom: 8 },
    button: {
      padding: "12px 18px",
      border: "none",
      borderRadius: 8,
      background: "#222",
      color: "#fff",
      cursor: "pointer",
      fontWeight: 600,
      opacity: isSubmitting ? 0.7 : 1,
    },
    checkboxLabel: { display: "flex", gap: 8, alignItems: "flex-start", cursor: "pointer" },
  };

  return (
    <div className="purchase-form" style={styles.form}>
      <form id="contactForm" onSubmit={onSubmit} noValidate>
        <div className="form-section" style={styles.section}>
          <h4 style={styles.h4}>Bei welchem Anliegen können wir behilflich sein?</h4>

          <div className="form-group">
            <label htmlFor="topic" style={styles.label}>Anliegen *</label>
            <select
              id="topic"
              name="topic"
              required
              value={formData.topic}
              onChange={handleChange}
              style={styles.input}
            >
              <option value="">Bitte wählen</option>
              <option value="zoll">Zolltechnisches Anliegen</option>
              <option value="recht">Rechtliches Anliegen</option>
              <option value="sonstiges">Sonstiges Anliegen</option>
            </select>
          </div>

          <h4 style={styles.h4}>Ihre Kontaktdaten</h4>
          <div className="form-grid" style={styles.grid}>
            <div className="form-group">
              <label htmlFor="name" style={styles.label}>Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Ihr Name"
                required
                value={formData.name}
                onChange={handleChange}
                style={styles.input}
              />
            </div>

            <div className="form-group">
              <label htmlFor="email" style={styles.label}>E-Mail *</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Ihre E-Mail"
                required
                value={formData.email}
                onChange={handleChange}
                style={styles.input}
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone" style={styles.label}>Telefon *</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Ihre Telefonnummer"
                required
                value={formData.phone}
                onChange={handleChange}
                style={styles.input}
              />
            </div>

            <div className="form-group">
              <label htmlFor="location" style={styles.label}>Ort/PLZ *</label>
              <input
                type="text"
                id="location"
                name="location"
                placeholder="Ihr Standort"
                required
                value={formData.location}
                onChange={handleChange}
                style={styles.input}
              />
            </div>
          </div>

          <div className="form-group" style={styles.full}>
            <label htmlFor="message" style={styles.label}>Nachricht (optional)</label>
            <textarea
              id="message"
              name="message"
              rows={3}
              placeholder="Zusätzliche Informationen oder Terminwünsche..."
              value={formData.message}
              onChange={handleChange}
              style={styles.textarea}
            />
          </div>

          <div className="form-group" style={styles.full}>
            <label className="checkbox-label" style={styles.checkboxLabel}>
              <input
                type="checkbox"
                name="privacy"
                checked={formData.privacy}
                onChange={handleChange}
                required
                style={{
                  appearance: "auto",
                  WebkitAppearance: "checkbox",
                  MozAppearance: "checkbox",
                  width: 18,
                  height: 18,
                  cursor: "pointer",
                  outlineOffset: 2,
                }}
              />
              <span style={{ userSelect: "none" }}>
                Ich stimme der{" "}
                <span
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate("/privacy");
                  }}
                  style={{ color: "#d4af37", textDecoration: "underline", cursor: "pointer" }}
                >
                  Datenschutzerklärung
                </span>{" "}
                zu. Meine Daten werden streng vertraulich behandelt und nicht an Dritte weitergegeben. *
              </span>
            </label>
          </div>
        </div>

        <button type="submit" className="btn submit-btn" style={styles.button} disabled={isSubmitting}>
          {isSubmitting ? "Senden…" : "Anfrage senden"}
        </button>
      </form>
    </div>
  );
}
