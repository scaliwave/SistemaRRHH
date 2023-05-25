import "../styles/backgroundMain.css";
import "../styles/admin.css";

import { BloqueTitulo } from "../components/BloqueTitulo";
import { Navbar2 } from "../components/Navbar2";
import { VerticalBar } from "../components/VerticalBar";
import { UserBlock } from "../components/UserBlock";
import { UserMenu } from "../components/UserMenu";

export function Administrador() {
  return (
    <div className="background">
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
  );
}
