import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

const About = () => {
  return (
    <Container className="about-container my-5">
      <h2 className="text-center mb-4">Sobre Mí</h2>
      <Row>
        <Col md={6}>
          <Image src="/images/Logo.png" roundedCircle fluid />
        </Col>
        <Col md={6}>
          <p>
            Soy un desarrollador de software con experiencia en análisis y desarrollo de aplicaciones web y móviles.
            Me apasiona crear soluciones tecnológicas que resuelvan problemas reales.
          </p>
          <p>
            Mis habilidades incluyen React.js, Node.js, JavaScript, y más. Siempre estoy aprendiendo nuevas tecnologías
            para mejorar mis proyectos.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
