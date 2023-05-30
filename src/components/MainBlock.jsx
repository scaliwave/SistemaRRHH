import "../styles/MainBlock.css";
import "../styles/Usuario.css";

import { CampoDeTexto } from "./CampoDeTexto";
import { Btn1 } from "./Btn1";
import { Container, Row, Col } from "react-grid-system";
import { BuscarEmpleado } from "./BuscarEmpleado";

export function MainBlock() {

  const [id, setId] = useState('');
  const [nombre, setNombre] = useState('')
  const [cargo, setCargo] = useState('')
  const [usuario, setUsuario] = useState('')
  const [contraseña, setContraseña] = useState('')

  const name = "Sofia Morales";
  const rol = "Auxiliar contable";
  //screen 1 listar usuarios
  if (window.location.pathname === "/administrador/listar-usuarios") {
    return (
      <div className="main-content-users">
        <BuscarEmpleado />
        <div className="main-block">
          <div id="title">
            <h1>Usuarios</h1>
          </div>
          <div className="scrollEmployees">
            <div className="usuario">
              <Container>
                <Row>
                  <Col>
                    <h3>{name}</h3>
                  </Col>
                  <Col>
                    <CampoDeTexto />
                  </Col>
                  <Col>
                    <CampoDeTexto />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <p>{rol}</p>
                  </Col>
                  <Col>
                    <CampoDeTexto />
                  </Col>
                  <Col />
                </Row>
                <Row>
                  <Col />
                  <Col />
                  <Col />
                  <Col>
                    <Btn1 name="Guardar" size={[70, 30]} />
                  </Col>
                </Row>
              </Container>
            </div>
          </div>
        </div>
      </div>
    );
  }
  //screen 2 agregar usuarios
  else if (window.location.pathname === "/administrador/agregar-usuarios") {
    return (
      <div className="main-content-users">
        <div className="Container-add-user">
          <div id="title">
            <h3>Agregar Usuario</h3>
          </div>
          <div id="content-add-user">
            <div>
              <h4>Documento de identidad</h4>
              <input type="text" name="" id="in-add-user" placeholder="Input Field" />
            </div>
            <div>
              <h4>Nombre completo</h4>
              <input type="text" name="" id="in-add-user" placeholder="Input Field" />
            </div>
            <div>
              <h4>Cargo</h4>
              <input type="text" name="" id="in-add-user" placeholder="Input Field" />
            </div>
            <div>
              <h4>Contraseña</h4>
              <input type="text" name="" id="in-add-user" placeholder="Input Field" />
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
            <div className="usuario">
              <Container>
                <Row>
                  <Col>
                    <h3>{name}</h3>
                  </Col>
                  <Col>
                    <CampoDeTexto />
                  </Col>
                  <Col>
                    <CampoDeTexto />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <p>{rol}</p>
                  </Col>
                  <Col>
                    <CampoDeTexto />
                  </Col>
                  <Col />
                </Row>
              </Container>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
