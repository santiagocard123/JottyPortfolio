import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="footer bg-dark text-white mt-3">
      <Container className="py-2">
        <Row>
          <Col className="text-center">
            <p className="fs-6">&copy; {new Date().getFullYear()} Santiago Cardenas Jotty. Todos los derechos reservados.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
