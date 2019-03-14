import React, { Component, Fragment } from "react";
//import PropTypes from 'prop-types';

class Bio extends Component {
  render() {
    return (
      <Fragment>
        <p>
          <i>
            "A rapid-learner and self-motivated human with the vision to solve
            the problems with touch of innovation and accuration. Posses the
            boldness to make decisions and to deal with the challenges to reach
            his goals and objectives."
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
      </Fragment>
    );
  }
}

Bio.propTypes = {};

export default Bio;
