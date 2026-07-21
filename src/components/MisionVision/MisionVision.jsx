import "./MisionVision.css";

import { useState } from "react";

import { motion, AnimatePresence } from "framer-motion";

export default function MisionVision({ data }) {

  const [current, setCurrent] = useState(0);

  const next = () => {
    if (current < data.length - 1) {
      setCurrent(current + 1);
    }
  };

  const prev = () => {
    if (current > 0) {
      setCurrent(current - 1);
    }
  };

  const item = data[current];

  return (

    <section className="mission-section">

      <div className="mission-container">

        <AnimatePresence mode="wait">

          <motion.div
            key={item.image}
            className="mission-image"
            initial={{
              opacity: 0,
              scale: .92,
              x: -40,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              x: 0,
            }}
            exit={{
              opacity: 0,
              scale: 1.08,
              x: 40,
            }}
            transition={{
              duration: .55,
            }}
          >

            <img
              src={item.image}
              alt={item.title}
            />

          </motion.div>

        </AnimatePresence>

        <AnimatePresence mode="wait">

          <motion.div
            key={item.id}
            className="mission-content"
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -30,
            }}
            transition={{
              duration: .45,
            }}
          >

            <p className="mission-subtitle">
              {item.subtitle}
            </p>

            <h2>
              {item.title}
            </h2>

            <p className="mission-description">
              {item.description}
            </p>

            <div className="mission-dots">

              {data.map((_, index) => (

                <span
                  key={index}
                  className={
                    current === index
                      ? "active"
                      : ""
                  }
                />

              ))}

            </div>

            <div className="mission-buttons">

              <button
                onClick={prev}
                disabled={current === 0}
              >
                ←
              </button>

              <button
                onClick={next}
                disabled={
                  current === data.length - 1
                }
              >
                →
              </button>

            </div>

          </motion.div>

        </AnimatePresence>

      </div>

    </section>

  );

}