import { useState } from "react";
import "../styles/buscarEmpleado.css";
import { Btn1 } from "./Btn1";

export function BuscarEmpleado({onMostrar, nameTitle}) {

  const [id, setId] = useState('')

  const guardarId = (e) => {
    setId(e.target.value)
  }

  const mostrar = (e) => {
    e.preventDefault()
    if (id.trim() !== ''){
      onMostrar(true, id)
    }
  }

  return (
    <div className="content-buscar-empleado">
      <div>
        <h3>Buscar {nameTitle}</h3>
      </div>
      <form onSubmit={mostrar}>
        <div id="content-buscar">
          <input type="text" placeholder="Cédula empleado" value={id} onChange={guardarId}/>
          <Btn1 name="Buscar" size={[100, 30,]} />
        </div>
      </form>
    </div>
  );
}
