import "../styles/MainBlock.css";
import "../styles/Usuario.css";

import { CampoDeTexto } from "./CampoDeTexto";
import { Btn1 } from "./Btn1";
import { Container, Row, Col } from "react-grid-system";
import { BuscarEmpleado } from "./BuscarEmpleado";
import { useEffect, useState } from "react";
import axios from "axios";

export function MainBlock() {
  const name = "Sofia Morales";
  const rol = "Auxiliar contable";

  //screen 1 listar usuarios
  if (window.location.pathname === "/administrador/listar-usuarios") {
    const [usuarios, setUsuarios] = useState([])
    const [boton, setBoton] = useState("Editar usuario")
    const [width, setWidth] = useState(120)

    useEffect(() => {
      const getUsuarios = async () => {
        try {
          const response = await axios.get('http://localhost:3000/api/usuarios', {
            headers: {
              authorization: `Bearer ${localStorage.getItem('token')}`
            }
          })
          setUsuarios(response.data)
        } catch (error) {
          console.log(error)
        }
      }

      getUsuarios();
    }, []);

    return (
      <div className="main-content-users">
        <BuscarEmpleado />
        <div className="main-block">
          <div id="title">
            <h1>Usuarios</h1>
          </div>
          <div className="scrollEmployees">
            {usuarios.map((usuario => (
              <div className="usuario" key={usuario.id}>
                <div className="row">
                  <div className="col"><h3>{usuario.nombre}</h3></div>
                  <div className="col"><h4>Usuario: <br />{usuario.usuario}</h4></div>
                  <div className="col"><h4>Cédula: {usuario.id}</h4></div>
                </div>
                <div className="row">
                  <div className="col"><h4>{usuario.cargo}</h4></div>
                  <div className="col"><h4>Contraseña: *******</h4></div>
                  <div className="col"><h4><Btn1 name={boton} size={[width, 30]} /></h4></div>
                </div>
              </div>
            )))}
          </div>
        </div>
      </div>
    );
  }
  //screen 2 agregar usuarios
  else if (window.location.pathname === "/administrador/agregar-usuarios") {
    const [usuarios, setUsuarios] = useState([])
    const [boton, setBoton] = useState("Editar usuario")
    const [width, setWidth] = useState(120)

    useEffect(() => {
      const getUsuarios = async () => {
        try {
          const response = await axios.get('http://localhost:3000/api/usuarios', {
            headers: {
              authorization: `Bearer ${localStorage.getItem('token')}`
            }
          })
          setUsuarios(response.data)
        } catch (error) {
          console.log(error)
        }
      }

      getUsuarios();
    }, []);

    return (
      <div className="main-content-users">
        <div className="Container-add-user">
          <div id="title">
            <h3>Agregar Usuario</h3>
          </div>
          <div id="content-add-user">
            <div>
              <h4>Documento de identidad</h4>
              <input
                type="text"
                name=""
                id="in-add-user"
                placeholder="Input Field"
              />
            </div>
            <div>
              <h4>Nombre completo</h4>
              <input
                type="text"
                name=""
                id="in-add-user"
                placeholder="Input Field"
              />
            </div>
            <div>
              <h4>Cargo</h4>
              <input
                type="text"
                name=""
                id="in-add-user"
                placeholder="Input Field"
              />
            </div>
            <div>
              <h4>Contraseña</h4>
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
            {usuarios.map((usuario => (
              <div className="usuario" key={usuario.id}>
                <div className="row">
                  <div className="col"><h3>{usuario.nombre}</h3></div>
                  <div className="col"><h4>Usuario: <br />{usuario.usuario}</h4></div>
                  <div className="col"><h4>Cédula: {usuario.id}</h4></div>
                </div>
                <div className="row">
                  <div className="col"><h4>{usuario.cargo}</h4></div>
                  <div className="col"><h4>Contraseña: *******</h4></div>
                  <div className="col"><h4><Btn1 name={boton} size={[width, 30]} /></h4></div>
                </div>
              </div>
            )))}
          </div>
        </div>
      </div>
    );
  }
}
