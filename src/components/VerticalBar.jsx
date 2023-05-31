import { Link } from "react-router-dom";
import "../styles/verticalBar.css";
import { FaUserAlt, FaUserPlus } from "react-icons/fa";

export function VerticalBar() {
  return (
    <div className="vertical">
      <div className="verticalGroup">
        <div>
          <Link to="#">
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
}
