import { Link } from "react-router-dom";
import "../styles/Navbar.css";

export function Navbar1() {
  const onHome = () => {
    if (window.location.pathname === "/") {
      return (
        <div className="navbar1">
          <img src="/logo.png" alt="" className="logo" />
          <Link to="/" className="navbar">
            Sistema de Gestión De Recursos Humanos
          </Link>
        </div>
      );
    } else {
      return null;
    }
  };

  const letter = () => {
    if (window.location.pathname === "/") {
      return (
        <div className="navbar2">
          <Link to="/" className="navbar">
            Home
          </Link>
        </div>
      );
    } else if (window.location.pathname === "/trabajaconnosotros") {
      return (
        <div className="navbar2">
          <Link to="/" className="navbar">
            Home ->
          </Link>
          <Link to="/trabajaconnosotros" className="navbar">
            Trabaja con nosotros
          </Link>
        </div>
      );
    } else if (
      window.location.pathname === "/trabajaconnosotros/test-de-conocimientos"
    ) {
      return (
        <div className="navbar2">
          <Link to="/" className="navbar">
            Home ->
          </Link>
          <Link to="/trabajaconnosotros" className="navbar">
            Trabaja con nosotros ->
          </Link>
          <Link to="#" className="navbar">
            Test de conocimientos
          </Link>
        </div>
      );
    } else if (
      window.location.pathname === "/trabajaconnosotros/plantilla-de-registro"
    ) {
      return (
        <div className="navbar2">
          <Link to="/" className="navbar">
            Home ->
          </Link>
          <Link to="/trabajaconnosotros" className="navbar">
            Trabaja con nosotros ->
          </Link>
          <Link to="#" className="navbar">
            Plantilla de registro
          </Link>
        </div>
      );
    }
  };

  return (
    <div className="background-navbar">
      <div className="container">
        {onHome()}
        {letter()}
      </div>
    </div>
  );
}
