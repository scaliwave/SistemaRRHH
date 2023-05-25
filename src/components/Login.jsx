import "../styles/login.css";

export function Login() {
  return (
    <>
      <div className="login">
        <div className="titleLogin">
          <h1>INGRESO EMPLEADO</h1>
        </div>
        <form className="formLogin">
          <div className="userLogin">
            <label className="form-label">usuario</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter your email address"
            />
            <div id="emailHelp" className="Email"></div>
          </div>
          <div className="passLogin">
            <label className="form-label">Contraseña</label>
            <input type="password" className="form-control" placeholder="Enter your password" />
          </div>
          <button type="submit" className="botonLogin" onClick={(e)=>{console.log(e.target)}}>
            Log In
          </button>
          <p>Olvidaste tu contraseña?</p>
        </form>
      </div>
    </>
  );
}
