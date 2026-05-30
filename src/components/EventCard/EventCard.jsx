import "./EventCard.css";
import { useNavigate } from "react-router-dom";

export default function EventCard({
  titulo = "Próximos Eventos",
  descripcion = "",
  events = [],
}) {

  const navigate = useNavigate();
  return (

    <section className="events-section">

      <div className="events-header">

        <h2>
          {titulo}
        </h2>

        <p>
          {descripcion}
        </p>

      </div>

      <div className="events-grid">

        {events.map((event) => (

          <div
            className="event-card"
            key={event.id}
          >

            <img
              src={event.image}
              alt={event.title}
            />

            <div className="event-content">

              <h3>
                {event.title}
              </h3>

              <p className="event-description">
                {event.descripcion}
              </p>

              <div className="event-info">

                <p>
                  <strong>
                    Lugar:
                  </strong>
                  {" "}
                  {event.lugar}
                </p>

                <p>
                  <strong>
                    Fecha:
                  </strong>
                  {" "}
                  {event.fecha}
                </p>

                <p>
                  <strong>
                    Costo:
                  </strong>
                  {" "}
                  {event.costo}
                </p>

              </div>

              <button
                className={
                  event.disponible
                    ? "event-btn"
                    : "event-btn disabled"
                }

                disabled={!event.disponible}

                onClick={() => navigate(event.link)}
              >

                {event.disponible
                  ? "Inscribirme"
                  : "Próximamente"}

              </button>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}