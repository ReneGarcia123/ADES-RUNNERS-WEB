import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/home/Home.jsx'
import Eventos from '../pages/eventos/Eventos.jsx'
import Nosotros from '../pages/nosotros/Nosotros.jsx'
import Indumentaria from '../pages/indumentaria_ades/Indumentaria.jsx'
import CarreraPadre from "../pages/main_events/CarreraPadre";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/eventos" element={<Eventos />} />
      <Route path="/nosotros" element={<Nosotros />} />
      <Route path="/indumentaria" element={<Indumentaria />} />
      <Route path="/carrera-padre" element={<CarreraPadre/>}/>
    </Routes>
  );
}

export default AppRoutes;