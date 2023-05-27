import { Link } from "react-router-dom";

import "../styles/navbar2.css";

export function Navbar2() {

  const logout = (e) => {
    localStorage.removeItem('token')
  }
  
  return (
    <div className="navbarGroup">
      <div className="container">
        <Link className="text1" to="/administrador">
          Administrador
        </Link>
        <p className="userNavbar">hola</p>
        <Link to="/" onClick={logout()}>
          <img src="/exit.png" className="exit" />
        </Link>
      </div>
    </div>
  );
}
