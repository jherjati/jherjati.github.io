import React, { Component } from "react";
import ReactMapGL from "react-map-gl";

import ControlPanel from "./components/control-panel";

import { defaultMapStyle, dataLayer } from "./components/map-style.js";
import { updatePercentiles } from "./components/utils";
import { fromJS } from "immutable";
/* import income from './income.json'; */

import "./UberMap.css";

export default class UberMap extends Component {
  state = {
    mapStyle: defaultMapStyle,
    year: 2015,
    data: null,
    hoveredFeature: null,
    viewport: {
      width: 800,
      height: 510,
      latitude: 40,
      longitude: -100,
      zoom: 3
    },

  };

  componentDidMount() {
    window.addEventListener("resize", this._resize);
    this._resize();
    /* setTimeout(this._loadData(income), 30000); */
    /* console.log(income) */
    /* requestJson(
      "https://github.com/uber/react-map-gl/blob/master/examples/data/us-income.geojson",
      (error, response) => {
        if (!error) {
          this._loadData(response);
        }
      }
    ); */
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this._resize);
  }

  _resize = () => {
    this.setState({
      viewport: {
        ...this.state.viewport,
        width: this.props.width || window.visualViewport.width - 80
        /* height: this.props.height || window.innerHeight */
      }
    });
  };

  _loadData = data => {
    updatePercentiles(data, f => f.properties.income[this.state.year]);

    const mapStyle = defaultMapStyle
      // Add geojson source to map
      .setIn(["sources", "incomeByState"], fromJS({ type: "geojson", data }))
      // Add point layer to map
      .set("layers", defaultMapStyle.get("layers").push(dataLayer));

    this.setState({ data, mapStyle });
  };

  _updateSettings = (name, value) => {
    if (name === "year") {
      this.setState({ year: value });

      const { data, mapStyle } = this.state;
      if (data) {
        updatePercentiles(data, f => f.properties.income[value]);
        const newMapStyle = mapStyle.setIn(
          ["sources", "incomeByState", "data"],
          fromJS(data)
        );
        this.setState({ mapStyle: newMapStyle });
      }
    }
  };

  _onViewportChange = viewport => this.setState({ viewport });

  _onHover = event => {
    const {
      features,
      srcEvent: { offsetX, offsetY }
    } = event;
    const hoveredFeature =
      features && features.find(f => f.layer.id === "data");

    this.setState({ hoveredFeature, x: offsetX, y: offsetY });
  };

  _renderTooltip() {
    const { hoveredFeature, x, y } = this.state;

    return (
      hoveredFeature && (
        <div className="tooltip" style={{ left: x, top: y }}>
          <div>State: {hoveredFeature.properties.name}</div>
          <div>Median Household Income: {hoveredFeature.properties.value}</div>
          <div>
            Percentile: {(hoveredFeature.properties.percentile / 8) * 100}
          </div>
        </div>
      )
    );
  }

  render() {
    const { mapStyle } = this.state;
    return (
      <React.Fragment>
        <ReactMapGL
          mapboxApiAccessToken={
            "pk.eyJ1IjoieWFjb2I4OSIsImEiOiJjamU3dTYxOXEwMzIwMnFteHB5MGYzbzZmIn0._u0BoH4XBwpB7EaYN8Xb2g"
          }
          {...this.state.viewport}
          mapStyle={mapStyle}
          onViewportChange={this._onViewportChange}
          onHover={this._onHover}
        >
          <ControlPanel
            containerComponent={this.props.containerComponent}
            settings={this.state}
            onChange={this._updateSettings}
          />
        </ReactMapGL>
      </React.Fragment>
    );
  }
}
