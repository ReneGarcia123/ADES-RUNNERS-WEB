import "./SponsorsLoop.css";

export default function SponsorsLoop({
  data,
}) {

  return (

    <section className="sponsors-section">

      <div className="sponsors-header">

        <span>
          Empresas que apoyan este evento
        </span>

        <h2>
          NUESTROS SPONSORS
        </h2>

      </div>

      <div className="sponsors-marquee">

        <div className="sponsors-track">

          {[...data.sponsors,
            ...data.sponsors].map(
            (sponsor, index) => (

              <a
                key={index}

                href={sponsor.link}

                target="_blank"

                rel="noreferrer"

                className="sponsor-card"
              >

                <img
                  src={sponsor.image}
                  alt={sponsor.name}
                />

              </a>

            )
          )}

        </div>

      </div>

    </section>

  );
}