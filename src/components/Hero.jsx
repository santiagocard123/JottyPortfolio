import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <motion.div
      className="hero-container"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <Container className="text-center">
        <motion.h1
          className="hero-title"
          style={{
            background: 'linear-gradient(45deg,rgb(12, 245, 113),rgb(245, 237, 237))',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            color: 'transparent',
            display: 'inline-block',
          }}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1.5,
            delay: 0.5,
            type: "spring",
            stiffness: 120,
          }}
        >
          Hola, soy Santiago Cardenas
        </motion.h1>
        <motion.p
          className="hero-subtitle lead"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          Desarrollador de Software | Tecnico Auxiliar en sistemas Informaticos
        </motion.p>
        <div className="button-wrapper">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            <Button
              variant="primary"
              size="lg"
              className="hero-button"
              as={motion.button}
              style={{
                position: 'relative',
                overflow: 'hidden',
                border: 'none',
                background: 'linear-gradient(45deg, #2E8B57, #000000)', 
                color: 'white',
                fontSize: '1rem',
                fontWeight: 'bold',
                padding: '10px 20px',
                borderRadius: '25px',
                cursor: 'pointer',
                boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
              }}
              whileHover={{
                scale: 1.05,
                background: 'linear-gradient(45deg,rgb(3, 3, 3), #2E8B57)',
                boxShadow: '0px 8px 20px rgba(255, 254, 254, 0.3)',
                transition: {
                  duration: 0.3,
                  ease: "easeInOut"
                },
              }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.span
                style={{
                  position: 'relative',
                  zIndex: 1,
                }}
              >
                Ver Proyectos
              </motion.span>
            </Button>
          </motion.div>
        </div>
      </Container>
    </motion.div>
  );
};

export default Hero;
