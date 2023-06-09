import { useEffect, useState } from "react";
import "../styles/login.css";
import axios from "axios";

export function Login() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [usuario, setUsuario] = useState('')
  const [cargo, setCargo] = useState('')
  const [consulta, setConsulta] = useState(false)

  useEffect(() => {
    const redirect = () => {
      if (cargo === "Administrador") {
        localStorage.setItem('administrador', usuario)
        window.location.href = "/administrador"
      } else {
        localStorage.setItem('analista', usuario)
        window.location.href = "/analista"
      }
    }

    if (consulta) {
      redirect()
    } else {
      localStorage.removeItem('token')
      localStorage.removeItem("administrador")
      localStorage.removeItem("analista")
    }
  }, [usuario, cargo, consulta]);

  const usuarioAccess = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3000/api/login', { username, password });

      if (response.data.success) {
        localStorage.setItem('token', response.data.token)
        setUsuario(JSON.stringify(response.data.results[0]))
        setCargo(response.data.results[0].cargo)
        setConsulta(true)
      } else {
        setUsername('')
        setPassword('')
      }

    } catch (error) {
      window.location.href = "/"
      console.error("Error al iniciar sesion:", error)
    }
  };

  return (
    <>
      <div className="login">
        <div className="titleLogin">
          <h1>INGRESO EMPLEADO</h1>
        </div>
        <form className="formLogin" onSubmit={usuarioAccess}>
          <div className="userLogin">
            <label className="form-label">Usuario</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter your email address"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <div id="emailHelp" className="Email"></div>
          </div>
          <div className="passLogin">
            <label className="form-label">Contraseña</label>
            <input type="password" className="form-control" placeholder="Enter your password" required value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <button type="submit" className="botonLogin">
            Log In
          </button>
          <p>Olvidaste tu contraseña?</p>
        </form>
      </div>
    </>
  );
}
