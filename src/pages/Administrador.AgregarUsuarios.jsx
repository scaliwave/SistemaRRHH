import "../styles/backgroundMain.css";
import { Navbar2 } from "../components/Navbar2";
import { VerticalBar } from "../components/VerticalBar";
import { MainBlock } from "../components/MainBlock";

export function AgregarUsuarios() {
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