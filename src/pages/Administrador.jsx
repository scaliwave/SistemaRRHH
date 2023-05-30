import "../styles/backgroundMain.css";
import "../styles/admin.css";
import axios from "axios";

import { BloqueTitulo } from "../components/BloqueTitulo";
import { Navbar2 } from "../components/Navbar2";
import { VerticalBar } from "../components/VerticalBar";
import { UserBlock } from "../components/UserBlock";
import { UserMenu } from "../components/UserMenu";
import { useEffect, useState } from "react";

export function Administrador() {
  
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (!token) {
      window.location.href = "/"
    } else {
      setAuthenticated(true)
    }
  }, []);
  const name = "Ligia López";
  const rol = "Administrador";
  return (
   <div>
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
              <UserBlock name={"Ligia López"} rol={"Administrador"}></UserBlock>
            </div>
          </div>
        </div>
      </div>
    </div>
   </div>
  );
}
