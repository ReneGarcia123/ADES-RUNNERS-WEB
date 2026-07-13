import React from 'react';
import EventHero from '../../components/EventHero/EventHero';
import data_event_hero from '../../components/EventHero/data_event_hero.jsx';
import Countdown from "../../components/CountDown/CountDown";
import EventsSection from "../../components/Events/EventsSection.jsx";
import eventsData from '../../components/Events/Events.js';
import Categories from '../../components/Categories/Categories.jsx';
import event_padre_categories from "../../components/Categories/event_padre_categories.jsx"
import RouteMap from '../../components/RouteMap/RouteMap.jsx';
import event_padre_map from "../../components/RouteMap/event_padre_map.js"

import IncludesSlider from '../../components/IncludesSlider/IncludesSlider.jsx';
import event_padre_slider from '../../components/IncludesSlider/event_padre_slider.js';
import SponsorsLoop from '../../components/SponsorsLoop/SponsorsLoop.jsx';
import event_padre_sponsors from '../../components/SponsorsLoop/event_padre_sponsors.js';

import ChampionsSlider from '../../components/ChampionsSlider/ChampionsSlider.jsx';
import championsData from '../../components/ChampionsSlider/championsData.js';  

function CarreraPadre(){
    return(
    <main 
        style={{
        paddingTop: "90px",
        color: "white",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    }}
    >
        <EventHero
            data={data_event_hero}
        />

        <ChampionsSlider
            data={championsData}
        />

        {/* Habilitar para inscripciones
        <Countdown
            title="CUENTA REGRESIVA PARA EL EVENTO"
            subtitle="CORREMOS JUNTOS DEJAMOS HUELLA PARA SIEMPRE. La cuenta regresiva ya comenzó. Carrera conmemorativa por el día del padre"
            targetDate="2026-06-21T06:00:00"
       />*/}
    
       {/* Habilitar para inscripciones
       <EventsSection
          data={eventsData}
       />
       */}
       
       <Categories
            data={event_padre_categories}
       />

       <IncludesSlider
            data={event_padre_slider}
        />



       <RouteMap
            data={event_padre_map}
       />
       <SponsorsLoop
            data={event_padre_sponsors}
        />

    </main>
    );
}
export default CarreraPadre;