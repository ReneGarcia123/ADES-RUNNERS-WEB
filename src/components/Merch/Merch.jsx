import "./Merch.css";

import merchData from "./merchData";

import { Link } from "react-router-dom";

export default function Merch() {

  return (

    <section className="merch-section">

      {/* HEADER */}
      <div className="merch-header">

        <h2>
          Indumentaria ADES
        </h2>

        <p>
          Corre con identidad y representa
          a nuestra comunidad en cada kilómetro.
        </p>

      </div>

      {/* GRID */}
      <div className="merch-grid">

        {merchData.map((item) => (

          <Link
            key={item.id}
            to={item.link}
            className="merch-card"
          >

            {/* IMAGE */}
            <img
              src={item.image}
              alt={item.title}
            />

            {/* OVERLAY */}
            <div className="merch-overlay" />

            {/* CONTENT */}
            <div className="merch-content">

              <span>
                Comprar
              </span>

              <h3>
                {item.title}
              </h3>

            </div>

          </Link>

        ))}

      </div>

    </section>

  );
}