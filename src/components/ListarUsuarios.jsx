import axios from "axios";
import { useEffect, useState } from "react";
import { BuscarEmpleado } from "./BuscarEmpleado";
import { Btn1 } from "./Btn1";
import { AiOutlineClose } from "react-icons/ai";
import { CampoDeTexto } from "./CampoDeTexto";

export function ListarUsuarios() {
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
    <div className="main-content-users">
      <BuscarEmpleado
        onMostrar={(mostrar, idUsuario) => mostrarUsuario(mostrar, idUsuario)}
        nameTitle="Usuario"
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
                <div className="closeDatosPostulante" onClick={ocultarUsuario}>
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
                    <ul>
                      Usuario: <br />{" "}
                      <CampoDeTexto
                        campoTexto={usuario.usuario}
                        opcionEditar={usuario.editMode}
                        onGuardar={(nuevoTexto) =>
                          guardarTexto(usuario.id, nuevoTexto, "usuario")
                        }
                      ></CampoDeTexto>
                    </ul>
                  </div>
                  <div className="col">
                    <ul>Cédula: {usuario.id}</ul>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <ul>
                      <CampoDeTexto
                        campoTexto={usuario.cargo}
                        opcionEditar={usuario.editMode}
                        onGuardar={(nuevoTexto) =>
                          guardarTexto(usuario.id, nuevoTexto, "cargo")
                        }
                      ></CampoDeTexto>
                    </ul>
                  </div>
                  <div className="col">
                    <ul>Contraseña: *******</ul>
                  </div>
                  <div className="col">
                    <ul>
                      <Btn1
                        name={usuario.editMode ? "Guardar" : "Editar usuario"}
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
