import { useEffect, useState } from "react";
import slides from "./slides";
import "./Hero.css";
import { Link } from "react-router-dom";


function Hero() {

  const [current, setCurrent] = useState(0);
/* USAR CUANDO HAYA MÁS DE UN SLIDE
  useEffect(() => {

    const video =
      document.querySelectorAll(".hero-video")[current];

    if (!video) return;

    let timeout;

    const startTimer = () => {

      timeout = setTimeout(() => {

        setCurrent((prev) =>
          prev === slides.length - 1
            ? 0
            : prev + 1
        );

      }, video.duration * 1000);

  };

  // Si metadata ya cargó
  if (video.readyState >= 1) {

    startTimer();

  } else {

    video.addEventListener(
      "loadedmetadata",
      startTimer
    );
  }

  return () => {

    clearTimeout(timeout);

    video.removeEventListener(
      "loadedmetadata",
      startTimer
    );
  };

  }, [current]);*/

  return (

    <section className="hero">

      {slides.map((slide, index) => (

        <div
          key={slide.id}
          className={`hero-slide ${
            index === current ? "active" : ""
          }`}
        >

          {/* VIDEO */}

          <video
            autoPlay
            muted
            loop //QUITAR LOOP CUANDO HAYA MÁS DE UN SLIDE
            playsInline
            className="hero-video"
          >

            <source
              src={slide.video}
              type="video/mp4"
            />

          </video>

          {/* OVERLAY */}

          <div className="hero-overlay"></div>

          {/* CONTENT */}

          <div className="hero-content">

            <h1>
              {slide.title}
            </h1>

            <p>
              {slide.subtitle}
            </p>

            <div className="hero-buttons">

              <Link
                to={slide.primaryLink}
                className="hero-btn-primary"
              >
                {slide.primaryBtn}
              </Link>

              <a
                href={slide.secondaryLink}
                target="_blank"
                rel="noreferrer"
                className="hero-btn-secondary"
              >
                {slide.secondaryBtn}
              </a>

            </div>

            </div>

          </div>


      ))}

      {/* DOTS */}

      <div className="hero-dots">

        {slides.map((_, index) => (

          <button
            key={index}
            className={`dot ${
              current === index ? "active-dot" : ""
            }`}
            onClick={() => setCurrent(index)}
          />

        ))}

      </div>

    </section>

  );
}

export default Hero;