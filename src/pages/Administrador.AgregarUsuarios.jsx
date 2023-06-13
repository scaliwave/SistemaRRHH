import "../styles/backgroundMain.css";
import { Navbar2 } from "../components/Navbar2";
import { VerticalBar } from "../components/VerticalBar";
import { MainBlock } from "../components/MainBlock";
import { useEffect, useState } from "react";

export function AgregarUsuarios() {

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
      <div className="background2">
        <Navbar2 />
        <div className="container-list-users">
          <div className="adminC1">
            <VerticalBar />
          </div>
          <MainBlock />
        </div>
      </div>
      )}
    </div>
  );
}