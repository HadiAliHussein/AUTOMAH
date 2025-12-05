import React from "react";

const cars = [
  {
    title: "Mercedes-Benz C-Klasse",
    subtitle: "C 180 T Avantgarde",
    price: "30.500 €",
    year: "2023",
    fuel: "Benzin",
    mileage: "33.298 km",
    co2: "150 g CO₂/km (komb.)",
    consumption: "6.3 l/100 km (komb.)",
    feature: "Scheckheftgepflegt",
    img: "https://img-eu-c1.autohero.com/img/23cefca95cf5e241349a3c1a8016b31a5693c6c52c230f799206fc53503df248/exterior/1/768x432-91b97c28e8cc48bba4108b528416da59.jpg",
  },
  {
    title: "BMW 3er Touring",
    subtitle: "320d M Sport",
    price: "28.900 €",
    year: "2022",
    fuel: "Diesel",
    mileage: "40.100 km",
    co2: "130 g CO₂/km (komb.)",
    consumption: "5.2 l/100 km (komb.)",
    feature: "1. Hand",
    img: "https://www.bmw.lu/content/dam/bmw/common/all-models/3-series/sedan/2024/navigation/bmw-3-series-phev-lci-modelfinder.png",
  },
  {
    title: "Audi A4 Avant",
    subtitle: "2.0 TFSI Quattro",
    price: "32.700 €",
    year: "2021",
    fuel: "Benzin",
    mileage: "29.000 km",
    co2: "145 g CO₂/km (komb.)",
    consumption: "6.1 l/100 km (komb.)",
    feature: "Scheckheftgepflegt",
    img: "https://assets.adac.de/image/upload/ar_16:9,c_fill,f_auto,g_auto,q_auto:eco,w_1256/v1/Autodatenbank/Fahrzeugbilder/im05753-1-audi-a4.jpeg",
  },
  {
    title: "Mercedes-Benz C-Klasse",
    subtitle: "C 180 T Avantgarde",
    price: "30.500 €",
    year: "2023",
    fuel: "Benzin",
    mileage: "33.298 km",
    co2: "150 g CO₂/km (komb.)",
    consumption: "6.3 l/100 km (komb.)",
    feature: "Scheckheftgepflegt",
    img: "https://img-eu-c1.autohero.com/img/23cefca95cf5e241349a3c1a8016b31a5693c6c52c230f799206fc53503df248/exterior/1/768x432-91b97c28e8cc48bba4108b528416da59.jpg",
  },
  {
    title: "BMW 3er Touring",
    subtitle: "320d M Sport",
    price: "28.900 €",
    year: "2022",
    fuel: "Diesel",
    mileage: "40.100 km",
    co2: "130 g CO₂/km (komb.)",
    consumption: "5.2 l/100 km (komb.)",
    feature: "1. Hand",
    img: "https://www.bmw.lu/content/dam/bmw/common/all-models/3-series/sedan/2024/navigation/bmw-3-series-phev-lci-modelfinder.png",
  },
  {
    title: "Audi A4 Avant",
    subtitle: "2.0 TFSI Quattro",
    price: "32.700 €",
    year: "2021",
    fuel: "Benzin",
    mileage: "29.000 km",
    co2: "145 g CO₂/km (komb.)",
    consumption: "6.1 l/100 km (komb.)",
    feature: "Scheckheftgepflegt",
    img: "https://assets.adac.de/image/upload/ar_16:9,c_fill,f_auto,g_auto,q_auto:eco,w_1256/v1/Autodatenbank/Fahrzeugbilder/im05753-1-audi-a4.jpeg",
  },
  
];

export default function AutoGrid() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
        gap: "20px",
        padding: "20px",
      }}
    >
      {cars.map((car, index) => (
        <div
          key={index}
          style={{
            border: "1px solid #ddd",
            borderRadius: "10px",
            overflow: "hidden",
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            transition: "transform 0.2s ease",
            backgroundColor: "#fff",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.02)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
          <img
            src={car.img}
            alt={car.title}
            style={{
              width: "100%",
              height: "200px",
              objectFit: "cover",
            }}
          />
          <div style={{ padding: "15px" }}>
            <h2
              style={{
                fontSize: "1.2rem",
                fontWeight: "700",
                margin: "0 0 20px 0",
              }}
            >
              {car.title}
            </h2>
            <h3
              style={{
                fontSize: "1rem",
                fontWeight: "500",
                color: "#555",
                margin: "0 0 10px 0",
              }}
            >
              {car.subtitle}
            </h3>

            <div style={{ fontSize: "1.1rem", fontWeight: "bold", color: "#F27121" }}>
              {car.price}
            </div>

            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: "10px 0",
                fontSize: "0.9rem",
                color: "#333",
                lineHeight: "1.4",
              }}
            >
              <li>{car.year}</li>
              <li>{car.fuel}</li>
              <li>{car.mileage}</li>
              <li>{car.co2}</li>
              <li>{car.consumption}</li>
              <li>{car.feature}</li>
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}
