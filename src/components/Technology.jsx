import React, { Component, Fragment } from "react";
//import PropTypes from 'prop-types';

class Technology extends Component {
  render() {
    return (
      <Fragment>
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
      </Fragment>
    );
  }
}

Technology.propTypes = {};

export default Technology;
