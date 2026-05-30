import FadeSlider from "../../components/FadeSlider/FadeSlider";
import eventSlider from "../../components/FadeSlider/eventsSlider";
import EventCard from "../../components/EventCard/EventCard";
import eventsData from "../../components/EventCard/eventData";
import Countdown from "../../components/CountDown/CountDown";


function Eventos() {
  return (
    <main style={{ paddingTop: "90px", color: "white" }}>
      <FadeSlider slides={eventSlider}/>
      
      <Countdown
        title="PRÓXIMO EVENTO: JUNTOS PARA SIEMPRE 13K"
        subtitle="CORREMOS JUNTOS DEJAMOS HELLA PARA SIEMPRE. La cuenta regresiva ya comenzó. Carrera conmemorativa por el día del padre"
        targetDate="2026-06-21T06:00:00"
      />

      <EventCard
        events={eventsData}
        titulo="¿Listo para sumar más KILÓMETROS?"
        descripcion="Participa en experiencias deportivas diseñadas para runners de todos los niveles. Vive cada kilómetro con nuestra comunidad."
      />
    </main>
  );
}

export default Eventos;
