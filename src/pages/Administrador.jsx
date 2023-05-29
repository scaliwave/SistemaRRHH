import "../styles/backgroundMain.css";
import "../styles/admin.css";
import axios from "axios";

import { BloqueTitulo } from "../components/BloqueTitulo";
import { Navbar2 } from "../components/Navbar2";
import { VerticalBar } from "../components/VerticalBar";
import { UserBlock } from "../components/UserBlock";
import { UserMenu } from "../components/UserMenu";
import { useEffect } from "react";

export function Administrador() {

  useEffect(() => {
    axios.get('http://localhost:3000/api/usuarios', {
      headers: {
        authorization: `Bearer ${localStorage.getItem('token')}`
      }
    })
      .then(response => {
        console.log(response)
      })
      .catch(error => {
        console.error('Error al obtener la página', error);
      });
  }, []);

  return (
    <div>
      
      <div className="background2">
        <Navbar2 />
        <div className="adminContainer">
          <div className="adminC1">
            <VerticalBar />
          </div>
          <div className="adminC2">
            <BloqueTitulo />
            <div className="adminC2_1">
              <div>
                <UserBlock name={"Ligia López"} rol={"Administrador"} />
              </div>
              <div>
                <UserMenu />
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}
