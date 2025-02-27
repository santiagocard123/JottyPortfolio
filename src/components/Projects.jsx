import React from 'react';
import { Carousel } from 'react-bootstrap';
import { motion } from 'framer-motion';

const projects = [
  {
    title: "Netcodex Page",
    description: "Desarrollo de una página web para el mantenimiento de equipos de computo, ofreciendo soluciones eficientes y personalizadas para satisfacer las necesidades de los clientes.",
    image: "/images/Netcodex-Page.PNG"
  },
  {
    title: "RanchoBurger",
    description: "Plataforma de venta de comida rápida para RanchoBurger, diseñada para ofrecer una experiencia de compra intuitiva y atractiva, destacando la variedad de productos y promociones disponibles.",
    image: "/images/RanchoBurger.PNG"
  }
];

const Projects = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.8 }}
      className="projects-container"
    >
      <Carousel className="projects-carousel">
        {projects.map((project, index) => (
          <Carousel.Item 
            key={index} 
            className="project-item"
          >
            <motion.img
              className="d-block w-100 project-image"
              src={project.image}
              alt={project.title}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
            <Carousel.Caption className="carousel-text">
              <motion.h3 
                initial={{ opacity: 0, x: -50 }} 
                animate={{ opacity: 1, x: 0 }} 
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                {project.title}
              </motion.h3>
              <motion.p 
                initial={{ opacity: 0, x: 50 }} 
                animate={{ opacity: 1, x: 0 }} 
                transition={{ delay: 0.3, duration: 0.5 }}
                className="project-description"
              >
                {project.description}
              </motion.p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </motion.div>
  );
};

export default Projects;
