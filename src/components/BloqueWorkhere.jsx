import { useEffect, useState } from "react";
import "../styles/bloqueWorkhere.css";
import axios from "axios";

import { Modal } from "./Modal";

export function BloqueWorkhere() {
  const [vacantes, setVacantes] = useState([]);
  const [selectedVacante, setSelectedVacante] = useState(null);

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

  const openModal = (vacante) => {
    setSelectedVacante(vacante);
  };

  const closeModal = () => {
    setSelectedVacante(null);
  };

  return (
    <div className="block_workhere">
      <div className="T-work-whit-us">
        <h2>Trabaja con nosotros</h2>
      </div>
      <div className="scrollVacantes">
        <div id="container">
          {vacantes.map((vacante) => (
            <div className="vacante-container" key={vacante.id}>
              <div id="content-vacante">
                <h3>{vacante.nombre}</h3>
                <p>{vacante.descripcion}</p>
                <button className="btn-postularme" onClick={() => openModal(vacante)}>
                  Postularme
                </button>
              </div>
              <div id="img-vacante">
                <img src="/abstract-shape.png" />
              </div>
            </div>
          ))}
        </div>
      </div>
      {selectedVacante && <Modal vacante={selectedVacante} onClose={closeModal} />}
    </div>
  );
}