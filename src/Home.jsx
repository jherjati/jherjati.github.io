import React, { Component } from "react";
import "./Home.css";
import "./roboto.css";
import avatar from "./Miko.jpg";
import WorkExperience from "./components/WorkExperience";
import Education from "./components/Education";
import Organization from "./components/Organization";
import Skills from "./components/Skills";
import ProgrammingLanguages from "./components/ProgrammingLanguages";
import Technology from "./components/Technology";
import Bio from "./components/Bio";
import SocialMedia from "./components/SocialMedia";

class Home extends Component {
  render() {
    return (
      <div className="home-light-grey body">
        <div
          className="home-content home-margin-top"
          style={{ maxWidth: "1400px" }}
        >
          <div className="home-row-padding">
            <div className="home-third">
              <div className="home-white home-text-grey home-card-4">
                <div className="home-display-container">
                  <img src={avatar} style={{ width: "100%" }} alt="Avatar" />
                  <div className="home-display-bottomleft home-container home-text-black">
                    <h2>Jatmiko Herjati</h2>
                  </div>
                </div>
                <div className="home-container">
                  <Bio />
                  <Skills />
                  <ProgrammingLanguages />
                  <Technology />
                </div>
              </div>
              <br />
            </div>

            <div className="home-twothird">
              <WorkExperience />
              <Education />
              <Organization />
            </div>
          </div>
        </div>

        <footer className="home-container home-teal home-center home-margin-top">
          <SocialMedia />
        </footer>
      </div>
    );
  }
}

export default Home;
