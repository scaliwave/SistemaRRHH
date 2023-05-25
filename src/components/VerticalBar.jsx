import { Link } from "react-router-dom";
import "../styles/verticalBar.css";

export function VerticalBar() {
  return (
    <div className="vertical">
      <div className="verticalGroup">
        <Link to="#">
          <img src="/list.png" className="listIcon"/>
        </Link>
      </div>
    </div>
  );
}
