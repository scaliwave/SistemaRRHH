import "../styles/buscarEmpleado.css";
import { Btn1 } from "./Btn1";

export function BuscarEmpleado() {
  return (
    <div className="content-buscar-empleado">
      <div>
        <h3>Buscar usuario</h3>
      </div>
      <div id="content-buscar">
        <input type="text" placeholder="Input"/>
        <Btn1 name="Buscar" size={[100,30,]}/>
      </div>
    </div>
  );
}
