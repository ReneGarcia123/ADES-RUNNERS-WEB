import "./Features.css";
import features from "./Features_card";
import features_head from "./Features_header"

export default function FeaturesSection() {
  return (
    <section className="features-section">

      <div className="features-header">
        <h2>{features_head.title}</h2>
        <p>
          {features_head.subtitle}
        </p>
      </div>

      <div className="features-grid">
        {features.map((item, index) => (
          <div key={index} className="feature-card">

            <div className="icon">
              {item.icon}
            </div>

            <h3>{item.title}</h3>

            <p>{item.description}</p>

          </div>
        ))}
      </div>

    </section>
  );
}