import "./Events.css";
import events from "./Events.js";
import {Link } from "react-router-dom";

export default function EventsSection() {
  return (
    <section className="events-section">

      <div className="events-header">
        <h2>Próximos eventos</h2>
        <p>Únete a nuestras actividades y entrena con la comunidad.</p>
      </div>

      <div className="events-grid">

        {events.map((event) => (
          <div key={event.id} className="event-card">

            {/* IMAGE */}
            <div className="event-image">
              <img src={event.image} alt={event.title} />
            </div>

            {/* CONTENT */}
            <div className="event-content">

              <h3>{event.title}</h3>

              <p>{event.description}</p>


              <Link
                  to={event.redirect}
                  className="event-btn"
                >
                  {event.button}
              </Link>
              
              {/*
              <button className="event-btn">
                {event.button}
              </button>
                */}
            </div>

          </div>
        ))}

      </div>

    </section>
  );
}