import "../styles/backgroundMain.css";
import "../styles/Navbar.css";
import "../styles/footer.css";
import "../styles/trabajaconnosotros.css";

import { Navbar1 } from "../components/Navbar1";
import { Footer } from "../components/Footer";
import { BloqueWorkhere } from "../components/BloqueWorkhere";
import { ConsultaPostulacion } from "../components/ConsultaPostulacion";

export function TrabajaConNosotros() {
  return (
    <div className="background1">
      <div className="container_trabajaconnosotros">
        <div>
          <Navbar1 />
        </div>
        <div id="container_c_trabaja">
          <BloqueWorkhere />
          <ConsultaPostulacion />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
}
