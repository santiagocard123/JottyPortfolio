import React from 'react';
import { Row, Col, Card, Container } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FaReact, FaHtml5, FaCss3Alt, FaLinux } from 'react-icons/fa';
import { DiJavascript1, DiPython } from "react-icons/di";
import { TbBrandGit } from "react-icons/tb";
import { BsTerminal } from "react-icons/bs";
import { SiDjango, SiBootstrap, SiMongodb, SiMysql } from "react-icons/si";

const Skills = () => {
  const skills = [
    { name: 'Bootstrap', icon: SiBootstrap, color: '#7952B3' },
    { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
    { name: 'React.js', icon: FaReact, color: '#61DAFB' },
    { name: 'JavaScript', icon: DiJavascript1, color: '#F7DF1E' },
    { name: 'HTML5', icon: FaHtml5, color: '#E34F26' },
    { name: 'CSS3', icon: FaCss3Alt, color: '#1572B6' },
    { name: 'Django', icon: SiDjango, color: '#092E20' },
    { name: 'Git', icon: TbBrandGit, color: '#F05032' },
    { name: 'Linux', icon: FaLinux, color: '#000000' },
    { name: 'Python', icon: DiPython, color: '#3776AB' },
    { name: 'CMD', icon: BsTerminal, color: '#4D4D4D' },
    { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <Container className="skills-container my-5">
      <h2 className="text-center mb-4 display-5 fw-bold"
        style={{
          background: "linear-gradient(90deg,rgb(3, 3, 3),rgb(22, 247, 134))",
          WebkitBackgroundClip: "text",
          color: "transparent",
        }}
      >Habilidades</h2>
      <Row className="justify-content-center">
        {skills.map((skill, index) => (
          <Col key={index} xs={6} sm={4} md={3} lg={2} className="mb-3">
            <motion.div
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              whileHover={{ scale: 1.08, y: -5, boxShadow: "0px 5px 15px rgba(0, 255, 128, 0.3)" }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
              className="skill-card"
            >
              <Card className="text-center glass-card border-0">
                <Card.Body className="d-flex flex-column justify-content-center align-items-center p-2">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <skill.icon size={40} className="mb-2 skill-icon" style={{ color: skill.color }} />
                  </motion.div>
                  <Card.Title className="skill-title h6 text-light"
                    style={{
                      background: `linear-gradient(90deg,${skill.color},#000)`,
                      WebkitBackgroundClip: "text",
                      color: "transparent",
                    }}
                  >
                    {skill.name}
                  </Card.Title>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Skills;
