import React from 'react';
import EventHero from '../../components/EventHero/EventHero';
import data_event_hero from '../../components/EventHero/data_event_hero.jsx';
import Countdown from "../../components/CountDown/CountDown";
import EventsSection from "../../components/Events/EventsSection.jsx";
import eventsData from '../../components/Events/Events.js';

function CarreraPadre(){
    return(
    <main style={{ paddingTop: "90px", color: "white" }}>
        <EventHero
            data={data_event_hero}
        />

        <Countdown
            title="CUENTA REGRESIVA PARA EL EVENTO"
            subtitle="CORREMOS JUNTOS DEJAMOS HELLA PARA SIEMPRE. La cuenta regresiva ya comenzó. Carrera conmemorativa por el día del padre"
            targetDate="2026-06-21T06:00:00"
       />

       <EventsSection
          data={eventsData}
       />
       
        <h2>asdasd</h2>


    </main>
    );
}
export default CarreraPadre;