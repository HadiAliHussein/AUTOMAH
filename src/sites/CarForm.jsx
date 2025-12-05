// src/sites/CarForm.jsx
import React, { useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BRANDS, MODELS_BY_BRAND } from "./vehicleData";
import { useI18n } from "../I18nProvider";

export default function CarForm() {
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

  // Discord Webhooks (Tipp: für Prod via .env + Proxy absichern)
  const DISCORD_WEBHOOK_URL_OFFERS =
    "https://discord.com/api/webhooks/1427747848639742002/ZM_pBscq_jPMRTMsZ2Fo-LJLIbrynXr5cH_ZgBOQd_ZWITycl2Ts4LcxC3MqksVEid3N";

  const DISCORD_WEBHOOK_URL_WISHCAR =
    "https://discord.com/api/webhooks/1427747955263406120/1vpUDpN3oG42t5B5oSq5FWeWrDMtsDGIuSaEWYHOhERiFry98r_RcssfnI2t4E9bemSO";

  const [serviceType, setServiceType] = useState("purchase"); // "purchase" | "wish_car"
  const [formData, setFormData] = useState({
    brand: "",
    model: "",
    brand_other: "",
    model_other: "",
    year: "",
    mileage: "",
    budget: "",
    equipment: "",
    color: "",
    fuel_type: "",
    price_expectation: "",
    name: "",
    email: "",
    phone: "",
    location: "",
    message: "",
    privacy: false,
  });

  const [availableModels, setAvailableModels] = useState([]);
  const [filesInfo, setFilesInfo] = useState({ count: 0, names: [] });
  const imagesInputRef = useRef(null);
  const yearMax = useMemo(() => new Date().getFullYear(), []);
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

  function onBrandChange(e) {
    const value = e.target.value;
    setFormData((prev) => ({
      ...prev,
      brand: value,
      model: "",
      brand_other: value === "other" ? prev.brand_other : "",
      model_other: value === "other" ? prev.model_other : "",
    }));
    setAvailableModels(MODELS_BY_BRAND[value] || []);
  }

  const isOtherBrand = formData.brand === "other";

  function onFilesChange(e) {
    const files = Array.from(e.target.files || []);
    // max. 10 Bilder im UI (Discord nimmt später max. 10 beim Versand)
    const limited = files.slice(0, 10);
    if (files.length > 10) {
      alert(t("carform.alert_max10"));
      if (imagesInputRef.current) {
        const dt = new DataTransfer();
        limited.forEach((f) => dt.items.add(f));
        imagesInputRef.current.files = dt.files;
      }
    }
    setFilesInfo({
      count: limited.length,
      names: limited.map((f) => f.name),
    });
  }

  function validate() {
    const year = Number(formData.year);
    const mileage = Number(formData.mileage);
    const price = Number(formData.price_expectation);

    if (!formData.brand) return t("carform.err_brand");
    if (formData.brand === "other") {
      if (!formData.brand_other?.trim()) return t("carform.err_brand_other");
      if (!formData.model_other?.trim()) return t("carform.err_model_other");
    } else {
      if (!formData.model) return t("carform.err_model");
    }

    if (!year || year < 1990 || year > yearMax)
      return tr("carform.err_year_range", { min: 1990, max: yearMax });

    if (!mileage || mileage < 0) return t("carform.err_mileage");

    if (serviceType === "purchase") {
      if (!price || price < 0) return t("carform.err_price");
      if (!imagesInputRef.current || imagesInputRef.current.files.length === 0)
        return t("carform.err_images_required");
    }

    if (!formData.name || !formData.email || !formData.phone || !formData.location)
      return t("carform.err_contacts");

    if (!formData.privacy) return t("carform.err_privacy");

    return null;
  }

  // Discord-Embed nur mit relevanten Feldern
  function buildDiscordEmbed({ brand, model }) {
    const title =
      serviceType === "purchase" ? t("carform.embed.title_purchase") : t("carform.embed.title_wish");
    const fields = [];

    // Basis
    fields.push(
      {
        name: t("carform.embed.service_name"),
        value:
          serviceType === "purchase"
            ? t("carform.service_purchase_full")
            : t("carform.service_wish_full"),
        inline: false,
      },
      { name: t("carform.field_brand"), value: brand || "-", inline: true },
      { name: t("carform.field_model"), value: model || "-", inline: true },
      { name: t("carform.field_year"), value: String(formData.year || "-"), inline: true },
      { name: t("carform.field_mileage"), value: String(formData.mileage || "-"), inline: true }
    );

    if (serviceType === "purchase") {
      fields.push({
        name: t("carform.field_price"),
        value: String(formData.price_expectation || "-"),
        inline: true,
      });
    }

    if (serviceType === "wish_car") {
      if (formData.budget)
        fields.push({ name: t("carform.field_budget"), value: String(formData.budget), inline: true });
      if (formData.color)
        fields.push({ name: t("carform.field_color"), value: formData.color, inline: true });
      if (formData.fuel_type)
        fields.push({ name: t("carform.field_fuel"), value: mapFuel(formData.fuel_type), inline: true });
      if (formData.equipment)
        fields.push({ name: t("carform.field_equipment"), value: formData.equipment, inline: false });
    }

    // Kontakt
    fields.push(
      { name: t("carform.field_name"), value: formData.name || "-", inline: true },
      { name: t("carform.field_phone"), value: formData.phone || "-", inline: true },
      { name: t("carform.field_email"), value: formData.email || "-", inline: true },
      { name: t("carform.field_location"), value: formData.location || "-", inline: true }
    );

    if (formData.message) {
      fields.push({ name: t("carform.field_message"), value: formData.message, inline: false });
    }

    return {
      title,
      color: 0x1a3a5f,
      fields,
      timestamp: new Date().toISOString(),
    };
  }

  function mapFuel(f) {
    switch (f) {
      case "petrol":
        return t("carform.fuel_petrol");
      case "diesel":
        return t("carform.fuel_diesel");
      case "hybrid":
        return t("carform.fuel_hybrid");
      case "electric":
        return t("carform.fuel_electric");
      case "any":
        return t("carform.fuel_any");
      default:
        return "-";
    }
  }

  async function postToDiscord({ embed, filesForDiscord }) {
    // richtiger Webhook je nach Service
    const webhookUrl =
      serviceType === "purchase" ? DISCORD_WEBHOOK_URL_OFFERS : DISCORD_WEBHOOK_URL_WISHCAR;

    const fd = new FormData();
    const payload = {
      username: "AUTO M.A.H. Formular",
      content:
        serviceType === "purchase"
          ? t("carform.discord_content_purchase")
          : t("carform.discord_content_wish"),
      embeds: [embed],
    };
    fd.append("payload_json", JSON.stringify(payload));

    // Nur bei purchase: Bilder mitsenden (max. 10)
    if (serviceType === "purchase" && filesForDiscord?.length) {
      filesForDiscord.forEach((file, idx) => {
        fd.append(`files[${idx}]`, file, file.name || `image_${idx + 1}.jpg`);
      });
    }

    const res = await fetch(webhookUrl, {
      method: "POST",
      body: fd,
    });

    if (!res.ok) {
      const text = await res.text().catch(() => "");
      throw new Error(text || t("carform.err_webhook"));
    }
  }

  async function onSubmit(e) {
    e.preventDefault();
    const error = validate();
    if (error) {
      alert(error);
      return;
    }

    setIsSubmitting(true);
    try {
      // Normalisierte Marke/Modell
      const brandNormalized =
        formData.brand === "other" ? formData.brand_other || t("carform.brand_other_fallback") : formData.brand;
      const modelNormalized =
        formData.brand === "other" ? formData.model_other : formData.model;

      const embed = buildDiscordEmbed({
        brand: brandNormalized,
        model: modelNormalized,
      });

      // purchase: Dateien an Discord (max 10)
      let filesForDiscord = [];
      if (serviceType === "purchase" && imagesInputRef.current?.files?.length) {
        const selected = Array.from(imagesInputRef.current.files);
        filesForDiscord = selected.slice(0, 10);
        if (selected.length > 10) {
          console.warn(t("carform.warn_only_first10"));
        }
      }

      await postToDiscord({ embed, filesForDiscord });

      alert(t("carform.success_alert"));

      // Reset
      if (e.target && typeof e.target.reset === "function") e.target.reset();
      if (imagesInputRef.current) imagesInputRef.current.value = "";
      setFilesInfo({ count: 0, names: [] });
      setServiceType("purchase");
      setFormData({
        brand: "",
        model: "",
        brand_other: "",
        model_other: "",
        year: "",
        mileage: "",
        budget: "",
        equipment: "",
        color: "",
        fuel_type: "",
        price_expectation: "",
        name: "",
        email: "",
        phone: "",
        location: "",
        message: "",
        privacy: false,
      });
      setAvailableModels([]);
    } catch (err) {
      console.error(err);
      alert(err.message || t("carform.err_generic"));
    } finally {
      setIsSubmitting(false);
    }
  }

  // Inline-Minimalstyles (Hover-Farbe via state)
  const styles = {
    form: { margin: "0 auto", padding: 16, border: "1px solid #ddd", borderRadius: 8 },
    section: { marginBottom: 24 },
    grid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 16 },
    full: { gridColumn: "1 / -1" },
    label: { display: "block", fontWeight: 600, marginBottom: 6 },
    input: { width: "100%", padding: 10, border: "1px solid #ccc", borderRadius: 6 },
    textarea: { width: "100%", padding: 10, border: "1px solid #ccc", borderRadius: 6, minHeight: 80 },
    h3: { marginTop: 0 },
    h4: { marginBottom: 8 },
    small: { display: "block", color: "#555", marginTop: 8 },
    ul: { marginTop: 6 },
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
    fileWrap: { border: "1px dashed #aaa", borderRadius: 8, padding: 12, background: "#fafafa" },
    checkboxLabel: { display: "flex", gap: 8, alignItems: "flex-start", cursor: "pointer" },
    radioWrap: { display: "flex", gap: 24 },
  };

  return (
    <div className="purchase-form" style={styles.form}>
      <h3 style={styles.h3}>{t("carform.title")}</h3>

      <form id="vehicleForm" onSubmit={onSubmit} noValidate>
        {/* Service-Auswahl */}
        <div className="form-section" style={styles.section}>
          <h4 style={styles.h4}>{t("carform.service_title")}</h4>
          <div style={{ display: "flex", gap: "20px", flexWrap: "wrap", marginTop: "10px" }}>
            <div
              onClick={() => setServiceType("purchase")}
              style={{
                flex: "1 1 240px",
                padding: "14px 20px",
                borderRadius: "8px",
                border: serviceType === "purchase" ? "2px solid #1a3a5f" : "2px solid #ccc",
                backgroundColor: serviceType === "purchase" ? "#f7f7f7" : "#fff",
                cursor: "pointer",
                fontWeight: serviceType === "purchase" ? "600" : "500",
                transition: "all 0.2s ease",
              }}
            >
              {t("carform.service_purchase")}
            </div>

            <div
              onClick={() => setServiceType("wish_car")}
              style={{
                flex: "1 1 240px",
                padding: "14px 20px",
                borderRadius: "8px",
                border: serviceType === "wish_car" ? "2px solid #1a3a5f" : "2px solid #ccc",
                backgroundColor: serviceType === "wish_car" ? "#f7f7f7" : "#fff",
                cursor: "pointer",
                fontWeight: serviceType === "wish_car" ? "600" : "500",
                transition: "all 0.2s ease",
              }}
            >
              {t("carform.service_wish")}
            </div>
          </div>
        </div>

        {/* Fahrzeug-Daten */}
        <div className="form-section" style={styles.section}>
          <h4 style={styles.h4}>{t("carform.vehicle_title")}</h4>
          <div className="form-grid" style={styles.grid}>
            <div className="form-group">
              <label htmlFor="brand" style={styles.label}>
                {t("carform.brand_label")}
              </label>
              <select
                id="brand"
                name="brand"
                required
                value={formData.brand}
                onChange={onBrandChange}
                style={styles.input}
              >
                <option value="">{t("carform.brand_placeholder")}</option>
                {BRANDS.map((b) => (
                  <option key={b.id} value={b.id}>
                    {b.label}
                  </option>
                ))}
              </select>
            </div>

            {isOtherBrand ? (
              <>
                <div className="form-group">
                  <label htmlFor="brand_other" style={styles.label}>
                    {t("carform.brand_other_label")}
                  </label>
                  <input
                    type="text"
                    id="brand_other"
                    name="brand_other"
                    placeholder={t("carform.brand_other_ph")}
                    required
                    value={formData.brand_other}
                    onChange={handleChange}
                    style={styles.input}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="model_other" style={styles.label}>
                    {t("carform.model_other_label")}
                  </label>
                  <input
                    type="text"
                    id="model_other"
                    name="model_other"
                    placeholder={t("carform.model_other_ph")}
                    required
                    value={formData.model_other}
                    onChange={handleChange}
                    style={styles.input}
                  />
                </div>
              </>
            ) : (
              <div className="form-group">
                <label htmlFor="model" style={styles.label}>
                  {t("carform.model_label")}
                </label>
                <select
                  id="model"
                  name="model"
                  required
                  value={formData.model}
                  onChange={handleChange}
                  style={styles.input}
                  disabled={!formData.brand}
                >
                  <option value="">
                    {formData.brand ? t("carform.model_placeholder") : t("carform.model_first_choose")}
                  </option>
                  {availableModels.map((m) => (
                    <option key={m} value={m}>
                      {m}
                    </option>
                  ))}
                </select>
              </div>
            )}

            <div className="form-group">
              <label htmlFor="year" style={styles.label}>
                {t("carform.year_label")}
              </label>
              <input
                type="number"
                id="year"
                name="year"
                min={1990}
                max={yearMax}
                placeholder={tr("carform.year_ph", { example: yearMax - 5 })}
                required
                value={formData.year}
                onChange={handleChange}
                style={styles.input}
              />
            </div>

            <div className="form-group">
              <label htmlFor="mileage" style={styles.label}>
                {t("carform.mileage_label")}
              </label>
              <input
                type="number"
                id="mileage"
                name="mileage"
                placeholder={t("carform.mileage_ph")}
                required
                value={formData.mileage}
                onChange={handleChange}
                style={styles.input}
              />
            </div>
          </div>
        </div>

        {/* Preisvorstellung (nur purchase) */}
        {serviceType === "purchase" && (
          <div className="form-section" style={styles.section}>
            <h4 style={styles.h4}>{t("carform.price_title")}</h4>
            <div className="form-grid" style={styles.grid}>
              <div className="form-group" style={styles.full}>
                <label htmlFor="price_expectation" style={styles.label}>
                  {t("carform.price_label")}
                </label>
                <input
                  type="number"
                  id="price_expectation"
                  name="price_expectation"
                  placeholder={t("carform.price_ph")}
                  required
                  value={formData.price_expectation}
                  onChange={handleChange}
                  style={styles.input}
                />
              </div>
            </div>
          </div>
        )}

        {/* Budgetvorstellung (nur wish_car) */}
        {serviceType === "wish_car" && (
          <div className="form-section" id="wishCarFields" style={styles.section}>
            <h4 style={styles.h4}>{t("carform.budget_title")}</h4>
            <div className="form-grid" style={styles.grid}>
              <div className="form-group">
                <label htmlFor="budget" style={styles.label}>
                  {t("carform.budget_label")}
                </label>
                <input
                  type="number"
                  id="budget"
                  name="budget"
                  placeholder={t("carform.budget_ph")}
                  value={formData.budget}
                  onChange={handleChange}
                  style={styles.input}
                />
              </div>
            </div>
          </div>
        )}

        {/* Wunschauto-Felder (nur wish_car) */}
        {serviceType === "wish_car" && (
          <div className="form-section" id="wishCarFields2" style={styles.section}>
            <h4 style={styles.h4}>{t("carform.features_title")}</h4>
            <div className="form-grid" style={styles.grid}>
              <div className="form-group" style={styles.full}>
                <label htmlFor="equipment" style={styles.label}>
                  {t("carform.equipment_label")}
                </label>
                <textarea
                  id="equipment"
                  name="equipment"
                  placeholder={t("carform.equipment_ph")}
                  value={formData.equipment}
                  onChange={handleChange}
                  style={styles.textarea}
                />
              </div>

              <div className="form-group">
                <label htmlFor="color" style={styles.label}>
                  {t("carform.color_label")}
                </label>
                <input
                  type="text"
                  id="color"
                  name="color"
                  placeholder={t("carform.color_ph")}
                  value={formData.color}
                  onChange={handleChange}
                  style={styles.input}
                />
              </div>

              <div className="form-group">
                <label htmlFor="fuel_type" style={styles.label}>
                  {t("carform.fuel_label")}
                </label>
                <select
                  id="fuel_type"
                  name="fuel_type"
                  value={formData.fuel_type}
                  onChange={handleChange}
                  style={styles.input}
                >
                  <option value="">{t("carform.fuel_placeholder")}</option>
                  <option value="petrol">{t("carform.fuel_petrol")}</option>
                  <option value="diesel">{t("carform.fuel_diesel")}</option>
                  <option value="hybrid">{t("carform.fuel_hybrid")}</option>
                  <option value="electric">{t("carform.fuel_electric")}</option>
                  <option value="any">{t("carform.fuel_any")}</option>
                </select>
              </div>
            </div>
          </div>
        )}

        {/* Bild-Upload (nur purchase) */}
        {serviceType === "purchase" && (
          <div className="form-section" style={styles.section}>
            <h4 style={styles.h4}>{t("carform.photos_title")}</h4>
            <div className="form-group" style={styles.full}>
              <label style={styles.label}>{t("carform.photos_label")}</label>

              <div className="file-upload-container" style={styles.fileWrap}>
                <input
                  ref={imagesInputRef}
                  type="file"
                  id="images"
                  name="images"
                  multiple
                  accept="image/*"
                  required
                  className="file-input"
                  onChange={onFilesChange}
                  style={{ display: "block" }}
                />
                <div style={{ marginTop: 8 }}>
                  <strong>
                    {filesInfo.count === 0
                      ? t("carform.files_none")
                      : tr("carform.files_count", {
                          count: filesInfo.count,
                          names: filesInfo.names.join(", "),
                        })}
                  </strong>
                </div>
              </div>

              <small style={styles.small}>{t("carform.photos_hint")}</small>

              <div className="image-requirements" style={{ marginTop: 10 }}>
                <h5 style={{ margin: "6px 0" }}>{t("carform.req_title")}</h5>
                <ul style={styles.ul}>
                  <li>{t("carform.req_front")}</li>
                  <li>{t("carform.req_rear")}</li>
                  <li>{t("carform.req_sides")}</li>
                  <li>{t("carform.req_interior")}</li>
                  <li>{t("carform.req_odo")}</li>
                  <li>{t("carform.req_damage")}</li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Kontaktdaten */}
        <div className="form-section" style={styles.section}>
          <h4 style={styles.h4}>{t("carform.contacts_title")}</h4>
          <div className="form-grid" style={styles.grid}>
            <div className="form-group">
              <label htmlFor="name" style={styles.label}>
                {t("carform.name_label")}
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder={t("carform.name_ph")}
                required
                value={formData.name}
                onChange={handleChange}
                style={styles.input}
              />
            </div>

            <div className="form-group">
              <label htmlFor="email" style={styles.label}>
                {t("carform.email_label")}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder={t("carform.email_ph")}
                required
                value={formData.email}
                onChange={handleChange}
                style={styles.input}
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone" style={styles.label}>
                {t("carform.phone_label")}
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder={t("carform.phone_ph")}
                required
                value={formData.phone}
                onChange={handleChange}
                style={styles.input}
              />
            </div>

            <div className="form-group">
              <label htmlFor="location" style={styles.label}>
                {t("carform.location_label")}
              </label>
              <input
                type="text"
                id="location"
                name="location"
                placeholder={t("carform.location_ph")}
                required
                value={formData.location}
                onChange={handleChange}
                style={styles.input}
              />
            </div>
          </div>

          <div className="form-group" style={styles.full}>
            <label htmlFor="message" style={styles.label}>
              {t("carform.message_label")}
            </label>
            <textarea
              id="message"
              name="message"
              rows={3}
              placeholder={t("carform.message_ph")}
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
                {t("carform.privacy_prefix")}{" "}
                <span
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate("/privacy");
                  }}
                  style={{
                    color: "#d4af37",
                    textDecoration: "underline",
                    cursor: "pointer",
                  }}
                >
                  {t("carform.privacy_link")}
                </span>{" "}
                {t("carform.privacy_suffix")}
              </span>
            </label>
          </div>
        </div>

        {/* Submit */}
        {serviceType === "purchase" && (
          <button
            type="submit"
            className="btn submit-btn"
            style={styles.button}
            disabled={isSubmitting}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {isSubmitting ? t("carform.btn_sending") : t("carform.btn_submit_purchase")}
          </button>
        )}

        {serviceType === "wish_car" && (
          <button
            type="submit"
            className="btn submit-btn"
            style={styles.button}
            disabled={isSubmitting}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {isSubmitting ? t("carform.btn_sending") : t("carform.btn_submit_wish")}
          </button>
        )}
      </form>
    </div>
  );
}
