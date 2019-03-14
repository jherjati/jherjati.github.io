import React, { Component } from "react";
import UberMap from "./UberMap.jsx";
/* import AlexMap from "./AlexMap.tsx"; */
import Mapbox from "./Mapbox.jsx";
import "./Maplab.css";
import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";

const AlexMap = ReactMapboxGl({
  accessToken:
    "pk.eyJ1IjoieWFjb2I4OSIsImEiOiJjamU3dTYxOXEwMzIwMnFteHB5MGYzbzZmIn0._u0BoH4XBwpB7EaYN8Xb2g"
});

const paintLayer = {
  "fill-extrusion-color": "#aaa",
  "fill-extrusion-height": {
    type: "identity",
    property: "height"
  },
  "fill-extrusion-base": {
    type: "identity",
    property: "min_height"
  },
  "fill-extrusion-opacity": 0.8
};

export default class Maplab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      style: "dark"
    };
  }

  setStyle = () => {
    if (this.state.style === "streets") {
      this.setState({ style: "light" });
    } else if (this.state.style === "light") {
      this.setState({ style: "dark" });
    } else {
      this.setState({ style: "streets" });
    }
  };

  render() {
    return (
      <div>
        <h2>MAPLAB</h2>
        <p>
          This is Maplab, Mapping Laboratory, place where i do some of my webGIS
          experiment. Right now I want to try to figure out how Mapbox interacts
          with React. Why? Because for me developing Progressive Web App using
          React is challenging. Oops, if you find the interface on this page
          isn't pretty enough, hahaha, yes I admit it. Hope I can fix it after a
          short time. Now I'm tied up on my work and some kind of learn new
          challenging things as well (such as Node, Express, Pusher, Socket,
          etc). Yes right I'm absorbed in building webGIS as IoT portal.
          This time my goal is to show you combination between these 3 official
          docs.
        </p>
        <p>
          First one, this is using{" "}
          <a href="https://github.com/uber/react-map-gl" target="blank">
            React wrapper
          </a>{" "}
          for Mapbox GL by Uber Devs. Still wondering why the layer won't
          appear. It seems either d3-request can't find the geojson or
          asynchronous processings overlap each other.
        </p>
        <div className="firstMap">
          <UberMap />
        </div>
        <p>
          Secondly, this is using{" "}
          <a href="https://github.com/alex3165/react-mapbox-gl" target="blank">
            this
          </a>{" "}
          wrapper by alex3165
        </p>
        <div className="secondMap">
          <AlexMap
            style={"mapbox://styles/mapbox/" + this.state.style + "-v9"}
            containerStyle={{
              height: "510px",
              width: "100%"
            }}
            zoom={[15]}
            center={[-0.0824952, 51.5144951]}
            pitch={[60]}
            bearing={[-60]}
          >
            <Layer
              type="symbol"
              id="marker"
              layout={{ "icon-image": "marker-15" }}
            >
              <Feature coordinates={[-0.481747846041145, 51.3233379650232]} />
            </Layer>
            <Layer
              id="3d-buildings"
              sourceId="composite"
              sourceLayer="building"
              filter={["==", "extrude", "true"]}
              type="fill-extrusion"
              minZoom={14}
              paint={paintLayer}
            />
          </AlexMap>
          <div className="bottomBar">
            <button onClick={this.setStyle}>Change style</button>
            <span className="indicator">Using style: {this.state.style}</span>
          </div>
        </div>
        <p>
          And this is without wrapper, styling is nightmare, still trying to add popup on click.
        </p>
        <Mapbox />
        <p>
          That's it for now. After try to use 2 React wrappers, i could say
          applying wrapping technique to a feature rich library -in this case
          Mapbox- is a high tradeoff, i'm more inclined to let it be so. Last
          but not least, if you want to know my work with GIS outside React
          environment -yup vanillaJS-, kindly visit{" "}
          <a href="http://geomapid.co.id" target="blank">
            this
          </a>{" "}
          exciting webGIS as IoT Portal. Thanks a lot!
        </p>
      </div>
    );
  }
}
