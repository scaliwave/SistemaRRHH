import "../styles/MainBlock.css";
import "../styles/Usuario.css";

import { CampoDeTexto } from "./CampoDeTexto";
import { Btn1 } from "./Btn1";
import { Container, Row, Col } from "react-grid-system";

export function MainBlock() {
  const name = "Sofia Morales";
  const rol = "Auxiliar contable";
  const content = () => {
    if (window.location.pathname === "/administrador/listar-usuarios") {
      return (
        <div>
          <div id="title">
            <h1>Usuarios</h1>
          </div>
          <div className="scrollEmployees">
            <div className="usuario">
              <Container>
                <Row>
                  <Col>
                    <h3 >{name}</h3>
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
      );
    }
  
  };
  return <div className="main-block">{content()}</div>;
}
