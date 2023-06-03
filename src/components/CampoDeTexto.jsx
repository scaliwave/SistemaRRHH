import { useEffect, useState } from "react";
import { BiEditAlt, BiSave } from "react-icons/bi";

import "../styles/Usuario.css"

export function CampoDeTexto(params) {

  const { campoTexto, opcionEditar, onGuardar } = params;

  const [texto, setTexto] = useState(campoTexto);
  const [editable, setEditable] = useState(false);
  const [editar, setEditar] = useState(opcionEditar);

  useEffect(() => {
    setEditar(opcionEditar);
  }, [opcionEditar]);

  const editarCampo = () => {
    setEditable(true);
  };

  const guardarCampo = (e) => {
    setTexto(e.target.value);
  };

  const guardar = () => {
    setEditable(false);
    onGuardar(texto)
  }

  return (
    <div>
      {editable ? (
        <div>
          <input type="text" value={texto} onChange={guardarCampo} />
          <div className="editar"><BiSave onClick={guardar}></BiSave></div>
        </div>
      ) : (
        <div>
          <div>{texto}</div>
          {editar && <div className="editar"><BiEditAlt onClick={editarCampo}></BiEditAlt></div>}
        </div>
      )}
    </div>
  );
}