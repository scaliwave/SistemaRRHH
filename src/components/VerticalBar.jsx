import { Link } from "react-router-dom";
import "../styles/verticalBar.css";
import { FaUserAlt } from "react-icons/fa";

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
      </div>
    </div>
  );
}
