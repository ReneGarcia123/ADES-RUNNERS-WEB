import { FaTshirt, FaStar, FaRunning } from "react-icons/fa";
import { RiUserHeartFill } from "react-icons/ri";

/*CONTENIDO DE CADA CARTA*/
const features_merch = [
  {
    title: "Calidad en cada kilómetro",
    description: "Diseñados con materiales resistentes, transpirables y cómodos, pensados para rendir en cada entrenamiento o competencia.",
    icon: <FaTshirt/>,
  },
  {
    title: "Estilo que inspira",
    description: "Indumentaria moderna y atractiva diseñada para representar la energía y pasión de la comunidad ADES.",
    icon: <FaStar />,
  },
  {
    title: "Comodidad para cada runner",
    description: "Prendas ligeras y cómodas diseñadas para adaptarse a cada movimiento siente la libertad y confort en cada kilómetro.",
    icon: <FaRunning />,
  },
  {
    title: "Corre con identidad",
    description: "Cada diseño representa el esfuerzo, la pasión y el espíritu de comunidad que une a todos los runners de ADES.",
    icon: <RiUserHeartFill/> ,
  },
];

export default features_merch;