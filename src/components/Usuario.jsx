import { Container, Row, Col } from 'react-grid-system';

import "../styles/Usuario.css"
import { CampoDeTexto } from './CampoDeTexto';
import { Button } from 'bootstrap';

export function Usuario() {


  return (
    <div className='usuario'>
        <Container>
          <Row>
            <Col><CampoDeTexto></CampoDeTexto></Col>
            <Col><CampoDeTexto></CampoDeTexto></Col>
            <Col><CampoDeTexto></CampoDeTexto></Col>
          </Row>
          <Row>
            <Col><CampoDeTexto></CampoDeTexto></Col>
            <Col><CampoDeTexto></CampoDeTexto></Col>
            <Col></Col>
          </Row>
          <Row>
            <Col></Col>
            <Col></Col>
            <Col><button>Guardar</button></Col>
          </Row>
        </Container>
      </div>
  );
}