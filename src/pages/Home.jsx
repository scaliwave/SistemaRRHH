import { TrabajaAqui } from "../components/TrabajaAqui";
import { Login } from "../components/Login";
import { Navbar1 } from "../components/Navbar1";
import { Footer } from "../components/Footer";

import "../styles/Home.css";
import "../styles/backgroundMain.css";

export function Home() {
  return (
    <div className="background1">
      <div className="containerHome">
        <div>
          <Navbar1 />
        </div>
        <div className="containerCenter">
          <TrabajaAqui />
          <Login />
        </div>
        <div className="containerFooter">
          <Footer />
        </div>
      </div>
    </div>
  );
}
