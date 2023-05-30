import { Link } from "react-router-dom";

import "../styles/navbar2.css";

export function Navbar2() {
  const logout = (e) => {
    localStorage.removeItem("token");
  };

  const letter = () => {
    if (window.location.pathname === "/administrador") {
      return (
        <div className="container">
          <Link to="/administrador" className="text1">
            Administrador
          </Link>
        </div>
      );
    } else if (window.location.pathname === "/administrador/listar-usuarios") {
      return (
        <div className="container">
          <Link to="/administrador" className="text1">
            Administrador ->
          </Link>
          <Link to="#" className="text1">
            Listar Usuarios
          </Link>
        </div>
      );
    } else if (window.location.pathname === "/administrador/agregar-usuarios"){
      const path = window.location.pathname.split("/");
      <div className="container">
        <Link to="/administrador" className="text1">
          Administrador ->
        </Link>
        <Link to="/trabajaconnosotros" className="text1">
          Agregar Usuarios ->
        </Link>
        <Link to={"/".concat(path)}>{path}</Link>
      </div>;
    }
    else{
      return none;
    }
  };

  return (
    <div className="navbarGroup">
      <div className="container">
        {letter()}
        <p className="userNavbar">user</p>
        <Link to="/" onClick={logout()}>
          <img src="/exit.png" className="exit" />
        </Link>
      </div>
    </div>
  );
}
