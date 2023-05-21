import { Link } from "react-router-dom";

export function Navbar1() {
  return (
    <div className="background-navbar">
      <div className="navbar1">
        <Link id ="text1" className="navbar1" to="/">
          {" "}
          Sistema De Gestion De recursos Humanos
        </Link>
      </div>
      <div className="navbar2">
        <Link id ="text2" className="navbar2" to="/">
          {" "}
          Home
        </Link>
      </div>
    </div>
  );
}
