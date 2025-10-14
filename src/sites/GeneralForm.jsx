import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useI18n } from "../I18nProvider";

export default function GeneralForm() {
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

  // ✅ Webhooks für jedes Anliegen
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
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  function handleChange(e) {
    const { name, type, value, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  function validate() {
    if (!formData.topic) return t("generalform.err_topic");
    if (!formData.name?.trim()) return t("generalform.err_name");
    if (!formData.email?.trim()) return t("generalform.err_email");
    if (!formData.phone?.trim()) return t("generalform.err_phone");
    if (!formData.location?.trim()) return t("generalform.err_location");
    if (!formData.privacy) return t("generalform.err_privacy");
    return null;
  }

  function topicLabel(topic) {
    switch (topic) {
      case "zoll":
        return t("generalform.topic_zoll");
      case "recht":
        return t("generalform.topic_recht");
      default:
        return t("generalform.topic_sonstiges");
    }
  }

  function buildDiscordEmbed() {
    const label = topicLabel(formData.topic);
    const fields = [
      { name: t("generalform.field_topic"), value: label, inline: false },
      { name: t("generalform.field_name"), value: formData.name || "-", inline: true },
      { name: t("generalform.field_phone"), value: formData.phone || "-", inline: true },
      { name: t("generalform.field_email"), value: formData.email || "-", inline: true },
      { name: t("generalform.field_location"), value: formData.location || "-", inline: true },
    ];
    if (formData.message?.trim()) {
      fields.push({ name: t("generalform.field_message"), value: formData.message.trim(), inline: false });
    }
    return {
      title: tr("generalform.embed_title", { topic: label }),
      color: 0x1a3a5f,
      fields,
      timestamp: new Date().toISOString(),
    };
  }

  async function postToDiscord(embed, topic) {
    const webhookUrl = WEBHOOKS[topic];
    if (!webhookUrl) throw new Error(t("generalform.err_webhook"));

    const fd = new FormData();
    const payload = {
      username: "AUTO M.A.H. Kontaktformular",
      content: tr("generalform.discord_content", { topic: embed.fields[0].value }),
      embeds: [embed],
    };
    fd.append("payload_json", JSON.stringify(payload));

    const res = await fetch(webhookUrl, { method: "POST", body: fd });
    if (!res.ok) {
      const text = await res.text().catch(() => "");
      throw new Error(text || t("generalform.err_webhook"));
    }
  }

  async function onSubmit(e) {
    e.preventDefault();
    const formEl = e.currentTarget;

    const error = validate();
    if (error) {
      alert(error);
      return;
    }

    setIsSubmitting(true);
    try {
      const embed = buildDiscordEmbed();
      await postToDiscord(embed, formData.topic);
      alert(t("generalform.success_alert"));

      formEl.reset();
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
      alert(err.message || t("generalform.err_generic"));
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
      background: isHovered ? "#b8941f" : "#d4af37",
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
          <h4 style={styles.h4}>{t("generalform.heading_intro")}</h4>

          <div className="form-group">
            <label htmlFor="topic" style={styles.label}>{t("generalform.topic_label")}</label>
            <select
              id="topic"
              name="topic"
              required
              value={formData.topic}
              onChange={handleChange}
              style={styles.input}
            >
              <option value="">{t("generalform.topic_placeholder")}</option>
              <option value="zoll">{t("generalform.topic_zoll")}</option>
              <option value="recht">{t("generalform.topic_recht")}</option>
              <option value="sonstiges">{t("generalform.topic_sonstiges")}</option>
            </select>
          </div>

          <h4 style={styles.h4}>{t("generalform.contacts_title")}</h4>
          <div className="form-grid" style={styles.grid}>
            <div className="form-group">
              <label htmlFor="name" style={styles.label}>{t("generalform.name_label")}</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder={t("generalform.name_ph")}
                required
                value={formData.name}
                onChange={handleChange}
                style={styles.input}
              />
            </div>

            <div className="form-group">
              <label htmlFor="email" style={styles.label}>{t("generalform.email_label")}</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder={t("generalform.email_ph")}
                required
                value={formData.email}
                onChange={handleChange}
                style={styles.input}
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone" style={styles.label}>{t("generalform.phone_label")}</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder={t("generalform.phone_ph")}
                required
                value={formData.phone}
                onChange={handleChange}
                style={styles.input}
              />
            </div>

            <div className="form-group">
              <label htmlFor="location" style={styles.label}>{t("generalform.location_label")}</label>
              <input
                type="text"
                id="location"
                name="location"
                placeholder={t("generalform.location_ph")}
                required
                value={formData.location}
                onChange={handleChange}
                style={styles.input}
              />
            </div>
          </div>

          <div className="form-group" style={styles.full}>
            <label htmlFor="message" style={styles.label}>{t("generalform.message_label")}</label>
            <textarea
              id="message"
              name="message"
              rows={3}
              placeholder={t("generalform.message_ph")}
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
                {t("generalform.privacy_prefix")}{" "}
                <span
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate("/privacy");
                  }}
                  style={{ color: "#d4af37", textDecoration: "underline", cursor: "pointer" }}
                >
                  {t("generalform.privacy_link")}
                </span>{" "}
                {t("generalform.privacy_suffix")}
              </span>
            </label>
          </div>
        </div>

        <button
          type="submit"
          className="btn submit-btn"
          style={styles.button}
          disabled={isSubmitting}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {isSubmitting ? t("generalform.btn_sending") : t("generalform.btn_submit")}
        </button>
      </form>
    </div>
  );
}
