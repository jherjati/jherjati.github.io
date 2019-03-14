import React, { Component } from "react";
//import PropTypes from 'prop-types';

class Organization extends Component {
  render() {
    return (
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
          <p className="home-text-black">1 Senior High School, Yogyakarta</p>
          <br />
        </div>
      </div>
    );
  }
}

Organization.propTypes = {};

export default Organization;
