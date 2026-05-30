import "./EventHero.css";

export default function EventHero({
  data,
}) {

  return (

    <section className="event-hero">

      <div className="event-hero-image">

        <img
          src={data.image}
          alt={data.title}
        />

        <div className="event-hero-overlay">

          <h1>
            {data.title}
          </h1>

        </div>

      </div>

      <div className="event-hero-info">

        {data.items.map((item) => (

          <div
            className="event-hero-box"
            key={item.id}
          >

            <div className="event-icon">
              {item.icon}
            </div>

            <span>
              {item.label}
            </span>

            <p>
              {item.value}
            </p>

          </div>

        ))}

      </div>

    </section>
  );
}