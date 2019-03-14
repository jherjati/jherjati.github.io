import React, { Component } from "react";
import "./Home.css";
import "./roboto.css";
import avatar from "./Miko.jpg";

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
                  <p>
                    <i>
                      "A rapid-learner and self-motivated human with the vision
                      to solve the problems with touch of innovation and
                      accuration. Posses the boldness to make decisions and to
                      deal with the challenges to reach his goals and
                      objectives."
                    </i>
                  </p>
                  <p>
                    <i className="fa fa-globe fa-fw home-margin-right home-large home-text-teal" />
                    Geomatics Engineer
                  </p>
                  <p>
                    <i className="fa fa-briefcase fa-fw home-margin-right home-large home-text-teal" />
                    Web Developer
                  </p>
                  <p>
                    <i className="fa fa-home fa-fw home-margin-right home-large home-text-teal" />
                    Bandung, ID
                  </p>
                  <p>
                    <i className="fa fa-envelope fa-fw home-margin-right home-large home-text-teal" />
                    jherjati@gmail.com
                  </p>
                  <p>
                    <i className="fa fa-phone fa-fw home-margin-right home-large home-text-teal" />
                    +62813 1222 3312
                  </p>
                  <hr />

                  <p className="home-large">
                    <b>
                      <i className="fa fa-asterisk fa-fw home-margin-right home-text-teal" />
                      Skills
                    </b>
                  </p>
                  <p>Web Development</p>
                  <div className="home-light-grey home-round-xlarge home-small">
                    <div
                      className="home-container home-center home-round-xlarge home-teal"
                      style={{ width: "95%" }}
                    >
                      <div className="home-center home-text-white">95%</div>
                    </div>
                  </div>
                  <p>Geographic Information System</p>
                  <div className="home-light-grey home-round-xlarge home-small">
                    <div
                      className="home-container home-center home-round-xlarge home-teal"
                      style={{ width: "90%" }}
                    >
                      90%
                    </div>
                  </div>
                  <p>Remote Sensing</p>
                  <div className="home-light-grey home-round-xlarge home-small">
                    <div
                      className="home-container home-center home-round-xlarge home-teal"
                      style={{ width: "85%" }}
                    >
                      85%
                    </div>
                  </div>
                  <p>Land Surveying</p>
                  <div className="home-light-grey home-round-xlarge home-small">
                    <div
                      className="home-container home-center home-round-xlarge home-teal"
                      style={{ width: "85%" }}
                    >
                      85%
                    </div>
                  </div>
                  <p>Hydrographic Surveying</p>
                  <div className="home-light-grey home-round-xlarge home-small">
                    <div
                      className="home-container home-center home-round-xlarge home-teal"
                      style={{ width: "85%" }}
                    >
                      85%
                    </div>
                  </div>
                  <p>Global Navigation Satellite System</p>
                  <div className="home-light-grey home-round-xlarge home-small">
                    <div
                      className="home-container home-center home-round-xlarge home-teal"
                      style={{ width: "80%" }}
                    >
                      80%
                    </div>
                  </div>
                  <br />

                  <p className="home-large home-text-theme">
                    <b>
                      <i className="fa fa-code fa-fw home-margin-right home-text-teal" />
                      Programming Languages
                    </b>
                  </p>
                  <p>Javascript</p>
                  <div className="home-light-grey home-round-xlarge">
                    <div
                      className="home-round-xlarge home-teal"
                      style={{ height: "24px", width: "95%" }}
                    />
                  </div>
                  <p>Python</p>
                  <div className="home-light-grey home-round-xlarge">
                    <div
                      className="home-round-xlarge home-teal"
                      style={{ height: "24px", width: "90%" }}
                    />
                  </div>
                  <p>
                    CSS{" "}
                    <i className="fa fa-css3 fa-fw home-margin-right home-text-teal" />
                  </p>
                  <div className="home-light-grey home-round-xlarge">
                    <div
                      className="home-round-xlarge home-teal"
                      style={{ height: "24px", width: "85%" }}
                    />
                  </div>
                  <p>
                    HTML{" "}
                    <i className="fa fa-html5 fa-fw home-margin-right home-text-teal" />
                  </p>
                  <div className="home-light-grey home-round-xlarge">
                    <div
                      className="home-round-xlarge home-teal"
                      style={{ height: "24px", width: "80%" }}
                    />
                  </div>
                  <br />

                  <p className="home-large">
                    <b>
                      <i className="fa fa-cogs fa-fw home-margin-right home-text-teal" />
                      Technology
                    </b>
                  </p>
                  <p>MapboxGL JS and HereMaps API</p>
                  <div className="home-light-grey home-round-xlarge home-small">
                    <div
                      className="home-container home-center home-round-xlarge home-teal"
                      style={{ width: "92.5%" }}
                    >
                      92.5%
                    </div>
                  </div>
                  <p>React with Router, Redux, and Hooks</p>
                  <div className="home-light-grey home-round-xlarge home-small">
                    <div
                      className="home-container home-center home-round-xlarge home-teal"
                      style={{ width: "87.5%" }}
                    >
                      <div className="home-center home-text-white">87.5%</div>
                    </div>
                  </div>
                  <p>NodeJS with express + heroku/ aws beanstalk/ firebase</p>
                  <div className="home-light-grey home-round-xlarge home-small">
                    <div
                      className="home-container home-center home-round-xlarge home-teal"
                      style={{ width: "82.5%" }}
                    >
                      82.5%
                    </div>
                  </div>
                  <p>MongoDB with mongoose + mlab</p>
                  <div className="home-light-grey home-round-xlarge home-small">
                    <div
                      className="home-container home-center home-round-xlarge home-teal"
                      style={{ width: "82.5%" }}
                    >
                      82.5%
                    </div>
                  </div>

                  <p>React Native</p>
                  <div className="home-light-grey home-round-xlarge home-small">
                    <div
                      className="home-container home-center home-round-xlarge home-teal"
                      style={{ width: "80%" }}
                    >
                      80%
                    </div>
                  </div>
                  <p>Matlab</p>
                  <div className="home-light-grey home-round-xlarge home-small">
                    <div
                      className="home-container home-center home-round-xlarge home-teal"
                      style={{ width: "80%" }}
                    >
                      80%
                    </div>
                  </div>

                  <p>Desktop GIS (ArcGIS and QGIS)</p>
                  <div className="home-light-grey home-round-xlarge home-small">
                    <div
                      className="home-container home-center home-round-xlarge home-teal"
                      style={{ width: "80%" }}
                    >
                      80%
                    </div>
                  </div>
                  <br />
                </div>
              </div>
              <br />
            </div>

            <div className="home-twothird">
              <div className="home-container home-card home-white home-margin-bottom">
                <h2 className="home-text-grey home-padding-16">
                  <i className="fa fa-suitcase fa-fw home-margin-right home-xxlarge home-text-teal" />
                  Work Experience
                </h2>

                <div className="home-container">
                  <h5 className="home-opacity">
                    <b>WebGIS Developer / PT MAPID</b>
                  </h5>
                  <h6 className="home-text-teal">
                    <i className="fa fa-calendar fa-fw home-margin-right" />
                    March 2018 -{" "}
                    <span className="home-tag home-teal home-round">Now</span>
                  </h6>
                  <p className="home-text-black">
                    Web GIS is a type of distributed information system,
                    comprising at least a server and a client, where the server
                    is a GIS server and the client is a web browser, desktop
                    application, or mobile application. You can see what I'm up
                    here by visiting{" "}
                    <a href="https://geo.mapid.io" target="blank">
                      geo.mapid.io
                    </a>
                    . I've built it for about 11 months using Jquery, Mapbox,
                    Turf, Tabulator, and many others web techs. Currently i'm
                    migrating it to MERN and HereMAP.
                  </p>
                  <hr />
                </div>

                <div className="home-container">
                  <h5 className="home-opacity">
                    <b>Remote Sensing Data Scientist / PT Handal Selaras</b>
                  </h5>
                  <h6 className="home-text-teal">
                    <i className="fa fa-calendar fa-fw home-margin-right" />
                    September 2018 - January 2019
                  </h6>
                  <p className="home-text-black">
                    Remote sensing is the acquisition of information about an
                    object or phenomenon without making physical contact with
                    the object and thus in contrast to on-site observation.
                    Whereas, data science is an interdisciplinary field that
                    uses scientific methods, processes, algorithms and systems
                    to extract knowledge and insights from data in various
                    forms. Here I use many software such as Agisoft, Simactive,
                    QGIS, WebODM, etc.
                  </p>
                  <hr />
                </div>

                <div className="home-container">
                  <h5 className="home-opacity">
                    <b>Research and Development / PT Aerovisi Utama</b>
                  </h5>
                  <h6 className="home-text-teal">
                    <i className="fa fa-calendar fa-fw home-margin-right" />
                    Sep 2017 - Nov 2017
                  </h6>
                  <p className="home-text-black">
                    Research and development holds responsible for innovative
                    activities undertaken by corporations in improving existing
                    services. Research and development constitutes the first
                    stage of development of a potential new service or the
                    production process. -Wikipedia- Here I mostly used autoCAD
                    map3d and LISP as a language.
                  </p>
                  <hr />
                </div>

                <div className="home-container">
                  <h5 className="home-opacity">
                    <b>Academic Assistant / Bandung Institute of Technology</b>
                  </h5>
                  <h6 className="home-text-teal">
                    <i className="fa fa-calendar fa-fw home-margin-right" />
                    Sep 2015 - Aug 2017
                  </h6>
                  <p className="home-text-black">
                    Assist and support academic counselors in their day-to-day
                    tasks. Prepare academic reports and records. Interact with
                    students and resolve their academic issues. Initiate
                    classroom discipline and etiquette among the students. Make
                    classroom learning experiences more enjoyable for students.
                    -GreatSampleResume-
                  </p>
                  <hr />
                </div>

                <div className="home-container">
                  <h5 className="home-opacity">
                    <b>GIS Analyst / PT Aerovisi Utama</b>
                  </h5>
                  <h6 className="home-text-teal">
                    <i className="fa fa-calendar fa-fw home-margin-right" />
                    Jun 2016 - Aug 2016
                  </h6>
                  <p className="home-text-black">
                    GIS analysts use GIS technology to present spatial
                    information in a digital format. These maps may be useful to
                    a number of sectors, including environmental services,
                    natural resource exploration, and local government. GIS
                    analysts collect geographic data, compile data from surveys
                    and images, update existing maps, and may design maps for
                    mobile phones and navigation systems. -Learn- As a GIS
                    analyst here, I account geodatabase.
                  </p>
                  <br />
                </div>
              </div>

              <div className="home-container home-card home-white home-margin-bottom">
                <h2 className="home-text-grey home-padding-16">
                  <i className="fa fa-certificate fa-fw home-margin-right home-xxlarge home-text-teal" />
                  Education
                </h2>
                <div className="home-container">
                  <h5 className="home-opacity">
                    <b>MDN and Udemy</b>
                  </h5>
                  <h6 className="home-text-teal">
                    <i className="fa fa-calendar-plus-o fa-fw home-margin-right" />
                    Forever
                  </h6>
                  <p className="home-text-black">
                    Web Development! One for verbal/linguistic learning, one for
                    visual-auditory learning. In Udemy I have taken many classes
                    such as Web Developer Bootcamp, MongoDB, ExpressJS, ReactJS,
                    NodeJS (MERN Stack), Comprehensive React Course, React
                    Native (Technical Guide), Progressive Web App, and Build
                    Realtime App with React + Redux + Firestore. Not only that,
                    I also took web design and react native / mobile design
                    classes. I did that all because I love the learning process
                    even though it hasn't been related to my current job. You
                    can check my practices :{" "}
                    <a href="https://wisma.herokuapp.com" target="blank">
                      wisma.herokuapp.com
                    </a>
                    {" and "}
                    <a href="https://iagd.herokuapp.com" target="blank">
                      iagd.herokuapp.com
                    </a>{" "}
                    (kindly sign up and check internal features, you can delete
                    account later).
                  </p>
                  <hr />
                </div>
                <div className="home-container">
                  <h5 className="home-opacity">
                    <b>Software Engineering / GIS Related Program</b>
                  </h5>
                  <h6 className="home-text-teal">
                    <i className="fa fa-calendar-check-o fa-fw home-margin-right" />
                    2020 - 2022
                  </h6>
                  <p className="home-text-black">Master Degree, scheduled.</p>
                  <hr />
                </div>
                <div className="home-container">
                  <h5 className="home-opacity">
                    <b>Geodesy and Geomatics Engineering</b>
                  </h5>
                  <h6 className="home-text-teal">
                    <i className="fa fa-calendar fa-fw home-margin-right" />
                    2013 - 2017
                  </h6>
                  <p className="home-text-black">
                    Bachelor Degree, GPA : 3.73 of 4.00. Top 2 in the class /
                    study program.
                  </p>
                  <br />
                </div>
              </div>

              <div className="home-container home-card home-white">
                <h2 className="home-text-grey home-padding-16">
                  <i className="fa fa-handshake-o fa-fw home-margin-right home-xxlarge home-text-teal" />
                  Organization
                </h2>
                <div className="home-container">
                  <h5 className="home-opacity">
                    <b>Leader / Udrussunnah</b>
                  </h5>
                  <h6 className="home-text-teal">
                    <i className="fa fa-calendar fa-fw home-margin-right" />
                    2016 - 2018
                  </h6>
                  <p className="home-text-black">
                    Muslim Youth Educational Movement, Bandung
                  </p>
                  <hr />
                </div>
                <div className="home-container">
                  <h5 className="home-opacity">
                    <b>Chairman / Student Council</b>
                  </h5>
                  <h6 className="home-text-teal">
                    <i className="fa fa-calendar fa-fw home-margin-right" />
                    2011 - 2012
                  </h6>
                  <p className="home-text-black">
                    1 Senior High School, Yogyakarta
                  </p>
                  <br />
                </div>
              </div>
            </div>
          </div>
        </div>

        <footer className="home-container home-teal home-center home-margin-top">
          <p>
            Find me on social media.
            <br />
            <a href="https://angel.co/jatmiko-herjati" target="blank">
              <i className="fa fa-angellist home-hover-opacity" />
            </a>{" "}
            <a href="https://www.linkedin.com/in/jherjati/" target="blank">
              <i className="fa fa-linkedin home-hover-opacity" />
            </a>{" "}
            <a href="https://www.facebook.com/jherjati" target="blank">
              <i className="fa fa-facebook-official home-hover-opacity" />
            </a>{" "}
            <a href="https://www.instagram.com/jherjati" target="blank">
              <i className="fa fa-instagram home-hover-opacity" />
            </a>{" "}
            <a href="https://id.pinterest.com/jatmikoherjati/" target="blank">
              <i className="fa fa-pinterest-p home-hover-opacity" />
            </a>
          </p>
        </footer>
      </div>
    );
  }
}

export default Home;
