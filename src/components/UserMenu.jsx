import "../styles/userMenu.css";
import { Link } from "react-router-dom";

export function UserMenu({ btns }) {
  const btn1 = btns[0];
  const btn2 = btns[1];

  const whichMenu = () => {
    if (window.location.pathname === "/administrador") {
      return (
        <div className="userBtn">
          <Link className="userbtn1" to="/administrador/listar-usuarios">
            {btn1}
          </Link>
          <Link className="userbtn1" to="#">{btn2}</Link>
        </div>
      );
      // } else if (window.location.pathname === "/") {
      //   return (
      //     <div className="userBtn">
      //       <button className="userbtn1">{btn1}</button>
      //       <button className="userbtn2">{btn2}</button>
      //     </div>
      //   );
    }
  };

  return (
    <div className="usermenuContainer">
      <div id="menu_hr">
        <h1>Menú</h1>
        <hr />
      </div>
      {whichMenu()}
    </div>
  );
}
