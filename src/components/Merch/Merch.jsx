import { useState } from "react";
import "./Merch.css";
import merchData from "./merchData";
import MerchModal from "../MerchModal/MerchModal";

export default function Merch() {
  const [isModalOpen, setIsModalOpen] =
    useState(false);
    
  const [selectedProduct, setSelectedProduct] =
    useState(null);
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

          <article
            key={item.id}
            className="merch-card"
            onClick={() => {

              setSelectedProduct(item);

              setIsModalOpen(true);

            }}
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

          </article>

        ))}

      </div>

      {/* MODAL */}

      <MerchModal
        isOpen={isModalOpen}
        onClose={() =>
          setIsModalOpen(false)
        }
        product={selectedProduct}
      />

    </section>

  );
}