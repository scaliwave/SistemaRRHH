import { useEffect, useState } from "react";
import axios from "axios";

import "../styles/gestionarVacantes.css";

import { BiEditAlt } from "react-icons/bi";

export function GestionVacantes() {
  const [vacantes, setVacantes] = useState([]);
  const [editingIndex, setEditingIndex] = useState(-1);

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

  const handleEditClick = (index) => {
    setEditingIndex(index);
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
                <div className="vacante-container-" key={vacante.id}>
                  <div id="content-vacante-">
                    <div id="editCampo">
                      {editingIndex === index ? (
                        <input
                          type="text"
                          value={vacante.nombre}
                          onChange={(e) => handleNombreChange(e, index)}
                        />
                      ) : (
                        <h3>{vacante.nombre}</h3>
                      )}
                      <BiEditAlt onClick={() => handleEditClick(index)} />
                    </div>
                    <div id="editCampo">
                      {editingIndex === index ? (
                        <textarea
                          value={vacante.descripcion}
                          onChange={(e) => handleDescripcionChange(e, index)}
                        />
                      ) : (
                        <p>{vacante.descripcion}</p>
                      )}
                      <BiEditAlt onClick={() => handleEditClick(index)} />
                    </div>
                  </div>
                  <div id="editImg-vacante">
                    {/* <img src={vacante.imageUrl} alt="Vacante" /> */}
                    <img src="/abstract-shape.png" alt="vacante" />
                    <input
                      type="file"
                      onChange={(e) => handleImageChange(e, index)}
                    />
                  </div>
                </div>
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
        <div>
          <button className="btn-gestion-vacantes">Guardar</button>
        </div>
      </div>
    </div>
  );
}
