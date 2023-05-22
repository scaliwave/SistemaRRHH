import { Link } from "react-router-dom";

export function TrabajaConNosotros() {
  return (
    <>
      <div className="trabajaAqui">
        <div>
          <Link to={"/"} id="option"><h1>Trabaja con nosotros</h1></Link>
          <hr className="hr" />
          <p>
            {" "}
            Entérate de las numerosas ofertas y postulate a la que mas te llame la
            atención.
          </p>
        </div>
      </div>
    </>
  );
}
