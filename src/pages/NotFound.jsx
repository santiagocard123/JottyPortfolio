import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const NotFound = () => {
  return (
    <Container className="not-found-container" style={{
      backgroundColor: '#080808', 
      height: '85.7vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <Row className="justify-content-center align-items-center">
        <Col xs={12} md={8} lg={6} className="text-center">
          <h1 className="display-4 not-found-title" style={{
            color: '#00FFC6', 
            textShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)',
            marginBottom: '20px',
          }}>
            404 - Página No Encontrada
          </h1>
          <p className="lead not-found-message" style={{
            color: '#eef0f1', 
            fontSize: '1.2rem', 
            marginBottom: '30px', 
          }}>
            Lo sentimos, la página que buscas no existe.
          </p>
          <Button 
            href="/" 
            variant="outline-primary" 
            className="not-found-button" 
            style={{
              color: '#32d3b0', 
              borderColor: '#32d3b0', 
              borderRadius: '25px', 
              padding: '10px 30px', 
              fontSize: '1.1rem', 
              transition: 'all 0.3s ease', 
              textDecoration: 'none', 
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = '#32d3b0';
              e.target.style.color = '#080808'; 
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = 'transparent'; 
              e.target.style.color = '#32d3b0'; 
            }}
          >
            Volver al Inicio
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default NotFound;