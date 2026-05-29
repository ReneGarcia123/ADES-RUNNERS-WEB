import FadeSlider from "../../components/FadeSlider/FadeSlider";
import eventSlider from "../../components/FadeSlider/eventsSlider"
import EventCard from "../../components/EventCard/EventCard"
import eventsData from "../../components/EventCard/eventData";


function Eventos() {
  return (
    <main style={{ paddingTop: "90px", color: "white" }}>
      <FadeSlider slides={eventSlider}/>
      <EventCard
        events={eventsData}
        titulo="Próximos Eventos"
        descripcion="Participa en experiencias deportivas diseñadas para runners de todos los niveles. Vive cada kilómetro con nuestra comunidad."
      />
      <h1>Eventos</h1>
    </main>
  );
}

export default Eventos;
