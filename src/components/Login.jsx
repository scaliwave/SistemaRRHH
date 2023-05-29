import { useState } from "react";
import "../styles/login.css";
import axios from "axios";

export function Login() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const usuarioAccess = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3000/api/login', {username, password});

      localStorage.setItem('token', response.data.token)

      window.location.href = "/administrador"
      
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
            <input type="password" className="form-control" placeholder="Enter your password" required value={password} onChange={(e) => setPassword(e.target.value)}/>
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
