import "../styles/bloqueWorkhere.css";
import { ListaDeVacantes } from "./ListaDeVacantes";
import { TestDeConocimientos } from "./TestDeConocimientos";
import { PlantillaPostulante } from "./PlantillaPostulante";

export function BloqueWorkhere({ content }) {
  if (content === "vacantes") {
    return <ListaDeVacantes />;
  } else if (content === "test") {
    return <TestDeConocimientos />;
  } else if (content === "plantilla") {
    return <PlantillaPostulante />;
  }
}
