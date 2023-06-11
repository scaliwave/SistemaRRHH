import { useState, useEffect } from "react";
import { Btn1 } from "./Btn1";
import axios from "axios";

export function AgregarUsuarios() {
  const [usuarios, setUsuarios] = useState([]);
  const [boton, setBoton] = useState("Editar usuario");
  const [width, setWidth] = useState(120);

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

    getUsuarios();
  }, []);

  return (
    <div className="main-content-users">
      <div className="container-add-user">
        <div id="title">
          <h3>Agregar Usuario</h3>
        </div>
        <div id="conent-add-user">
          <div>
            <p>Usuario</p>
            <input
              type="text"
              name=""
              id="in-add-user"
              placeholder="Input Field"
            />
          </div>
          <div>
            <p>Documento de identidad</p>
            <input
              type="text"
              name=""
              id="in-add-user"
              placeholder="Input Field"
            />
          </div>
          <div>
            <p>Nombre completo</p>
            <input
              type="text"
              name=""
              id="in-add-user"
              placeholder="Input Field"
            />
          </div>
          <div>
            <p>Cargo</p>
            <input
              type="text"
              name=""
              id="in-add-user"
              placeholder="Input Field"
            />
          </div>
          <div>
            <p>Contraseña</p>
            <input
              type="text"
              name=""
              id="in-add-user"
              placeholder="Input Field"
            />
          </div>
          <div id="btn-add-user">
            <Btn1 name="Agregar" size={[100, 30]} />
          </div>
        </div>
      </div>

      <div className="main-block">
        <div id="title">
          <h1>Usuarios</h1>
        </div>
        <div className="scrollEmployees">
          {usuarios.map((usuario) => (
            <div className="usuario" key={usuario.id}>
              <div className="row">
                <div className="col">
                  <h3>{usuario.nombre}</h3>
                </div>
                <div className="col">
                  <p>
                    Usuario: <br />
                    {usuario.usuario}
                  </p>
                </div>
                <div className="col">
                  <p>Cédula: {usuario.id}</p>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <p>{usuario.cargo}</p>
                </div>
                <div className="col">
                  <p>Contraseña: *******</p>
                </div>
                <div className="col"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
