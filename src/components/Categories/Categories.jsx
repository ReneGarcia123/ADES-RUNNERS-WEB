import "./Categories.css";

export default function Categories({
  data,
}) {

  return (

    <section className="categories-hero">

      {/* TOP TITLE */}

      <div className="categories-top-title">

        <h2>
          {data.title}
        </h2>

      </div>

      {/* IMAGE */}

      <div className="categories-image">

        <img
          src={data.image}
          alt={data.title}
        />

        {/* OVERLAY */}

        <div className="categories-overlay">

          <div className="categories-overlay-content">

            <h2>
              {data.description}
            </h2>

            {/* CATEGORIES */}

            <div className="categories-tags">

              {data.categories.map(
                (category, index) => (

                  <div
                    key={index}
                    className="category-tag"
                  >

                    {category}

                  </div>

                )
              )}

            </div>

          </div>

        </div>

      </div>

      {/* BOTTOM */}

      <div className="categories-bottom">

        {data.items.map(
          (item, index) => (

            <div
              key={index}
              className="info-card"
            >

              <div className="info-icon">
                {item.icon}
              </div>

              <h3>
                {item.title}
              </h3>

              <p>
                {item.text}
              </p>

            </div>

          )
        )}

      </div>

      {/* CTA */}

      <div className="categories-cta">

        <a
          href={data.basesLink}
          target="_blank"
          rel="noopener noreferrer"
          className="bases-btn"
        >

          {data.nameBases}

        </a>    

      </div>

      <div className="categories-cta">

        <a
          href={data.deslindeLink}
          target="_blank"
          rel="noopener noreferrer"
          className="bases-btn"
        >
          {data.nameDeslinde}
        </a>    

      </div>

    </section>

  );
}