import { TrabajaAqui } from "../components/TrabajaAqui";
import { Login } from "../components/Login";
import { Navbar1 } from "../components/Navbar1";
import { Footer } from "../components/Footer";

import "../styles/Home.css";

export function Home() {
  return (
    <div className="home">
      <div className="containerHome">
        <div className="containerNavbar">
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
