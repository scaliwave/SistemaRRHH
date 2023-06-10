import "../styles/MainBlock.css";
import "../styles/Usuario.css";

import { CampoDeTexto } from "./CampoDeTexto";
import { Btn1 } from "./Btn1";
import { BuscarEmpleado } from "./BuscarEmpleado";
import { useEffect, useState } from "react";
import axios from "axios";
import { AiOutlineClose } from "react-icons/ai";

export function MainBlock() {
  const [id, setId] = useState("");
  const [nombre, setNombre] = useState("");
  const [cargo, setCargo] = useState("");
  const [usuario, setUsuario] = useState("");
  const [contraseña, setContraseña] = useState("");

  const name = "Sofia Morales";
  const rol = "Auxiliar contable";

  //screen 1 listar usuarios
  if (window.location.pathname === "/administrador/listar-usuarios") {
    const [usuarios, setUsuarios] = useState([]);
    const [width, setWidth] = useState(120);
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

    const guardarTexto = (id, nuevoTexto, campo) => {
      setUsuarios((prevUsuarios) => {
        return prevUsuarios.map((usuario) => {
          if (usuario.id === id) {
            const updatedUsuario = {
              ...usuario,
              [campo]: nuevoTexto,
            };
            return updatedUsuario;
          }
          return usuario;
        });
      });
    };

    const mostrarUsuario = (mostrar, idUsuario) => {
      setBuscar(mostrar);
      setUsuarioId(idUsuario);
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
          const response = await axios.get(
            "http://localhost:3000/api/usuarios",
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
      <div className="main-content-users">
        <BuscarEmpleado
          onMostrar={(mostrar, idUsuario) => mostrarUsuario(mostrar, idUsuario)} nameTitle="Usuario"
        />
        <div className="main-block">
          <div id="title">
            <h1>Usuarios</h1>
          </div>
          <div className="scrollEmployees">
            {usuarios.map((usuario) => (
              <form
                onSubmit={(e) => editarUsuario(e, usuario.id)}
                key={usuario.id}
              >
                {buscar && (
                  <div
                    className="closeDatosPostulante"
                    onClick={ocultarUsuario}
                  >
                    <AiOutlineClose
                      style={{ color: "#1537A6", cursor: "pointer" }}
                    ></AiOutlineClose>
                  </div>
                )}
                <div className="usuario">
                  <div className="row">
                    <div className="col">
                      <h3>
                        <CampoDeTexto
                          campoTexto={usuario.nombre}
                          opcionEditar={usuario.editMode}
                          onGuardar={(nuevoTexto) =>
                            guardarTexto(usuario.id, nuevoTexto, "nombre")
                          }
                        ></CampoDeTexto>
                      </h3>
                    </div>
                    <div className="col">
                      <h4>
                        Usuario: <br />{" "}
                        <CampoDeTexto
                          campoTexto={usuario.usuario}
                          opcionEditar={usuario.editMode}
                          onGuardar={(nuevoTexto) =>
                            guardarTexto(usuario.id, nuevoTexto, "usuario")
                          }
                        ></CampoDeTexto>
                      </h4>
                    </div>
                    <div className="col">
                      <h4>Cédula: {usuario.id}</h4>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <h4>
                        <CampoDeTexto
                          campoTexto={usuario.cargo}
                          opcionEditar={usuario.editMode}
                          onGuardar={(nuevoTexto) =>
                            guardarTexto(usuario.id, nuevoTexto, "cargo")
                          }
                        ></CampoDeTexto>
                      </h4>
                    </div>
                    <div className="col">
                      <h4>Contraseña: *******</h4>
                    </div>
                    <div className="col">
                      <h4>
                        <Btn1
                          name={usuario.editMode ? "Guardar" : "Editar usuario"}
                          size={[width, 30]}
                        />
                      </h4>
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
  //screen 2 agregar usuarios
  else if (window.location.pathname === "/administrador/agregar-usuarios") {
    const [usuarios, setUsuarios] = useState([]);
    const [boton, setBoton] = useState("Editar usuario");
    const [width, setWidth] = useState(120);

    useEffect(() => {
      const getUsuarios = async () => {
        try {
          const response = await axios.get(
            "http://localhost:3000/api/usuarios",
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
            {usuarios.map((usuario) => (
              <div className="usuario" key={usuario.id}>
                <div className="row">
                  <div className="col">
                    <h3>{usuario.nombre}</h3>
                  </div>
                  <div className="col">
                    <h4>
                      Usuario: <br />
                      {usuario.usuario}
                    </h4>
                  </div>
                  <div className="col">
                    <h4>Cédula: {usuario.id}</h4>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <h4>{usuario.cargo}</h4>
                  </div>
                  <div className="col">
                    <h4>Contraseña: *******</h4>
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
  //screen 3 gestion de empleados
  else if (window.location.pathname === "/analista/gestion-de-empleados") {
    const [usuarios, setUsuarios] = useState([]);
    const [width, setWidth] = useState(120);
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

    const guardarTexto = (id, nuevoTexto, campo) => {
      setUsuarios((prevUsuarios) => {
        return prevUsuarios.map((usuario) => {
          if (usuario.id === id) {
            const updatedUsuario = {
              ...usuario,
              [campo]: nuevoTexto,
            };
            return updatedUsuario;
          }
          return usuario;
        });
      });
    };

    const mostrarUsuario = (mostrar, idUsuario) => {
      setBuscar(mostrar);
      setUsuarioId(idUsuario);
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
          const response = await axios.get(
            "http://localhost:3000/api/usuarios",
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
      <div className="main-content-users">
        <BuscarEmpleado
          onMostrar={(mostrar, idUsuario) => mostrarUsuario(mostrar, idUsuario)} nameTitle="Empleado"
        />
        <div className="main-block">
          <div id="title">
            <h1>Empleados</h1>
          </div>
          <div className="scrollEmployees">
            {usuarios.map((usuario) => (
              <form
                onSubmit={(e) => editarUsuario(e, usuario.id)}
                key={usuario.id}
              >
                {buscar && (
                  <div
                    className="closeDatosPostulante"
                    onClick={ocultarUsuario}
                  >
                    <AiOutlineClose
                      style={{ color: "#1537A6", cursor: "pointer" }}
                    ></AiOutlineClose>
                  </div>
                )}
                <div className="usuario">
                  <div className="row">
                    <div className="col">
                      <h3>
                        <CampoDeTexto
                          campoTexto={usuario.nombre}
                          opcionEditar={usuario.editMode}
                          onGuardar={(nuevoTexto) =>
                            guardarTexto(usuario.id, nuevoTexto, "nombre")
                          }
                        ></CampoDeTexto>
                      </h3>
                    </div>
                    <div className="col">
                      <h4>
                        Usuario: <br />{" "}
                        <CampoDeTexto
                          campoTexto={usuario.usuario}
                          opcionEditar={usuario.editMode}
                          onGuardar={(nuevoTexto) =>
                            guardarTexto(usuario.id, nuevoTexto, "usuario")
                          }
                        ></CampoDeTexto>
                      </h4>
                    </div>
                    <div className="col">
                      <h4>Cédula: {usuario.id}</h4>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <h4>
                        <CampoDeTexto
                          campoTexto={usuario.cargo}
                          opcionEditar={usuario.editMode}
                          onGuardar={(nuevoTexto) =>
                            guardarTexto(usuario.id, nuevoTexto, "cargo")
                          }
                        ></CampoDeTexto>
                      </h4>
                    </div>
                    <div className="col">
                      <h4>Contraseña: *******</h4>
                    </div>
                    <div className="col">
                      <h4>
                        <Btn1
                          name={usuario.editMode ? "Guardar" : "Editar usuario"}
                          size={[width, 30]}
                        />
                      </h4>
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
}
