import "../styles/Modal.css";
import { TfiClose } from "react-icons/tfi";
import { Btn1 } from "./Btn1";
import { useState } from "react";
import axios from "axios";

export function Modal({ vacante, onClose }) {

  const [id, setId] = useState('')
  const [nombre, setNombre] = useState('')
  const [email, setEmail] = useState('')
  const [telefono, setTelefono] = useState('')

  const idVacante = vacante.id

  const registroPostulante = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3000/api/postulantes', {id, nombre, email, telefono, idVacante});
      console.log(response.data)
    } catch (error) {
      console.log(error)
    }

    return window.location.pathname = "/trabajaconnosotros/test-de-conocimientos"
  };

  return (
    <div className="modal">
      <form className="modal-content" onSubmit={registroPostulante}>
        <div className="modal-head">
          <h2>Regístrate</h2>
          <TfiClose onClick={onClose} id="icon-close" />
        </div>

        <div className="modal-container">
          <div>
            <ul>Documento de identidad</ul>
            <input type="text" name="" id="" placeholder="Input Field" value={id} required onChange={(e) => setId(e.target.value)}/>
          </div>
          <div>
            <ul>Nombre completo</ul>
            <input type="text" name="" id="" placeholder="Input Field" required value={nombre} onChange={(e) => setNombre(e.target.value)}/>
          </div>
          <div>
            <ul>Correo electrónico</ul>{" "}
            <input type="text" name="" required id="" placeholder="Input Field" value={email} onChange={(e) => setEmail(e.target.value)}/>
          </div>
          <div>
            <ul>Teléfono de contacto</ul>
            <input type="text" required placeholder="Input Field" value={telefono} onChange={(e) => setTelefono(e.target.value)}/>
          </div>
        </div>
        <div id="boton1">
          <Btn1 name="Enviar" size={[100, 40]} />
        </div>
      </form>
    </div>
  );
}
