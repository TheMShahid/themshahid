import React from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Button, Container } from "../../globalStyles";

import "./Header.styles.css";

const Header = () => {
  return (
    <div className="header">
      <Container>
        <Row>
          <Col xs={12} lg={6} md={6}>
            <h1>Hi' I am Muhammad Shahid khan</h1>
            <h2>I am a Front-End Web developer</h2>
            <h2>Mobile App Front-End developer</h2>
            <h3>UI / UX Designer, Graphics Designer</h3>
            <p>
              The most efficient and supportive way for you to learn in-demand
              skills, get hired, and advance your career.
            </p>
            <Link to="/jointhemshahid">
              <Button>JOIN THEMSHAHID</Button>
            </Link>
            <Link to="/seeallprojects" id="see">
              SEE ALL PROJECTS
            </Link>
          </Col>
          <Col xs={12} lg={6} md={6}>
            <img src={require("../../Images/profile.png")} alt="profile" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Header;
