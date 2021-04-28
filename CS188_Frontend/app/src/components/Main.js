import React, { Component, Fragment } from "react";
import background from "../images/intro.png";
import "../App.css";
import Header from "./Header";
import Login from "./Login";
import Routes from "./Routes";

export default class Main extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="Home-intro"></div>
        <div className="login-form">
          <Login />{" "}
        </div>
      </div>
    );
  }
}
