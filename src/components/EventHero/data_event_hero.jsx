import {
  FaCalendarAlt,
  FaClock,
  FaMapMarkerAlt,
} from "react-icons/fa";

const data_event_hero = {

  title: "JUNTOS PARA SIEMPRE 13K",

  image:
    "https://res.cloudinary.com/ddt2qucrw/image/upload/v1780165329/Carrera_Conmemorativa_pro_el_dia_del_padre_Horizontal_ytdfbf.png",

  items: [

    {
      id: 1,

      icon: <FaCalendarAlt />,

      label: "Fecha",

      value: "21 de junio del 2026",
    },

    {
      id: 2,

      icon: <FaClock />,

      label: "Hora",

      value: "06:00 AM",
    },

    {
      id: 3,

      icon: <FaMapMarkerAlt />,

      label: "Lugar",

      value: "Paucarpata - Arequipa",
    },

  ],

};

export default data_event_hero;