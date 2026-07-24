import "./HistoryTimeline.css";
import { motion } from "framer-motion";

export default function HistoryTimeline({ data }) {
  return (
    <section className="history">

      <div className="history-header">
        <span>{data.subtitle}</span>
        <h2>{data.title}</h2>
      </div>

      <div className="history-line">

        {data.items.map((item, index) => (

          <motion.div
            key={index}
            className={`history-item ${index % 2 === 0 ? "left" : "right"}`}
            initial={{
              opacity: 0,
              x: index % 2 === 0 ? -80 : 80
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{ once: true }}
            transition={{
              duration: .7
            }}
          >

            <div className="history-card">

              <div className="history-image">

                <img
                  src={item.image}
                  alt={item.title}
                />

              </div>

              <div className="history-content">

                <span className="history-year">
                  {item.year}
                </span>

                <h3>
                  {item.title}
                </h3>

                <p>
                  {item.description}
                </p>

              </div>

            </div>

            <div className="history-dot"></div>

          </motion.div>

        ))}

      </div>

    </section>
  );
}