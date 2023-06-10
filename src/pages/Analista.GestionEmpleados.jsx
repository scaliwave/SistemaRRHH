import "../styles/backgroundMain.css";
import "../styles/adminListarUsers.css";

// import { FondoUsuario } from "../components/FondoUsuario";
import { Navbar2 } from "../components/Navbar2";
import { VerticalBar } from "../components/VerticalBar";
import { MainBlock } from "../components/MainBlock";

import "../styles/ListarUsuarios.css";

export function GestionEmpleados() {
  return (
    <div className="background2">
      <Navbar2 />
      <div className="container-list-users">
        <div className="adminC1">
          <VerticalBar />
        </div>
        <MainBlock />
      </div>
    </div>
  );
}
