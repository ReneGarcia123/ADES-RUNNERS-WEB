import "./Features_merch.css";

import features_merch from "./Features_card_merch";
import features_head_merch from "./Features_header_merch";

export default function FeaturesMerch() {

  return (

    <section className="features-section">

      <div className="features-header">

        <h2>
          {features_head_merch.title}
        </h2>

        <p>
          {features_head_merch.subtitle}
        </p>

      </div>

      <div className="features-grid">

        {features_merch.map((item, index) => (

          <div
            key={index}
            className="feature-card"
          >

            <div className="icon">
              {item.icon}
            </div>

            <h3>
              {item.title}
            </h3>

            <p>
              {item.description}
            </p>

          </div>

        ))}

      </div>

    </section>
  );
}