// src/sites/Imprint.jsx
import React from "react";
import { useI18n } from "../I18nProvider";
import "./styles.css";

import AutoGrid from "./AutoGrid";

export default function CarShowcase() {
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
          <h2>Unsere Autos</h2>


            <AutoGrid/>




          

        </div>
      </section>
            <br></br><br></br><br></br>
    </>
  );
}
