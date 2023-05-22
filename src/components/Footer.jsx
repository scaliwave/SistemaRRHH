import "../styles/Footer.css";
import { ChatBot } from "./ChatBot";
import world from "../../public/world.png";

export function Footer() {
  return (
    <>
      <div className="footer">
        <div>
          <ChatBot />
        </div>
        <div className="texto1">
          <p>Pereira - Colombia</p>
        </div>
        <div className="texto2">
          <img src={world} width="20px" height="20px" />
          <p>Español</p>
        </div>
      </div>
    </>
  );
}
