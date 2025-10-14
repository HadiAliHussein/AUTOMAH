import React, { useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BRANDS, MODELS_BY_BRAND } from "./vehicleData";

export default function CarForm() {
  // Dein Discord Webhook (Tipp: in Produktion besser über .env + Proxy absichern)
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
      alert("Bitte maximal 10 Bilder hochladen. Es werden nur die ersten 10 übernommen.");
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

    if (!formData.brand) return "Bitte eine Automarke wählen.";

    if (formData.brand === "other") {
      if (!formData.brand_other?.trim()) return "Bitte die Marke eintragen.";
      if (!formData.model_other?.trim()) return "Bitte das Modell eintragen.";
    } else {
      if (!formData.model) return "Bitte ein Modell wählen.";
    }

    if (!year || year < 1990 || year > yearMax) return `Baujahr muss zwischen 1990 und ${yearMax} liegen.`;
    if (!mileage || mileage < 0) return "Kilometerstand ist ungültig.";

    // Nur bei purchase Pflicht:
    if (serviceType === "purchase") {
      if (!price || price < 0) return "Bitte eine gültige Preisvorstellung angeben.";
      if (!imagesInputRef.current || imagesInputRef.current.files.length === 0)
        return "Bitte mindestens ein Fahrzeugfoto hochladen.";
    }

    if (!formData.name || !formData.email || !formData.phone || !formData.location)
      return "Bitte alle Kontaktdaten ausfüllen.";
    if (!formData.privacy) return "Bitte der Datenschutzerklärung zustimmen.";

    return null;
  }

  // Discord: hübsches Embed mit nur den relevanten Feldern bauen
  function buildDiscordEmbed({ brand, model }) {
    const title =
      serviceType === "purchase" ? "Ankauf-Anfrage" : "Wunschauto-Anfrage";
    const fields = [];

    // Basisdaten
    fields.push(
      { name: "Service", value: serviceType === "purchase" ? "Ankauf (Fahrzeug verkaufen)" : "Vermittlung (Wunschauto)", inline: false },
      { name: "Marke", value: brand || "-", inline: true },
      { name: "Modell", value: model || "-", inline: true },
      { name: "Baujahr", value: String(formData.year || "-"), inline: true },
      { name: "Kilometerstand", value: String(formData.mileage || "-"), inline: true },
    );

    if (serviceType === "purchase") {
      fields.push({ name: "Preisvorstellung (€)", value: String(formData.price_expectation || "-"), inline: true });
    }

    if (serviceType === "wish_car") {
      if (formData.budget) fields.push({ name: "Budget (€)", value: String(formData.budget), inline: true });
      if (formData.color) fields.push({ name: "Farbe", value: formData.color, inline: true });
      if (formData.fuel_type) fields.push({ name: "Kraftstoff", value: mapFuel(formData.fuel_type), inline: true });
      if (formData.equipment) fields.push({ name: "Ausstattung", value: formData.equipment, inline: false });
    }

    // Kontakt
    fields.push(
      { name: "Name", value: formData.name || "-", inline: true },
      { name: "Telefon", value: formData.phone || "-", inline: true },
      { name: "E-Mail", value: formData.email || "-", inline: true },
      { name: "Ort/PLZ", value: formData.location || "-", inline: true },
    );

    if (formData.message) {
      fields.push({ name: "Nachricht", value: formData.message, inline: false });
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
      case "petrol": return "Benzin";
      case "diesel": return "Diesel";
      case "hybrid": return "Hybrid";
      case "electric": return "Elektro";
      case "any": return "Egal";
      default: return "-";
    }
  }

  async function postToDiscord({ embed, filesForDiscord }) {
    // Auswahl des richtigen Webhooks
    const webhookUrl =
      serviceType === "purchase"
        ? DISCORD_WEBHOOK_URL_OFFERS // Ankauf-Anfragen
        : DISCORD_WEBHOOK_URL_WISHCAR; // Wunschauto-Anfragen

    const fd = new FormData();
    const payload = {
      username: "AUTO M.A.H. Formular",
      content:
        serviceType === "purchase"
          ? "Neue Ankauf-Anfrage"
          : "Neue Wunschauto-Anfrage",
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
      throw new Error(text || "Discord-WebHook fehlgeschlagen.");
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
        formData.brand === "other" ? (formData.brand_other || "Andere") : formData.brand;
      const modelNormalized =
        formData.brand === "other" ? formData.model_other : formData.model;

      const embed = buildDiscordEmbed({
        brand: brandNormalized,
        model: modelNormalized,
      });

      // Nur purchase: Dateien an Discord anhängen (max 10)
      let filesForDiscord = [];
      if (serviceType === "purchase" && imagesInputRef.current?.files?.length) {
        const selected = Array.from(imagesInputRef.current.files);
        filesForDiscord = selected.slice(0, 10); // Discord Limit
        if (selected.length > 10) {
          console.warn("Es werden nur die ersten 10 Bilder an Discord gesendet.");
        }
      }

      await postToDiscord({ embed, filesForDiscord });

      alert("Vielen Dank! Ihre Anfrage wurde erfolgreich versendet.");

      // Reset
      e.target.reset();
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
      alert(err.message || "Es ist ein Fehler aufgetreten.");
    } finally {
      setIsSubmitting(false);
    }
  }

  // Minimal-Styles (unverändert lassen)
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
      background: "#222",
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
      <h3 style={styles.h3}>Ankauf-Anfrage oder Wunschauto-Service</h3>

      <form id="vehicleForm" onSubmit={onSubmit} noValidate>
        {/* Service-Auswahl */}
        <div className="form-section" style={styles.section}>
          <h4 style={styles.h4}>Welchen Service wünschen Sie?</h4>
          <div
            style={{
              display: "flex",
              gap: "20px",
              flexWrap: "wrap",
              marginTop: "10px",
            }}
          >
            <div
              onClick={() => setServiceType("purchase")}
              style={{
                flex: "1 1 240px",
                padding: "14px 20px",
                borderRadius: "8px",
                border: serviceType === "purchase" ? "2px solid #222" : "2px solid #ccc",
                backgroundColor: serviceType === "purchase" ? "#f7f7f7" : "#fff",
                cursor: "pointer",
                fontWeight: serviceType === "purchase" ? "600" : "500",
                transition: "all 0.2s ease",
              }}
            >
              Fahrzeug verkaufen (Ankauf)
            </div>

            <div
              onClick={() => setServiceType("wish_car")}
              style={{
                flex: "1 1 240px",
                padding: "14px 20px",
                borderRadius: "8px",
                border: serviceType === "wish_car" ? "2px solid #222" : "2px solid #ccc",
                backgroundColor: serviceType === "wish_car" ? "#f7f7f7" : "#fff",
                cursor: "pointer",
                fontWeight: serviceType === "wish_car" ? "600" : "500",
                transition: "all 0.2s ease",
              }}
            >
              Wunschauto finden (Vermittlung)
            </div>
          </div>
        </div>

        {/* Fahrzeug-Daten */}
        <div className="form-section" style={styles.section}>
          <h4 style={styles.h4}>Fahrzeug-Daten</h4>
          <div className="form-grid" style={styles.grid}>
            <div className="form-group">
              <label htmlFor="brand" style={styles.label}>Marke *</label>
              <select
                id="brand"
                name="brand"
                required
                value={formData.brand}
                onChange={onBrandChange}
                style={styles.input}
              >
                <option value="">Bitte wählen</option>
                {BRANDS.map((b) => (
                  <option key={b.id} value={b.id}>{b.label}</option>
                ))}
              </select>
            </div>

            {isOtherBrand ? (
              <>
                <div className="form-group">
                  <label htmlFor="brand_other" style={styles.label}>Eigene Marke *</label>
                  <input
                    type="text"
                    id="brand_other"
                    name="brand_other"
                    placeholder="z.B. Alfa Romeo"
                    required
                    value={formData.brand_other}
                    onChange={handleChange}
                    style={styles.input}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="model_other" style={styles.label}>Modell *</label>
                  <input
                    type="text"
                    id="model_other"
                    name="model_other"
                    placeholder="z.B. Giulia"
                    required
                    value={formData.model_other}
                    onChange={handleChange}
                    style={styles.input}
                  />
                </div>
              </>
            ) : (
              <div className="form-group">
                <label htmlFor="model" style={styles.label}>Modell *</label>
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
                    {formData.brand ? "Bitte Modell wählen" : "Bitte zuerst Marke wählen"}
                  </option>
                  {availableModels.map((m) => (
                    <option key={m} value={m}>{m}</option>
                  ))}
                </select>
              </div>
            )}

            <div className="form-group">
              <label htmlFor="year" style={styles.label}>Baujahr *</label>
              <input
                type="number"
                id="year"
                name="year"
                min={1990}
                max={yearMax}
                placeholder={`z.B. ${yearMax - 5}`}
                required
                value={formData.year}
                onChange={handleChange}
                style={styles.input}
              />
            </div>

            <div className="form-group">
              <label htmlFor="mileage" style={styles.label}>Kilometerstand *</label>
              <input
                type="number"
                id="mileage"
                name="mileage"
                placeholder="z.B. 75000"
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
            <h4 style={styles.h4}>Preisvorstellung</h4>
            <div className="form-grid" style={styles.grid}>
              <div className="form-group" style={styles.full}>
                <label htmlFor="price_expectation" style={styles.label}>
                  Ihre Preisvorstellung (€) *
                </label>
                <input
                  type="number"
                  id="price_expectation"
                  name="price_expectation"
                  placeholder="Welchen Preis haben Sie sich vorgestellt?"
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
            <h4 style={styles.h4}>Budgetvorstellung</h4>
            <div className="form-grid" style={styles.grid}>
              <div className="form-group">
                <label htmlFor="budget" style={styles.label}>Ihre Budgetvorstellung (€)</label>
                <input
                  type="number"
                  id="budget"
                  name="budget"
                  placeholder="Wie hoch ist Ihr Maximalbudget?"
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
            <h4 style={styles.h4}>Ihre Wunschausstattung</h4>
            <div className="form-grid" style={styles.grid}>
              <div className="form-group" style={styles.full}>
                <label htmlFor="equipment" style={styles.label}>Besondere Ausstattungswünsche</label>
                <textarea
                  id="equipment"
                  name="equipment"
                  placeholder="z.B. Lederausstattung, Panoramadach, Sonderausstattung..."
                  value={formData.equipment}
                  onChange={handleChange}
                  style={styles.textarea}
                />
              </div>

              <div className="form-group">
                <label htmlFor="color" style={styles.label}>Bevorzugte Farbe</label>
                <input
                  type="text"
                  id="color"
                  name="color"
                  placeholder="Farbe des Fahrzeugs"
                  value={formData.color}
                  onChange={handleChange}
                  style={styles.input}
                />
              </div>

              <div className="form-group">
                <label htmlFor="fuel_type" style={styles.label}>Kraftstoffart</label>
                <select
                  id="fuel_type"
                  name="fuel_type"
                  value={formData.fuel_type}
                  onChange={handleChange}
                  style={styles.input}
                >
                  <option value="">Bitte wählen</option>
                  <option value="petrol">Benzin</option>
                  <option value="diesel">Diesel</option>
                  <option value="hybrid">Hybrid</option>
                  <option value="electric">Elektro</option>
                  <option value="any">Egal</option>
                </select>
              </div>
            </div>
          </div>
        )}

        {/* Bild-Upload (nur purchase) */}
        {serviceType === "purchase" && (
          <div className="form-section" style={styles.section}>
            <h4 style={styles.h4}>Fahrzeug-Fotos</h4>
            <div className="form-group" style={styles.full}>
              <label style={styles.label}>Bilder hochladen *</label>

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
                      ? "Keine Dateien ausgewählt"
                      : `${filesInfo.count} Datei(en): ${filesInfo.names.join(", ")}`}
                  </strong>
                </div>
              </div>

              <small style={styles.small}>
                Bitte laden Sie Fotos von allen Seiten, Innenraum und eventuellen Schäden hoch (max. 10 Bilder).
              </small>

              <div className="image-requirements" style={{ marginTop: 10 }}>
                <h5 style={{ margin: "6px 0" }}>Erforderliche Fotos:</h5>
                <ul style={styles.ul}>
                  <li>Frontansicht</li>
                  <li>Heckansicht</li>
                  <li>Seitenansicht (beide Seiten)</li>
                  <li>Innenraum</li>
                  <li>Tachometer (Kilometerstand)</li>
                  <li>Eventuelle Schäden oder Defekte</li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Kontaktdaten */}
        <div className="form-section" style={styles.section}>
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
                  style={{
                    color: "#d4af37",
                    textDecoration: "underline",
                    cursor: "pointer",
                  }}
                >
                  Datenschutzerklärung
                </span>{" "}
                zu. Meine Daten werden streng vertraulich behandelt und nicht an Dritte weitergegeben. *
              </span>
            </label>
          </div>
        </div>

        {serviceType === "purchase" && (
          <button
            type="submit"
            className="btn submit-btn"
            style={styles.button}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Senden…" : "Kostenlose Bewertung anfordern"}
          </button>
        )}

        {serviceType === "wish_car" && (
          <button
            type="submit"
            className="btn submit-btn"
            style={styles.button}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Senden…" : "Kostenlose Fahrzeugsuche anfragen"}
          </button>
        )}
      </form>
    </div>
  );
}
