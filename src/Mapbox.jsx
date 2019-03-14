import React, { Component } from "react";
//import ReactDOM from "react-dom";
import mapboxgl from "mapbox-gl";
//import Tooltip from "./components/tooltip";
import data from "./components/data.json";
import "./Mapbox.css";

mapboxgl.accessToken =
  "pk.eyJ1IjoieWFjb2I4OSIsImEiOiJjamU3dTYxOXEwMzIwMnFteHB5MGYzbzZmIn0._u0BoH4XBwpB7EaYN8Xb2g";

const options = [
  {
    name: "Population",
    description: "Estimated total population",
    property: "pop_est",
    stops: [
      [0, "#f8d5cc"],
      [1000000, "#f4bfb6"],
      [5000000, "#f1a8a5"],
      [10000000, "#ee8f9a"],
      [50000000, "#ec739b"],
      [100000000, "#dd5ca8"],
      [250000000, "#c44cc0"],
      [500000000, "#9f43d7"],
      [1000000000, "#6e40e6"]
    ]
  },
  {
    name: "GDP",
    description: "Estimate total GDP in millions of dollars",
    property: "gdp_md_est",
    stops: [
      [0, "#f8d5cc"],
      [1000, "#f4bfb6"],
      [5000, "#f1a8a5"],
      [10000, "#ee8f9a"],
      [50000, "#ec739b"],
      [100000, "#dd5ca8"],
      [250000, "#c44cc0"],
      [5000000, "#9f43d7"],
      [10000000, "#6e40e6"]
    ]
  }
];

export default class Mapbox extends Component {
  //tooltipContainer;
  map;

  /* setTooltip(features) {
    if (features.length) {
      ReactDOM.render(
        React.createElement(Tooltip, {
          features
        }),
        this.tooltipContainer
      );
    } else {
      ReactDOM.unmountComponentAtNode(this.tooltipContainer);
    }
  } */

  constructor(props) {
    super(props);
    this.state = {
      lat: -6.891007,
      lng: 107.610383,
      zoom: 1,
      active: options[0]
    };
  }

  componentDidUpdate() {
    this.setFill();
  }

  componentDidMount() {
    const { lng, lat, zoom } = this.state;
    //this.tooltipContainer = document.createElement("div");

    this.map = new mapboxgl.Map({
      container: this.mapContainer,
      style: "mapbox://styles/mapbox/light-v9",
      center: [lng, lat],
      zoom
    });

    /* const tooltip = new mapboxgl.Marker(this.tooltipContainer, {
      offset: [265, 45]
    })
      .setLngLat([0, 0])
      .addTo(this.map); */

    this.map.on("load", () => {
      this.map.addSource("countries", {
        type: "geojson",
        data
      });

      this.map.addLayer(
        {
          id: "countries",
          type: "fill",
          source: "countries"
        },
        "country-label-lg"
      ); // ID metches `mapbox/streets-v9`

      this.setFill();
    });

    this.map.on("move", () => {
      const { lng, lat } = this.map.getCenter();

      this.setState({
        lng: lng.toFixed(4),
        lat: lat.toFixed(4),
        zoom: this.map.getZoom().toFixed(2)
      });
    });

    /* this.map.on("click", e => {
      const features = this.map.queryRenderedFeatures(e.point);
      tooltip.setLngLat(e.lngLat);
      this.map.getCanvas().style.cursor = features.length ? "pointer" : "";
      this.setTooltip(features);
    }); */
  }

  setFill() {
    const { property, stops } = this.state.active;
    this.map.setPaintProperty("countries", "fill-color", {
      property,
      stops
    });
  }

  render() {
    const { lng, lat, zoom } = this.state;
    const { name, description, stops, property } = this.state.active;
    const renderLegendKeys = (stop, i) => {
      return (
        <div key={i} className="txt-s">
          <span
            className="mr6 round-full w12 h12 inline-block align-middle"
            style={{ backgroundColor: stop[1] }}
          />
          <span>{`${stop[0].toLocaleString()}`}</span>
        </div>
      );
    };

    const renderOptions = (option, i) => {
      return (
        <label key={i} className="toggle-container">
          <input
            onChange={() => this.setState({ active: options[i] })}
            checked={option.property === property}
            name="toggle"
            type="radio"
          />
          <div className="toggle txt-s py3 toggle--active-white">
            {option.name}
          </div>
        </label>
      );
    };

    return (
      <div className="thirdMap">
        <div className="inline-block relative top left mt6 mb6 ml12 bg-darken75 color-white z1 py6 px12 round-full txt-s txt-bold shadow-darken10">
          <div>{`Longitude: ${lng} Latitude: ${lat} Zoom: ${zoom}`}</div>
        </div>

        <div className="toggle-group relative top left mt6 mb6 ml12 border border--2 border--white bg-white shadow-darken10 z1">
          {options.map(renderOptions)}
        </div>

        <div
          ref={el => (this.mapContainer = el)}
          className="absolute top right left bottom"
        />

        <div className="bg-white absolute bottom right mt12 mr6 mb6 py12 px12 shadow-darken10 round z1 wmax180">
          <div className="mb6">
            <h2 className="txt-bold txt-s block">{name}</h2>
            <p className="txt-s color-gray">{description}</p>
          </div>
          {stops.map(renderLegendKeys)}
        </div>
      </div>
    );
  }
}
