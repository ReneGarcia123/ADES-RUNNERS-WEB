import FadeSlider from "../../components/FadeSlider/FadeSlider";
import eventSlider from "../../components/FadeSlider/eventsSlider";
import EventCard from "../../components/EventCard/EventCard";
import eventsData from "../../components/EventCard/eventData";
import Countdown from "../../components/CountDown/CountDown";
import eventsPast from "../../components/EventCardPast/EventPastData";
import EventPast from "../../components/EventCardPast/EventPast";


function Eventos() {
  return (
    <main style={{ paddingTop: "90px", color: "white" }}>
      <FadeSlider slides={eventSlider}/>
      
      <Countdown
        title="PRÓXIMO EVENTO: TROTE CONMEMORATIVO 5K"
        subtitle="Celebramos nuestro 2do Aniversario ADES RUNNERS DEL SUR con un trote conmemorativo"
        targetDate="2026-08-06T06:00:00"
      />

      <EventCard
        events={eventsData}
        titulo="¿Listo para sumar más KILÓMETROS?"
        descripcion="Participa en experiencias deportivas diseñadas para runners de todos los niveles. Vive cada kilómetro con nuestra comunidad."
      />

      <EventPast
        events={eventsPast}
        titulo="Eventos Pasados"  
        descripcion="Revive los momentos más emocionantes de nuestros eventos pasados. Descubre cómo fue la experiencia y únete a nuestra comunidad de corredores."
      />

    </main>
  );
}

export default Eventos;
