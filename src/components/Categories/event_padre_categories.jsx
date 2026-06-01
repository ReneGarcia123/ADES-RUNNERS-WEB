import {
  FaMedal,
  FaRunning,
  FaTshirt,
} from "react-icons/fa";

const categoriesData = {

  title:
    "Categorías Oficiales",

  description:
    "Participa en las distintas categorías de la carrera y vive una experiencia inolvidable",

  image:"https://res.cloudinary.com/ddt2qucrw/image/upload/v1780174484/WhatsApp_Image_2026-05-30_at_2.06.35_PM_d9kojr.jpg" ,

  categories: [

    "Varones Libre 18-34 años",
    "Damas Libre 18-34 años",
    "Varones Máster 34-49 años",
    "Damas Máster 34-49 años",
    "Varones Súper Máster 50 años a más",
    "Damas Súper Máster 50 años a más",
  ],

  basesLink:"https://atacaperu.com/wp-content/uploads/2025/12/BASES-AQP-TRAIL-2026.pdf",

  items: [

    {
      icon: <FaRunning />,

      title: "Distancia: 13K",

      text:
        "Terreno completamente en asfalto",
    },

    {
      icon: <FaMedal />,

      title: "Premios y regalos",

      text:
        "Para los tres primeros puestos de cada categoría",
    },

    {
      icon: <FaTshirt />,

      title: "Kit Oficial ADES",

      text:
        "Polo, dorsal y medalla finisher (para los inscritos)",
    },

  ],
};

export default categoriesData;