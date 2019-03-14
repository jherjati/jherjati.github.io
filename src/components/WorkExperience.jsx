import React, { Component } from "react";
//import PropTypes from "prop-types";

class WorkExperience extends Component {
  render() {
    return (
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
            Web GIS is a type of distributed information system, comprising at
            least a server and a client, where the server is a GIS server and
            the client is a web browser, desktop application, or mobile
            application. You can see what I'm up here by visiting{" "}
            <a href="https://geo.mapid.io" target="blank">
              geo.mapid.io
            </a>
            . I've built it for about 11 months using Jquery, Mapbox, Turf,
            Tabulator, and many others web techs. Currently i'm migrating it to
            MERN and HereMAP.
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
            Remote sensing is the acquisition of information about an object or
            phenomenon without making physical contact with the object and thus
            in contrast to on-site observation. Whereas, data science is an
            interdisciplinary field that uses scientific methods, processes,
            algorithms and systems to extract knowledge and insights from data
            in various forms. Here I use many software such as Agisoft,
            Simactive, QGIS, WebODM, etc.
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
            Research and development holds responsible for innovative activities
            undertaken by corporations in improving existing services. Research
            and development constitutes the first stage of development of a
            potential new service or the production process. -Wikipedia- Here I
            mostly used autoCAD map3d and LISP as a language.
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
            Assist and support academic counselors in their day-to-day tasks.
            Prepare academic reports and records. Interact with students and
            resolve their academic issues. Initiate classroom discipline and
            etiquette among the students. Make classroom learning experiences
            more enjoyable for students. -GreatSampleResume-
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
            GIS analysts use GIS technology to present spatial information in a
            digital format. These maps may be useful to a number of sectors,
            including environmental services, natural resource exploration, and
            local government. GIS analysts collect geographic data, compile data
            from surveys and images, update existing maps, and may design maps
            for mobile phones and navigation systems. -Learn- As a GIS analyst
            here, I account geodatabase.
          </p>
          <br />
        </div>
      </div>
    );
  }
}

WorkExperience.propTypes = {};

export default WorkExperience;
