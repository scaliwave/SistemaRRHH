import { useEffect, useState } from "react";
import axios from "axios";

import "../styles/gestionarVacantes.css";

import { BiEditAlt, BiSave } from "react-icons/bi";
import { Btn1 } from "./Btn1";

export function GestionVacantes() {
  const [vacantes, setVacantes] = useState([]);
  const [width, setWidth] = useState(120);
  const [editableNombre, setEditableNombre] = useState(false);
  const [editableDescripcion, setEditableDescripcion] = useState(false)
  const [editingIndex, setEditingIndex] = useState(-1);

  const editarVacante = (e, id) => {
    e.preventDefault();
    setVacantes((prevVacantes) => {
      return prevVacantes.map((vacante) => {
        if (vacante.id === id) {
          return {
            ...vacante,
            editMode: !vacante.editMode,
          };
        }
        return vacante;
      });
    });
  };

  const editarNombre = (index) => {
    setEditableNombre(true)
    setEditingIndex(index)
  }

  const editarDescripcion = (index) => {
    setEditableDescripcion(true)
    setEditingIndex(index)
  }

  const guardarNombre = () => {
    setEditableNombre(false)
  };

  const guardarDescripcion = () => {
    setEditableDescripcion(false)
  }

  useEffect(() => {
    const updateVacante = async(id, vacante) => {
      try {
        const response = await axios.put(
          `http://localhost:3000/api/vacantes/${id}`,
          vacante,
          {
            headers: {
              authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
      } catch (error) {
        console.log(error)
      }
    };

    vacantes.forEach((vacante) => {
      if (vacante.editMode) {
        updateVacante(vacante.id, vacante);
      }
    });
  }, [vacantes]);

  useEffect(() => {
    const getVacantes = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/vacantes");
        setVacantes(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    getVacantes();
  }, []);

  const handleNombreChange = (event, index) => {
    const updatedVacantes = [...vacantes];
    updatedVacantes[index].nombre = event.target.value;
    setVacantes(updatedVacantes);
  };

  const handleDescripcionChange = (event, index) => {
    const updatedVacantes = [...vacantes];
    updatedVacantes[index].descripcion = event.target.value;
    setVacantes(updatedVacantes);
  };

  const handleImageChange = (event, index) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      const imageUrl = e.target.result;
      const updatedVacantes = [...vacantes];
      updatedVacantes[index].imageUrl = imageUrl;
      setVacantes(updatedVacantes);
    };

    reader.readAsDataURL(file);
  };

  return (
    <div className="main-content-users">
      <div className="main-block">
        <div className="block_gestionarVacantes">
          <div className="T-work-whit-us">
            <h2>Vacantes</h2>
          </div>
          <div className="scroll">
            <div id="container">
              {vacantes.map((vacante, index) => (
                <form onSubmit={(e) => editarVacante(e, vacante.id)}>
                  <div className="vacante-container-" key={vacante.id}>
                    <div id="content-vacante-">
                      <div id="editCampo">
                        {editableNombre && editingIndex === index ? (
                          <div>
                            <input
                              type="text"
                              value={vacante.nombre}
                              onChange={(e) => handleNombreChange(e, index)}
                            />
                            <div className="editar"><BiSave onClick={guardarNombre}></BiSave></div>
                          </div>
                        ) : (
                          <h3>{vacante.nombre}</h3>
                        )}
                        {vacante.editMode && !editableNombre && (<div className="editar"><BiEditAlt onClick={()=> {editarNombre(index)}} /></div>)}
                      </div>
                      <div id="editCampo">
                        {editableDescripcion && editingIndex === index ? (
                          <div>
                            <textarea
                              value={vacante.descripcion}
                              onChange={(e) => handleDescripcionChange(e, index)}
                            />
                            <div className="editar"><BiSave onClick={guardarDescripcion}></BiSave></div>
                          </div>
                        ) : (
                          <p>{vacante.descripcion}</p>
                        )}
                        {vacante.editMode && !editableDescripcion && (<div className="editar"><BiEditAlt onClick={() => editarDescripcion(index)} /></div>)}
                      </div>
                    </div>
                    <div id="editImg-vacante">
                      {/* <img src={vacante.imageUrl} alt="Vacante" /> */}
                      <img src="/abstract-shape.png" alt="vacante" />
                      {vacante.editMode && (
                        <input
                          type="file"
                          onChange={(e) => handleImageChange(e, index)}
                        />
                      )}
                    </div>
                    <div>
                      <Btn1
                        name={vacante.editMode ? "Guardar" : "Editar vacante"}
                        size={[width, 30]}
                      />
                    </div>
                  </div>
                </form>
              ))}
            </div>
          </div>
        </div>
        <div>
          <button className="btn-gestion-vacantes">Agregar vacante</button>
        </div>
      </div>
      <div className="menu-gestion-vacantes">
        <div>
          <button className="btn-gestion-vacantes">Previsualizar</button>
        </div>
      </div>
    </div>
  );
}
