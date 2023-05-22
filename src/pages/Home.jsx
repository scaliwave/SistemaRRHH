import { TrabajaConNosotros } from "../components/TrabajaConNosotros";
import { Login } from "../components/Login";
import { Navbar1 } from "../components/Navbar1";

import "../styles/Home.css";

export function Home() {
  return (
    <div className="background">
      <Navbar1 />
      <div className="containerHome">
        <TrabajaConNosotros />
        <Login />
      </div>
    </div>
  );
}
