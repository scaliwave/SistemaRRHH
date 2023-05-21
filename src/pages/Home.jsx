import { TrabajaConNosotros } from "../components/TrabajaConNosotros";
import { Login } from "../components/Login";
import { Navbar1 } from "../components/Navbar1";
import { Fondo } from "../components/Fondo";

import "../styles/Home.css";

export function Home() {
  return (
    <>
      <Fondo />
      <Navbar1 />
      <div className="containerHome">
        <TrabajaConNosotros />
        <Login />
      </div>
    </>
  );
}
