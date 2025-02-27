import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';  
import logo from '../assets/Logo.png'; 

const MyNavbar = () => {
  return (
    <Navbar 
    bg="dark" 
    variant="dark" 
    expand="lg" 
    fixed="top" 
    className="navbar"
    style={{ 
      borderRadius: '50px', 
      marginBottom: '5px',  
      marginLeft: 'auto',   
      marginRight: 'auto', 
      maxWidth: '80%',     
      padding: '10px 20px', 
    }}
  >
      <Container>
        <Navbar.Brand as={Link} to="/" className="navbar-brand">
          <motion.img
            src={logo} 
            alt="Logo"
            style={{ 
              width: '50px', 
              height: '50px', 
              marginLeft: '50px', 
              filter: 'drop-shadow(0px 0px 15px #20B2AA)', 
              transition: 'ease-in-out'
            }} 
            whileHover={{ scale: 2.1, rotate: 10 }} 
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <motion.div whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 300 }}>
              <Nav.Link 
                as={Link} 
                to="/" 
                className="nav-link" 
                style={{ 
                  fontSize: '1.1rem', 
                  fontWeight: '500', 
                  color: '#20B2AA', 
                  margin: '0 10px',
                  borderRadius: '20px', 
                  padding: '8px 16px',  
                  transition: 'background-color 0.3s ease', 
                }}
                onMouseEnter={(e) => e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.2)'} 
                onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'} 
              >
                Inicio
              </Nav.Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 300 }}>
              <Nav.Link 
                as={Link} 
                to="/about" 
                className="nav-link" 
                style={{ 
                  fontSize: '1.1rem', 
                  fontWeight: '500', 
                  color: '#20B2AA', 
                  margin: '0 10px',
                  borderRadius: '20px', 
                  padding: '8px 16px',
                  transition: 'background-color 0.3s ease',
                }}
                onMouseEnter={(e) => e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.2)'}
                onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
              >
                Sobre Mí
              </Nav.Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 300 }}>
              <Nav.Link 
                as={Link} 
                to="/projects" 
                className="nav-link" 
                style={{ 
                  fontSize: '1.1rem', 
                  fontWeight: '500', 
                  color: '#20B2AA', 
                  margin: '0 10px',
                  borderRadius: '20px', 
                  padding: '8px 16px',
                  transition: 'background-color 0.3s ease',
                }}
                onMouseEnter={(e) => e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.2)'}
                onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
              >
                Proyectos
              </Nav.Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 300 }}>
              <Nav.Link 
                as={Link} 
                to="/contact" 
                className="nav-link" 
                style={{ 
                  fontSize: '1.1rem', 
                  fontWeight: '500', 
                  color: '#20B2AA', 
                  margin: '0 10px',
                  borderRadius: '20px', 
                  padding: '8px 16px',
                  transition: 'background-color 0.3s ease',
                }}
                onMouseEnter={(e) => e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.2)'}
                onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
              >
                Contacto
              </Nav.Link>
            </motion.div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;