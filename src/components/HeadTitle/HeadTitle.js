import React from "react";
import { Col, Row } from "react-bootstrap";
import { Container } from "../../globalStyles";

import "./HeadTitle.style.css";

const HeadTitle = (props) => {
  return (
    <div className="headtitle">
      <Container>
        <Row>
          <Col className="text-center">
            <h1>{props.title}</h1>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HeadTitle;
