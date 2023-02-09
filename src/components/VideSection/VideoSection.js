import React from "react";
import { Row, Col } from "react-bootstrap";
import { Container } from "../../globalStyles";

import "./VideoSection.styles.css";

const VideoSection = () => {
  return (
    <div className="videosec">
      <Container>
        <Row>
          <Col xs={12} md={6} lg={6}>
            <div className="video">
              <iframe
                src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Ffb.watch%2FimdpInu9Jw%2F&width=500&show_text=true&height=372&appId"
                frameborder="0"
                allowfullscreen="true"
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                allowFullScreen="true"
              ></iframe>
            </div>
          </Col>
          <Col xs={12} md={6} lg={6}>
            <div className="details">
              <h1>Smart cradle</h1>
              <h2>
                Micro-processing Based Auto Responsive Digital Controlled Baby
                Swing.
              </h2>
              <p>
                This is a hardware based project which is designed for child
                welfare and it is auto responsive in the absence of parents,
                when the baby will start crying this micro-processing controller
                will became activate for observation that where the baby is
                crying if the baby is in the baby swing it will start swinging
                when the baby will stop crying after some time the system will
                sleep and if the baby is not therein the baby swing or around
                the baby swing the system will sleep again.
              </p>
              <h4>Project Team Members (Names)</h4>{" "}
              <span>
                <b>Muhammad Shahid khan</b>
              </span>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default VideoSection;
