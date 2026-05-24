import "./GroupsWtsp.css";
import groups from "./GroupsWtsp.js";

export default function GroupsWtsp() {

  return (

    <section className="events-section">

      <div className="events-header">

        <p>
          Forma parte del grupo running más grande de Arequipa
          y vive cada kilómetro junto a nosotros
        </p>

      </div>

      <div className="events-grid">

        {groups.map((group) => (

          <div
            key={group.id}
            className="event-card"
          >

            {/* IMAGE */}
            <div className="event-image">

              <img
                src={group.image}
                alt={group.title}
              />

            </div>

            {/* CONTENT */}
            <div className="event-content">

              <h3>
                {group.title}
              </h3>

              <p>
                {group.description}
              </p>

              <a
                href={group.redirect}
                target="_blank"
                rel="noreferrer"
                className="event-btn"
              >
                {group.button}
              </a>
            </div>

          </div>

        ))}

      </div>

    </section>

  );
}