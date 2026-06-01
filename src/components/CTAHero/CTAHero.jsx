import "./CTAHero.css";

import {
  FaArrowRight,
} from "react-icons/fa";

export default function CTAHero({
  data,
}) {

  return (
    <section className="cta-hero">

        <div className="cta-content">

            <span className="cta-badge">
            {data.badge}
            </span>

            <h2>
            {data.title}
            </h2>

            <p>
            {data.description}
            </p>

        </div>

        {/* GALERÍA */}

        <div className="cta-marquee">

            {/* BOTÓN FLOTANTE */}

            <div className="cta-floating-button">

            <a
                href={data.buttonLink}
                className="cta-button"
            >

                {data.buttonText}

                <FaArrowRight />

            </a>

            </div>

            <div className="cta-track">

            {[...data.images, ...data.images].map(
                (image, index) => (

                <div
                    className="cta-image-card"
                    key={index}
                >

                    <img
                    src={image}
                    alt={`cta-${index}`}
                    />

                </div>

                )
            )}

            </div>

        </div>

        </section>
 

  );
}