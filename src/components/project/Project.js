import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../globalStyles";
import Card from "react-bootstrap/Card";

import "./project.css";

export const Project = (props) => {
  return (
    <div className="project">
      <Card>
        <Card.Img variant="top" src={props.project.ProjectImg} />
        <Card.Body>
          <Card.Title>{props.project.title}</Card.Title>
          <Card.Text>{props.project.text}</Card.Text>
          <p>{props.project.linkText}</p>
        </Card.Body>
        <Link to={props.project.projectLinks}>
          <Button>{props.project.button}</Button>
        </Link>
      </Card>
    </div>
  );
};

export const Certificate = (props) => {
  return (
    <div className="project">
      <Card>
        <Card.Img variant="top" src={props.certificate.ProjectImg} />
        <Card.Body>
          <Card.Title>{props.certificate.title}</Card.Title>
          <Card.Text>{props.certificate.text}</Card.Text>
          <p>{props.certificate.linkText}</p>
        </Card.Body>
        <Link to={props.certificate.projectLinks}>
          <Button>{props.certificate.button}</Button>
        </Link>
      </Card>
    </div>
  );
};
