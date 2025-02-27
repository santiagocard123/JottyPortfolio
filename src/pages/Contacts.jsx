import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css"; 
import { motion } from "framer-motion"; 

const Contact = () => {
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSendEmail = () => {
    if (!subject || !message) {
      alert("Por favor, completa todos los campos.");
      return;
    }

    const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=santiagocardenas432@gmail.com&su=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(message)}`;

    window.open(gmailLink, "_blank");
  };


  const iconAnimation = {
    hover: {
      rotate: 360, 
      scale: 1.2, 
      transition: { duration: 0.5 }, 
    },
  };

  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        <Col md={8}>
          <Card
            className="text-center shadow-lg border-0"
            style={{
              borderRadius: "20px",
              background: "rgba(30, 30, 31, 0.5)",
              backdropFilter: "blur(10px)",
              border: "1px solid rgb(255, 255, 255)",
            }}
          >
            <Card.Body className="p-5">
              <Card.Title
                className="mb-4 display-5 fw-bold"
                style={{
                  background: "linear-gradient(90deg,rgb(3, 3, 3),rgb(22, 247, 134))",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                }}
              >
                Contacto
              </Card.Title>

              
              <Row className="justify-content-around mb-4">
                <Col>
                  <motion.div whileHover="hover" variants={iconAnimation}>
                    <a href="https://github.com/santiagocard123" target="_blank" rel="noopener noreferrer">
                      <FaGithub size={40} className="icon text-light" />
                    </a>
                  </motion.div>
                </Col>
                <Col>
                  <motion.div whileHover="hover" variants={iconAnimation}>
                    <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                      <FaLinkedin size={40} className="icon text-primary" />
                    </a>
                  </motion.div>
                </Col>
                <Col>
                  <motion.div whileHover="hover" variants={iconAnimation}>
                    <a href="mailto:santiagocardenas432@gmail.com">
                      <SiGmail size={40} className="icon text-danger" />
                    </a>
                  </motion.div>
                </Col>
                <Col>
                  <motion.div whileHover="hover" variants={iconAnimation}>
                    <a href="https://wa.me/+573243652661" target="_blank" rel="noopener noreferrer">
                      <FaWhatsapp size={40} className="icon text-success" />
                    </a>
                  </motion.div>
                </Col>
              </Row>

        
              <Form>
                <Form.Group className="mb-3">
                  <Form.Control
                    type="text"
                    placeholder="Asunto del mensaje"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="p-3"
                    style={{
                      borderRadius: "10px",
                      border: "1px solid rgba(10, 10, 10, 0.3)",
                      background: "rgba(252, 244, 244, 0.99)",
                      color: "#fffff",
                    }}
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Control
                    as="textarea"
                    rows={4}
                    placeholder="Escribe tu mensaje aquí..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="p-3"
                    style={{
                      borderRadius: "10px",
                      border: "1px solid rgba(255, 255, 255, 0.3)",
                      background: "rgb(255, 255, 255)",
                      color: "#fffff",
                    }}
                    required
                  />
                </Form.Group>
                <Button
                  variant="danger"
                  onClick={handleSendEmail}
                  className="w-100 p-3 fw-bold"
                  style={{
                    borderRadius: "10px",
                    background: "linear-gradient(90deg,rgb(7, 189, 149),rgb(7, 7, 7))",
                    border: "none",
                  }}
                >
                  Enviar con Gmail
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;