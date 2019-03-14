import React, { Component } from "react";
//import PropTypes from 'prop-types';

class SocialMedia extends Component {
  render() {
    return (
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
    );
  }
}

SocialMedia.propTypes = {};

export default SocialMedia;
