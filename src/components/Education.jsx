import React, { Component } from "react";
//import PropTypes from 'prop-types';

class Education extends Component {
  render() {
    return (
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
            visual-auditory learning. In Udemy I have taken many classes such as
            Web Developer Bootcamp, MongoDB, ExpressJS, ReactJS, NodeJS (MERN
            Stack), Comprehensive React Course, React Native (Technical Guide),
            Progressive Web App, and Build Realtime App with React + Redux +
            Firestore. Not only that, I also took web design and react native /
            mobile design classes. I did that all because I love the learning
            process even though it hasn't been related to my current job.{" "}
            <strong> You can check my practices (PROJECT PORTFOLIO)</strong> in
            the following link :{" "}
            <a href="https://wisma.herokuapp.com" target="blank">
              wisma.herokuapp.com
            </a>
            {" , "}
            <a href="https://iagd.herokuapp.com" target="blank">
              iagd.herokuapp.com
            </a>
            {" , and "}
            <a href="https://cashtomizer.firebaseapp.com" target="blank">
              cashtomizer.firebaseapp.com
            </a>
            {" (username : test, email : test@test.com, pass : testtest)."}
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
            Bachelor Degree, GPA : 3.73 of 4.00. Top 2 in the class / study
            program.
          </p>
          <br />
        </div>
      </div>
    );
  }
}

Education.propTypes = {};

export default Education;
