import FadeSlider from "../../components/FadeSlider/FadeSlider";
import eventSlider from "../../components/FadeSlider/eventsSlider"


function Eventos() {
  return (
    <main style={{ paddingTop: "90px", color: "white" }}>
      <FadeSlider slides={eventSlider}/>
      <h1>Eventos</h1>
    </main>
  );
}

export default Eventos;
