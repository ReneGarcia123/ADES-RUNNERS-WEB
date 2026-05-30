import "./Events.css";

import { useState } from "react";

import EventModal
from "../EventModal/EventModal";

export default function EventsSection({
  data,
}) {

  const [isModalOpen, setIsModalOpen] =
    useState(false);

  const [selectedEvent, setSelectedEvent] =
    useState(null);

  const openModal = (event) => {

    setSelectedEvent(event);

    setIsModalOpen(true);
  };

  const closeModal = () => {

    setIsModalOpen(false);

    setSelectedEvent(null);
  };

  return (

    <>

      <section className="events-section">

        <div className="events-header">

          <h2>
            {data.title}
          </h2>

          <p>
            {data.description}
          </p>

        </div>

        <div className="events-grid">

          {data.events.map((event) => (

            <div
              key={event.id}
              className="event-card"
            >

              <div className="event-image">

                <img
                  src={event.image}
                  alt={event.title}
                />

              </div>

              <div className="event-content">

                <h3>
                  {event.title}
                </h3>

                <p>
                  {event.description}
                </p>

                <button
                  className="event-btn"
                  onClick={() => openModal(event)}
                >

                  {event.button}

                </button>

              </div>

            </div>

          ))}

        </div>

      </section>

      <EventModal
        isOpen={isModalOpen}
        onClose={closeModal}
        event={selectedEvent}
      />

    </>

  );
}