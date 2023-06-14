import { useState, useEffect } from "react";
import { Btn1 } from "./Btn1";
import axios from "axios";
import "../styles/gestionPostulante.css"

export function GestionPostulante() {
  const [postulantes, setPostulantes] = useState([]);
  const [width, setWidth] = useState(120);
  const [estado, setEstado] = useState('')

  const editarEstado = (e, id) => {
    e.preventDefault();
    setPostulantes((prevPostulantes) => {
      return prevPostulantes.map((postulante) => {
        if (postulante.id === id) {
          return {
            ...postulante,
            editMode: !postulante.editMode,
          };
        }
        return postulante;
      });
    });
  };

  useEffect(() => {
    const updatePostulante = async (id, postulante) => {
      try {
        const response = await axios.put(
          `http://localhost:3000/api/postulante/${id}`,
          postulante,
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

    postulantes.forEach((postulante) => {
      if (postulante.editMode) {
        const updatedPostulante = {
          ...postulante,
          estado: estado
        }
        updatePostulante(postulante.id, updatedPostulante);
        setPostulantes((prevPostulantes) => {
          return prevPostulantes.map((postulante) => {
            if (postulante.id === postulante.id) {
              const updatedPostulante = {
                ...postulante,
                estado: estado,
              };
              return updatedPostulante;
            }
            return postulante;
          });
        });
      }
    });
  }, [postulantes, estado]);

  useEffect(() => {
    const getPostulantes = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/postulantes", {
          headers: {
            authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        setPostulantes(response.data.postulantes);
      } catch (error) {
        console.log(error);
      }
    };

    getPostulantes()
  }, []);

  return (
    <div className="main-content-postulantes">
      <div className="main-block-postulantes">
        <div id="title">
          <h1>Postulantes</h1>
        </div>
        <div className="scrollEmployees">
          {postulantes.map((postulante, index) => (
            <form onSubmit={(e) => editarEstado(e, postulante.id)} key={postulante.id}>
              <div className="usuario">
                <div className="row">
                  <div className="col">
                    <ul><h3>{postulante.nombre}</h3></ul>
                  </div>
                  <div className="col">
                    <ul>Cédula: {postulante.id}</ul>
                  </div>
                  <div className="col">
                    {!postulante.editMode ? (
                      <ul>Estado: {postulante.estado}</ul>
                    ) : (
                      <ul>
                        <label>Estado</label>
                        <select name="Estado" id="" value={estado} onChange={(e) => setEstado(e.target.value)}>
                          <option>--Seleccionar--</option>
                          <option value="Postulado">Postulado</option>
                          <option value="Hoja de vida vista">Hoja de vida vista</option>
                          <option value="En proceso">En proceso</option>
                          <option value="Finalista">Finalista</option>
                          <option value="Proceso finalizado">Proceso finalizado</option>
                        </select>
                      </ul>
                    )}
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <ul>{postulante.cargo}</ul>
                  </div>
                  <div className="col">
                    <ul>
                      <Btn1
                        name={postulante.editMode ? "Guardar" : "Editar estado"}
                        size={[width, 30]}
                      />
                    </ul>
                  </div>
                </div>
              </div>
            </form>
          ))}
        </div>
      </div>
    </div>
  );
}
