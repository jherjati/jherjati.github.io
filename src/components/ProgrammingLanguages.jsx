import React, { Component, Fragment } from "react";
//import PropTypes from 'prop-types';

class ProgrammingLanguages extends Component {
  render() {
    return (
      <Fragment>
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
      </Fragment>
    );
  }
}

ProgrammingLanguages.propTypes = {};

export default ProgrammingLanguages;
