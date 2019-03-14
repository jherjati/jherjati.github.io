import React, { PureComponent } from "react";

const defaultContainer = ({ children }) => (
  <div className="control-panel">{children}</div>
);

export default class ControlPanel extends PureComponent {
  render() {
    const Container = this.props.containerComponent || defaultContainer;
    const { settings } = this.props;

    return (
      <Container>
        <div>
        <p>
          Map showing median household income by state in year{" "}
          <b>{settings.year}</b>. Data
          source: <a href="www.census.gov">US Census Bureau</a>
        </p>
        <div className="input">
          <label>Year</label>
          <input
            type="range"
            value={settings.year}
            min={1995}
            max={2015}
            step={1}
            onChange={evt => this.props.onChange("year", evt.target.value)}
          />
        </div>
        </div>
      </Container>
    );
  }
}
