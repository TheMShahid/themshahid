import React from "react";
import Header from "../../components/Header/Header";
import HeadTitle from "../../components/HeadTitle/HeadTitle";
import { Projects, Certificates } from "../../components/Projects/Projects";
import {
  ProjectData,
  CertificatesData,
} from "../../components/Projects/ProjectsData";
import VideoSection from "../../components/VideSection/VideoSection";

import "./HomePage.styles.css";

class HomePage extends React.Component {
  constructor() {
    super();

    this.state = {
      projects: ProjectData,
      certificates: CertificatesData,
    };
  }

  render() {
    return (
      <div className="homepage">
        <Header />
        <HeadTitle title="My Final Year Project / New Invention" />
        <VideoSection />
        <HeadTitle title="My Projects Web & App" />
        <Projects projects={this.state.projects} />
        <HeadTitle title="Certificates" />
        <Certificates certificates={this.state.certificates} />
      </div>
    );
  }
}

export default HomePage;
