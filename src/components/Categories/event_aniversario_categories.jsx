import {
  FaRunning
} from "react-icons/fa";

import { FaBottleWater } from "react-icons/fa6";
import { FaCircleCheck } from "react-icons/fa6";


const event_aniversario_categories = {

  title:
    "ACTIVIDADES A REALIZARSE",

  description:
    "Participa en las diferentes actividades que tenemos para ti",

  image:"https://res.cloudinary.com/ddt2qucrw/image/upload/v1784393299/2_kry6bo.jpg" ,

  categories: [

    "Trote conmmerativo 5K(no competitivo)",
    "Baile",
    "Juegos didácticos",
    "Premios sorpresa",
    "Hidratación y refrigerio",
    "Y muchas sorpresas más",
  ],
  nameBases:"Ver punto de encuentro",
  basesLink:"https://maps.app.goo.gl/isVrHxG2UFRNLcDt7",
  nameDeslinde:"Revisar Programa de Actividades",
  deslindeLink:"https://res.cloudinary.com/ddt2qucrw/image/upload/v1785203164/45454_hyp36b.jpg",

  items: [

    {
      icon: <FaRunning />,

      title: "Trote: 5K",

      text:
        "No competitivo, para todas las edades y niveles de condición física",
    },

    {
      icon: <FaBottleWater />,

      title: "Hidratación y refrigerio",

      text:
        "Para todos los participantes",
    },

    {
      icon: <FaCircleCheck />,

      title: "Evento Gratuito",

      text:
        "Solo para los miembros ADES, previa inscripción",
    },

  ],
};

export default event_aniversario_categories;