import React, { Component } from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";
import Home from "./Home.jsx";
import Maplab from "./Maplab.jsx";
import Contact from "./Contact.jsx";

class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <h1 style={{ color: "rgb(54,54,54)" }}>Mapping Laboratory</h1>
          <ul className="header">
            <li>
              <NavLink exact to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/maplab">Maplab</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
          <div className="content">
            <Route exact path="/" component={Home} />
            <Route path="/maplab" component={Maplab} />
            <Route path="/contact" component={Contact} />
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default Main;
