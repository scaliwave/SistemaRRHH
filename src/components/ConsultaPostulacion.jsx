import { useState } from "react";
import { Btn1 } from "../components/Btn1";
import "../styles/consultaPostulacion.css";
import { AiOutlineClose } from "react-icons/ai";
import axios from "axios";

export function ConsultaPostulacion() {

  const [idPostulante, setIdPostulante] = useState('')
  const [postulacion, setPostulacion] = useState(false)
  const [mostrarRespuesta, setMostrarRespuesta] = useState(true)
  const [postulante, setPostulante] = useState([])

  const consultarPostulacion = (e) => {
    setIdPostulante(e.target.value)
  }

  const mostrarDatos = async (e) => {
    e.preventDefault();
    if (idPostulante.trim() !== '') {
      try {
        const response = await axios.get(`http://localhost:3000/api/postulantes/${idPostulante}`);
        setPostulante(response.data);
        console.log(response.data)
      } catch (error) {
        console.log(error)
      }
      setPostulacion(true)
      setMostrarRespuesta(true)
    }
  };

  const ocultarRespuesta = () => {
    setMostrarRespuesta(false)
  }
  
  return (
    <div className="consulta-postulacion">
      <div className="container-consulta">
        <div id="title">
          <h2>Consulta tu postulación</h2>
        </div>
        <div id="container-form">
          <form className="form-postulacion" onSubmit={mostrarDatos}>
            <input placeholder="Ingresa tu número de documento" onChange={consultarPostulacion} value={idPostulante} />
            {/* <Btn1 name="Consultar" size={[100, 40]} /> */}
            <Btn1 name="Consultar" size={[100, 40,]} />
          </form>
        </div>
      </div>
      {mostrarRespuesta && postulacion && idPostulante.trim() !== '' && (
        <div className="container-respuesta">
          <div className="closeDatosPostulante" onClick={ocultarRespuesta}><AiOutlineClose style={{ color: "#1537A6", cursor: "pointer" }}></AiOutlineClose></div>
          <div className="content-fields">
            <div id="text-field">
              <h3>Documento de identidad: </h3>
              <p>{postulante.id}</p>
            </div>
            <div id="text-field">
              <h3>Nombre completo: </h3>
              <p>{postulante.nombre}</p>
            </div>
            <div id="text-field">
              <h3>Cargo al que aspira: </h3>
              <p>{postulante.cargo}</p>
            </div>
            <div id="text-field">
              <h3>Estado de postulacion:</h3>
              <p>{postulante.estado}</p>
            </div>
          </div>

          <div className="btn-adjDocuments">
            <Btn1 name="Adjuntar documentos" size={[140, 25]} />
          </div>
        </div>
      )}
    </div>
  );
}
