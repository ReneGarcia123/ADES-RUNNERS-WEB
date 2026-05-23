import { FaPersonRunning } from "react-icons/fa6";
import { FaPeopleGroup } from "react-icons/fa6";
import { GiWeightLiftingUp } from "react-icons/gi";
import { FaPeopleRobbery } from "react-icons/fa6";


/*CONTENIDO DE CADA CARTA*/
const features = [
  {
    title: "Entrenamientos continuos",
    description: "Todos los miércoles en las noches y algunos especiales periódicamente",
    icon: <FaPersonRunning />,
  },
  {
    title: "Todos son bienvenidos",
    description: "Entrenamientos aptos para todos los niveles y para cualquiera",
    icon: <FaPeopleGroup />,
  },
  {
    title: "Mil formas de entrenar",
    description: "Diversidad que motiva, fuerza, resistencia y diversión en cada fecha",
    icon: <GiWeightLiftingUp />,
  },
  {
    title: "Un grupo que te impulsa",
    description: "Somos un grupo alegre y solidario, entrenamos, mejoramos y compartimos cada triunfo como familia",
    icon: <FaPeopleRobbery/> ,
  },
];

export default features;