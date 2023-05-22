import "../styles/login.css";

export function Login() {
  return (
    <>
      <div className="login">
        <div className="title">
          <h1>INGRESO EMPLEADO</h1>
        </div>
        <form className="form">
          <div className="usuario">
            <label className="form-label">usuario</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter your email address"
            />
            <div id="emailHelp" className="Email"></div>
          </div>
          <div className="contra">
            <label className="form-label">Contraseña</label>
            <input type="password" className="form-control" placeholder="Enter your password" />
          </div>
          <button type="submit" className="boton">
            Log In
          </button>
          <p>Olvidaste tu contraseña?</p>
        </form>
      </div>
    </>
  );
}
