import { useState, useEffect } from "react";
import { Btn1 } from "./Btn1";
import axios from "axios";

export function AgregarUsuarios() {
  const [id, setId] = useState('')
  const [nombre, setNombre] = useState('')
  const [cargo, setCargo] = useState('')
  const [usuario, setUsuario] = useState('')
  const [contraseña, setContraseña] = useState('')

  const [usuarios, setUsuarios] = useState([]);
  const [usuarioRegistrado, setUsuarioRegistrado] = useState([]);

  const registrarUsuario = async (e) => {
    e.preventDefault()

    try {
      const response = await axios.post("http://localhost:3000/api/usuarios", {id, nombre, cargo, usuario, contraseña}, {
        headers: {
          authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      setUsuarioRegistrado(response.data)
      setId('')
      setNombre('')
      setCargo('')
      setUsuario('')
      setContraseña('')
    } catch (error) {
      console.log(error);
    }
  };

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
  }, [usuarioRegistrado]);

  return (
    <div className="main-content-users">
      <div className="container-add-user">
        <div id="title">
          <h3>Agregar Usuario</h3>
        </div>
        <form onSubmit={registrarUsuario}>
          <div id="conent-add-user">
            <div>
              <p>Documento de identidad</p>
              <input
                type="text"
                name=""
                id="in-add-user"
                placeholder="Input Field"
                value={id}
                required
                onChange={(e) => setId(e.target.value)}
              />
            </div>
            <div>
              <p>Nombre completo</p>
              <input
                type="text"
                name=""
                id="in-add-user"
                placeholder="Input Field"
                value={nombre}
                required
                onChange={(e) => setNombre(e.target.value)}
              />
            </div>
            <div>
              <p>Cargo</p>
              <input
                type="text"
                name=""
                id="in-add-user"
                placeholder="Input Field"
                value={cargo}
                required
                onChange={(e) => setCargo(e.target.value)}
              />
            </div>
            <div>
              <p>Usuario</p>
              <input
                type="text"
                name=""
                id="in-add-user"
                placeholder="Input Field"
                value={usuario}
                required
                onChange={(e) => setUsuario(e.target.value)}
              />
            </div>
            <div>
              <p>Contraseña</p>
              <input
                type="text"
                name=""
                id="in-add-user"
                placeholder="Input Field"
                value={contraseña}
                required
                onChange={(e) => setContraseña(e.target.value)}
              />
            </div>
            <div id="btn-add-user">
              <Btn1 name="Agregar" size={[100, 30]} />
            </div>
          </div>
        </form>
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
                  <ul><h3>{usuario.nombre}</h3></ul>
                </div>
                <div className="col">
                  <ul>
                    <p>
                      Usuario: <br />
                      {usuario.usuario}
                    </p>
                  </ul>
                </div>
                <div className="col">
                  <ul><p>Cédula: {usuario.id}</p></ul>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <ul><p>{usuario.cargo}</p></ul>
                </div>
                <div className="col">
                  <ul><p>Contraseña: *******</p></ul>
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
