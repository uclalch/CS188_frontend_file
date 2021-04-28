import React, { Component, Fragment } from "react";
import background from "./images/intro.png";
import "./App.css";
import Header from "./components/Header";
import Login from "./components/Login";
import Routes from "./components/Routes";

export default class App extends Component {
  render() {
    return (
      <div>
        <Routes />
      </div>
    );
  }
}
