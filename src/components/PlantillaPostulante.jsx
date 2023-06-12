import "../styles/plantillaPostulante.css";

export function PlantillaPostulante() {
  return (
    <div className="block_workhere">
      <div className="T-work-whit-us">
        <h2>Trabaja con nosotros</h2>
      </div>

      <div className="scroll">
        <h3>Información de empleado</h3>
        <div className="MainContent-plantilla">
          <div className="containerRow-plantilla">
            <div id="row1-plantilla">
              <h5>Información básica</h5>
            </div>
            <div id="row2-plantilla">
              <label>NOMBRE COMPLETO</label>
              <input type="text" />

              <label>TIPO DE DOCUMENTO</label>
              <select name="" id="">
                <option value="CC">Cedula de ciudadanía</option>
                <option value="CE">Cédula extranjería</option>
                <option value="pasaporte">pasaporte</option>
              </select>

              <label>NÚMERO DE DOCUMENTO</label>
              <input type="number" />
            </div>

            <div id="row2-plantilla">
              <label>EDAD</label>
              <input type="number" />

              <label>SEXO</label>
              <select name="" id="">
                <option value="masculino">Masculino</option>
                <option value="femenino">Femenino</option>
                <option value="otro">Otro</option>
              </select>

              <label>ESTADO CIVIL</label>
              <input type="text" />

              <label>TELÉFONO</label>
              <input type="number" />

              <label>FECHA DE NACIMIENTO</label>
              <input type="date" />
            </div>
            <div id="row2-plantilla">
              <label>DIRECCIÓN DE RESIDENCIA</label>
              <input type="text" />

              <label>CORREO ELECTRÓNICO</label>
              <input type="email" />
            </div>
          </div>
          <div className="containerRow-plantilla">
            <div id="row1-plantilla">
              <h5>Información complementaria</h5>
            </div>
            <div id="row2-plantilla">
              <div id="containterCheckbox">
                <label>¿ESTÁ AFILIADO A EPS?</label>
                <div id="checkbox-plantilla">
                  <label>SI</label>
                  <input type="checkbox" value="si" />
                  <label>NO</label>
                  <input type="checkbox" value="no" />
                </div>
              </div>

              <label>NOMBRE DE LA ENTIDAD</label>
              <input type="text" />

              <div>
                <label>¿ESTÁ AFILIADO A PENSIÓN?</label>
                <div id="checkbox-plantilla">
                  <label>SI</label>
                  <input type="checkbox" value="si" />
                  <label>NO</label>
                  <input type="checkbox" value="no" />
                </div>
              </div>
              <label>NOMBRE DE LA ENTIDAD</label>
              <input type="text" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
