import { useEffect, useState } from "react";
import "../styles/plantillaPostulante.css";
import { Btn1 } from "../components/Btn1";
import axios from "axios";

export function PlantillaPostulante() {

  const idPostulante = localStorage.getItem("postulante")
  const [empleado, setEmpleado] = useState([])
  const [id, setId] = useState('')
  const [nombre, setNombre] = useState('')
  const [tipoId, setTipoId] = useState('')
  const [edad, setEdad] = useState('')
  const [sexo, setSexo] = useState('')
  const [estadoCivil, setEstadoCivil] = useState('')
  const [telefono, setTelefono] = useState('')
  const [fechaNacimiento, setFechaNacimiento] = useState('')
  const [direccionResidencia, setDireccionResidencia] = useState('')
  const [email, setEmail] = useState('')
  const [entidadEps, setEntidadEps] = useState('')
  const [entidadPension, setEntidadPension] = useState('')

  const registrarEmpleado = (e) => {
    e.preventDefault()
    setEmpleado(() => {
      return {
        id: id,
        nombre: nombre,
        tipoId: tipoId,
        edad: edad,
        sexo: sexo,
        estadoCivil: estadoCivil,
        telefono: telefono,
        fechaNacimiento: fechaNacimiento,
        direccionResidencia: direccionResidencia,
        email: email,
        entidadEps: entidadEps,
        entidadPension: entidadPension
      }
    })

    enviarInformacion(empleado)
  }

  const enviarInformacion = async (empleado) => {
    try {
      const response = await axios.post("http://localhost:3000/api/empleado", empleado)
      console.log(response)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    const getPostulante = async (id) => {
      try {
        const response = await axios.get(`http://localhost:3000/api/postulante/${id}`)
        setNombre(response.data[0].nombre)
        setId(response.data[0].id)
        setEmail(response.data[0].email)
        setTelefono(response.data[0].telefono)
      } catch (error) {
        console.log(error)
      }
    }

    getPostulante(idPostulante)
  }, [idPostulante])

  return (
    <div className="block_workhere">
      <div className="T-work-whit-us">
        <h2>Trabaja con nosotros</h2>
      </div>

      <div className="scroll">
        <h3>Información de empleado</h3>
        <form onSubmit={registrarEmpleado}>
          <div className="MainContent-plantilla">
            <div className="containerRow-plantilla">
              <div id="row1-plantilla">
                <h5>Información básica</h5>
              </div>
              <div id="row2-plantilla">
                <label>NOMBRE COMPLETO</label>
                <input type="text" value={nombre} readOnly/>

                <label>TIPO DE DOCUMENTO</label>
                <select name="" id="" value={tipoId} onChange={(e) => setTipoId(e.target.value)}>
                  <option>--Seleccionar--</option>
                  <option value="CC">Cédula de ciudadanía</option>
                  <option value="CE">Cédula de extranjería</option>
                  <option value="pasaporte">Pasaporte</option>
                </select>

                <label>NÚMERO DE DOCUMENTO</label>
                <input type="number" value={id} readOnly />
              </div>

              <div id="row2-plantilla">
                <label>EDAD</label>
                <input type="number" value={edad} onChange={(e) => setEdad(e.target.value)}/>

                <label>SEXO</label>
                <select name="" id="" value={sexo} onChange={(e) => setSexo(e.target.value)}>
                  <option>--Seleccionar</option>
                  <option value="masculino">Masculino</option>
                  <option value="femenino">Femenino</option>
                  <option value="otro">Otro</option>
                </select>

                <label>ESTADO CIVIL</label>
                <input type="text" value={estadoCivil} onChange={(e) => setEstadoCivil(e.target.value)}/>

                <label>TELÉFONO</label>
                <input type="number" value={telefono} readOnly />

                <label>FECHA DE NACIMIENTO</label>
                <input type="date" value={fechaNacimiento} onChange={(e) => setFechaNacimiento(e.target.value)}/>
              </div>
              <div id="row2-plantilla">
                <label>DIRECCIÓN DE RESIDENCIA</label>
                <input type="text" value={direccionResidencia} onChange={(e) => setDireccionResidencia(e.target.value)}/>

                <label>CORREO ELECTRÓNICO</label>
                <input type="email" value={email} readOnly />
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
                <input type="text" value={entidadEps} onChange={(e) => setEntidadEps(e.target.value)}/>

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
                <input type="text" value={entidadPension} onChange={(e) => setEntidadPension(e.target.value)}/>
              </div>
            </div>
            <Btn1 name="Enviar" size={[100, 40,]} />
          </div>
        </form>
      </div>
    </div>
  );
}
