import "../styles/Modal.css";
import { TfiClose } from "react-icons/tfi";
import { Btn1 } from "./Btn1";

export function Modal({ onClose }) {
  return (
    <div className="modal">
      <form className="modal-content">
        <div className="modal-head">
          <h2>Regístrate</h2>
          <TfiClose onClick={onClose} id="icon-close" />
        </div>

        <div className="modal-container">
          <div>
            <ul>Documento de identidad</ul>
            <input type="text" name="" id="" placeholder="Input Field" />
          </div>
          <div>
            <ul>Nombre completo</ul>
            <input type="text" name="" id="" placeholder="Input Field" />
          </div>
          <div>
            <ul>Correo electrónico</ul>{" "}
            <input type="text" name="" id="" placeholder="Input Field" />
          </div>
          <div>
            <ul>Teléfono de contacto</ul>
            <input type="text" placeholder="Input Field" />
          </div>
        </div>
        <div id="boton1">
          <Btn1 name="Enviar" size={[100, 40]} />
        </div>
      </form>
    </div>
  );
}
