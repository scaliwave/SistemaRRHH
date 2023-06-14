import { Link } from "react-router-dom";
import "../styles/verticalBar.css";
import { FaUserAlt, FaUserPlus, FaUserFriends,FaUserEdit } from "react-icons/fa";

export function VerticalBar() {
  const user = () => {
    //barra vertical de administrador
    if (
      window.location.pathname === "/administrador" ||
      window.location.pathname === "/administrador/listar-usuarios" ||
      window.location.pathname === "/administrador/agregar-usuarios"
    )
      return (
        <div className="vertical">
          <div className="verticalGroup">
            <div>
              <Link to="/administrador">
                <img src="/list.png" className="listIcon" />
              </Link>
            </div>
            <div>
              <Link to="/administrador/listar-usuarios">
                <FaUserAlt
                  className="listIcon"
                  style={{ color: "black" }}
                ></FaUserAlt>
              </Link>
            </div>
            <div>
              <Link to="/administrador/agregar-usuarios">
                <FaUserPlus
                  className="listIcon2"
                  style={{ color: "black" }}
                ></FaUserPlus>
              </Link>
            </div>
          </div>
        </div>
      );
      // barra vertical de analista
    else if (window.location.pathname === "/analista" || window.location.pathname === "/analista/gestion-de-empleados" || window.location.pathname === "/analista/gestion-de-vacantes" || window.location.pathname === "/analista/gestion-de-postulantes")
      return (
        <div className="vertical">
          <div className="verticalGroup">
            <div>
              <Link to="/analista">
                <img src="/list.png" className="listIcon" />
              </Link>
            </div>
            <div>
              <Link to="/analista/gestion-de-empleados">
                <FaUserFriends
                  className="listIcon2"
                  style={{ color: "black" }}
                />
              </Link>
            </div>
            <div>
              <Link to="/analista/gestion-de-postulantes">
                <FaUserEdit
                  className="listIcon2"
                  style={{ color: "black" }}
                ></FaUserEdit>
              </Link>
            </div>
            <div>
              <Link to="/analista/gestion-de-vacantes">
                <img
                  src="/recruitment.png"
                  className="listIcon2"
                  style={{ color: "black" }}
                />
              </Link>
            </div>
          </div>
        </div>
      );
  };
  return <>{user()}</>;
}
