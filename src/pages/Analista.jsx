import "../styles/backgroundMain.css";
import "../styles/admin.css";

import { BloqueTitulo } from "../components/BloqueTitulo";
import { Navbar2 } from "../components/Navbar2";
import { VerticalBar } from "../components/VerticalBar";
import { UserBlock } from "../components/UserBlock";
import { UserMenu } from "../components/UserMenu";
import { useEffect, useState } from "react";

export function Analista() {

  const [authenticated, setAuthenticated] = useState(false);
  const [analista, setAnalista] = useState([])
  
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      window.location.href = "/";
    } else {
      setAnalista(JSON.parse(localStorage.getItem("analista")))
      setAuthenticated(true);
    }
  }, []);

  return (
    <div>
      {authenticated && (
      <div className="background2">
        <Navbar2></Navbar2>
        <div className="adminContainer">
          <div className="adminC1">
            <VerticalBar></VerticalBar>
          </div>
          <div className="adminC2">
            <BloqueTitulo></BloqueTitulo>
            <div className="adminC2_1">
              <div>
                <UserBlock
                  name={analista.nombre}
                  rol={analista.cargo}
                  genre="femenino"
                ></UserBlock>
              </div>
              <div>
                <UserMenu btns={["Gestión de empleados", "Gestión de postulantes", "Gestión de vacantes"]} />
              </div>
            </div>
          </div>
        </div>
      </div>
      )}
    </div>
  );
}