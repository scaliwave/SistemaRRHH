import { Btn1 } from "../components/Btn1";
import "../styles/consultaPostulacion.css";

export function ConsultaPostulacion() {
  return (
    <div className="consulta-postulacion">
      <div className="container-consulta">
        <div id="title">
          <h2>Consulta tu postulación</h2>
        </div>
        <div id="container-form">
          <form className="form-postulacion">
            <input placeholder="Ingresa tu número de documento" />
            <Btn1 name="Consultar" size={[100, 40]} />
          </form>
        </div>
      </div>
      {/* respuesta de consulta*/}
      <div className="container-respuesta">
        <div>x</div>
        <div className="content-fields">
          <div id="text-field">
            <h3>Documento de identidad: </h3>
            <p>Lorem ipsum </p>
          </div>
          <div id="text-field">
            <h3>Nombre completo: </h3>
            <p>Lorem ipsum </p>
          </div>
          <div id="text-field">
            <h3>Cargo al que aspira: </h3>
            <p>Lorem ipsum </p>
          </div>
          <div id="text-field">
            <h3>Estado de postulacion:</h3>
            <p>Lorem ipsum </p>
          </div>
        </div>

        <div className="btn-adjDocuments">
          <Btn1 name="Adjuntar documentos" size={[140, 25]} />
        </div>
      </div>
    </div>
  );
}
