import React from 'react';
import EventHero from '../../components/EventHero/EventHero.jsx';
import data_event_hero_aniversario from '../../components/EventHero/data_event_hero_aniversario.jsx';
import Countdown from "../../components/CountDown/CountDown.jsx";
import eventsData from '../../components/Events/Events.js';
import Categories from '../../components/Categories/Categories.jsx';
import event_aniversario_categories from "../../components/Categories/event_aniversario_categories.jsx"
import RouteMap from '../../components/RouteMap/RouteMap.jsx';
import event_aniversario_map from "../../components/RouteMap/event_aniversario_map.js"
import EventsSection from '../../components/Events/EventsSection.jsx';
import IncludesSlider from '../../components/IncludesSlider/IncludesSlider.jsx';
import event_aniversaro_slider from '../../components/IncludesSlider/event_aniversaro_slider.js';
import SponsorsLoop from '../../components/SponsorsLoop/SponsorsLoop.jsx';
import event_aniversario_sponsors from '../../components/SponsorsLoop/event_aniversario_sponsors.js';

import ChampionsSlider from '../../components/ChampionsSlider/ChampionsSlider.jsx';
import championsData from '../../components/ChampionsSlider/championsData.js';  

import VideoEvent from '../../components/VideoEvent/VideoEvent.jsx';
import videoDataEventPadre from '../../components/VideoEvent/videoDataEventPadre.js';

function AniversarioAdes(){
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
            data={data_event_hero_aniversario}
        />

        <Countdown
            title="¡YA SE ACERCA NUESTRO ANIVERSARIO!"
            subtitle="¡No te pierdas la oportunidad de celebrar con nosotros! VIVE LA EXPERIENCIA DE NUESTRO ANIVERSARIO ADES RUNNERS DEL SUR"
            targetDate="2026-08-06T07:00:00"
       />  

       <EventsSection
          data={eventsData}
          modalType="simple"
       />
       

        {/*
        <ChampionsSlider
            data={championsData}
        />
        */}
        
        {/*}
        <VideoEvent
            data={videoDataEventPadre}
        />
        */}
        <Categories
            data={event_aniversario_categories}
        />

       <IncludesSlider
            data={event_aniversaro_slider}
        />
        

       


       <RouteMap
            data={event_aniversario_map}
       />
       <SponsorsLoop
            data={event_aniversario_sponsors}
        />

    </main>
    );
}
export default AniversarioAdes;