import "../styles/userMenu.css";
import { Link } from "react-router-dom";

export function UserMenu({ btns }) {
  const Menu = (btn) => {
    if (btn === "Usuarios") {
      return (
        <Link
          key={btn.key}
          className="userbtn1"
          to="/administrador/listar-usuarios"
        >
          {btn}
        </Link>
      );
    } else if (btn === "Agregar usuario")
      return (
        <Link
          key={btn.key}
          className="userbtn1"
          to="/administrador/agregar-usuarios"
        >
          {btn}
        </Link>
      );
    else if (btn === "Gestión de empleados")
      return (
        <Link
          key={btn.key}
          className="userbtn1"
          to="/analista/gestion-de-empleados"
        >
          {btn}
        </Link>
      );
    else if (btn === "Gestión de postulantes")
      return (
        <Link key={btn.key} className="userbtn1" to="#">
          {btn}
        </Link>
      );
    else if (btn === "Gestión de vacantes")
      return (
        <Link key={btn.key} className="userbtn1" to="#">
          {btn}
        </Link>
      );
  };

  return (
    <div className="usermenuContainer">
      <div id="menu_h1">
        <h1>Menú</h1>
      </div>
      <hr id="menu_hr" />
      <div className="userBtn">{btns.map((btn) => Menu(btn))}</div>
    </div>
  );
}
