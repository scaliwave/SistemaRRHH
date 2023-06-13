import "../styles/MainBlock.css";
import "../styles/Usuario.css";

import { ListarUsuarios } from "./ListarUsuarios";
import { AgregarUsuarios } from "./AgregarUsuarios";
import { GestionEmpleados } from "./GestionEmpleados";
import { GestionVacantes } from "./GestionVacantes";

export function MainBlock() {
  //screen 1 listar usuarios
  if (window.location.pathname === "/administrador/listar-usuarios") {
    return <ListarUsuarios />;
  }
  //screen 2 agregar usuarios
  else if (window.location.pathname === "/administrador/agregar-usuarios") {
    return <AgregarUsuarios />;
  }
  //screen 3 gestion de empleados
  else if (window.location.pathname === "/analista/gestion-de-empleados") {
    return <GestionEmpleados />;
  }
  //screen 4 gestion de vacantes
  else if (window.location.pathname === "/analista/gestion-de-vacantes") {
    return <GestionVacantes />;
  }
}
