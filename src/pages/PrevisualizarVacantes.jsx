import "../styles/backgroundMain.css";
import "../styles/previsualizarVacantes.css";

import { Link } from "react-router-dom";

import { Navbar2 } from "../components/Navbar2";
import { VerticalBar } from "../components/VerticalBar";
import { BloqueWorkhere } from "../components/BloqueWorkhere";
import { useEffect, useState } from "react";
import { Btn1 } from "../components/Btn1";

export function PrevisualizarVacantes() {
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      window.location.href = "/";
    } else {
      setAuthenticated(true);
    }
  }, []);

  return (
    <div>
      {authenticated && (
        <div className="background1">
          <Navbar2 />
          <div className="container-list-users">
            <div className="adminC1">
              <VerticalBar />
            </div>
            <div className="title-previsualizar">
              <h2>Previsualización de vacantes</h2>
            </div>
            <div className="container-previsualizar">
              <div id="container_c_trabaja">
                <BloqueWorkhere content="vacantes" />
              </div>
              <div id="btn-volver-previsualizar">
                <Link to="/analista/gestion-de-vacantes">
                  <Btn1 name="volver" size={[100, 30]} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
