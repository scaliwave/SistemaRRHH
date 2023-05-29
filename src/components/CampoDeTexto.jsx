import { useState } from "react";
import { BiEditAlt } from "react-icons/bi";

import "../styles/Usuario.css"

export function CampoDeTexto() {

  const [texto, setTexto] = useState('Texto inicial');
  const [editable, setEditable] = useState(false);

  const editarCampo = () => {
    setEditable(true);
  };

  const guardarCampo = (e) => {
    setTexto(e.target.value);
  };

  const guardar = (e) => {
    setEditable(false);
  }

  return (
    <div className="campo">
      {editable ? (
        <div className="inputCampo">
          <input
            type="text"
            value={texto}
            onChange={guardarCampo}
            autoFocus
          />
          <button onClick={guardar}>Guardar</button>
        </div>
      ) : (
        <div>Usuario: {texto}</div>
      )}
      {!editable && <div className="editar"><BiEditAlt onClick={editarCampo}></BiEditAlt></div>}
    </div>
  );
}