import { FondoUsuario } from "../components/FondoUsuario";
import { Navbar2 } from "../components/Navbar2";
import { Usuario } from "../components/Usuario";
import { VerticalBar } from "../components/VerticalBar";

import "../styles/ListarUsuarios.css"

export function ListarUsuarios() {
  return (
    <div className="listarUsuarios">
      <Usuario></Usuario>
      <Usuario></Usuario>
    </div>
  );
}