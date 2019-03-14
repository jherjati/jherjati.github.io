import React, { Component, Fragment } from "react";
//import PropTypes from 'prop-types';

class Skills extends Component {
  render() {
    return (
      <Fragment>
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
      </Fragment>
    );
  }
}

Skills.propTypes = {};

export default Skills;
