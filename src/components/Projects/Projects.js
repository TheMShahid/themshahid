import React from "react";

import "./Projects.css";

import { Container } from "../../globalStyles";
import { Row, Col } from "react-bootstrap";
import { Project, Certificate } from "../project/Project";

export const Projects = (props) => {
  return (
    <div className="projects">
      <Container>
        <Row>
          {props.projects.map((project) => (
            <Col className="col" lg={6} md={12} sm={12} lx={6}>
              <Project project={project} key={project.id} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export const Certificates = (props) => {
  return (
    <div className="projects">
      <Container>
        <Row>
          {props.certificates.map((certificate) => (
            <Col className="col" lg={3} md={6} sm={6} lx={3}>
              <Certificate certificate={certificate} key={certificate.id} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};
