import { Link } from "react-router-dom";
import "../styles/Navbar.css";

export function Navbar1() {
  return (
    <div className="background-navbar">
      <div className="container">
        <div className="navbar1">
          <img src="/logo.png" alt="" className="logo"/>
          <Link to="/" className="navbar">Sistema de Gestión De Recursos Humanos</Link>
        </div>
        <div className="navbar2">
          <Link to="/" className="navbar">Home</Link>
        </div>
      </div>
    </div>
  );
}
