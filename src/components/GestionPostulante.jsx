import { useState, useEffect } from "react";
import { Btn1 } from "./Btn1";
import axios from "axios";
import { AiOutlineClose } from "react-icons/ai";
import "../styles/gestionPostulante.css"

export function GestionPostulante() {
  const [usuarios, setUsuarios] = useState([]);

  const [buscar, setBuscar] = useState(false);
  const [usuarioId, setUsuarioId] = useState("");

  const editarUsuario = (e, id) => {
    e.preventDefault();
    setUsuarios((prevUsuarios) => {
      return prevUsuarios.map((usuario) => {
        if (usuario.id === id) {
          return {
            ...usuario,
            editMode: !usuario.editMode,
          };
        }
        return usuario;
      });
    });
  };

 

  const ocultarUsuario = () => {
    setBuscar(false);
  };

  useEffect(() => {
    const updateUsuario = async (id, usuario) => {
      try {
        const response = await axios.put(
          `http://localhost:3000/api/usuarios/${id}`,
          usuario,
          {
            headers: {
              authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    usuarios.forEach((usuario) => {
      if (usuario.editMode) {
        updateUsuario(usuario.id, usuario);
      }
    });
  }, [usuarios]);

  useEffect(() => {
    const getUsuarios = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/usuarios", {
          headers: {
            authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        setUsuarios(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    const getUsuario = async (id) => {
      try {
        const response = await axios.get(
          `http://localhost:3000/api/usuarios/${id}`,
          {
            headers: {
              authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        setUsuarios(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    if (!buscar) {
      getUsuarios();
    } else {
      getUsuario(usuarioId);
    }
  }, [buscar, usuarioId]);

  return (
    <div className="main-content-postulantes">
      <div className="main-block-postulantes">
        <div id="title">
          <h1>Postulantes</h1>
        </div>
        <div className="scrollEmployees">
          {usuarios.map((usuario) =>(            
              <div className="usuario" key={usuario.key}>
                <div className="row">
                  <div className="col">
                    <h3>{usuario.nombre}</h3>
                  </div>
                  <div className="col">
                    <ul>
                      Edad: <br />
                      {usuario.edad}
                    </ul>
                  </div>
                  <div className="col">
                    <ul>Cédula: {usuario.id}</ul>
                  </div>
                  <div className="col">
                    <ul>
                      <form >
                        <label>Estado</label>
                        <select name="Estado" id="">
                          <option value="">Postulado</option>
                          <option value="">Hoja de vida vista</option>
                          <option value="">En proceso</option>
                          <option value="">Finalista</option>
                          <option value="">Proceso finalizado</option>
                        </select>
                      </form>
                    </ul>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <ul>{usuario.cargo}</ul>
                  </div>
                  <div className="col">
                    <ul>
                      <Btn1 name="Hoja de vida" size={[110, 30]} />
                    </ul>
                  </div>
                  <div className="col">
                    <ul></ul>
                  </div>
                  <div className="col">
                    <ul></ul>
                  </div>
                </div>
              </div>
          ))}
        </div>
      </div>
    </div>
  );
}
