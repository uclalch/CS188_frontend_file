import React from "react";
import { Route } from "react-router";
/**
 * Import all page components here
 */
import App from "../App";
import Header from "./Header";
import Login from "./Login";
import Signup from "./Signup";
import Main from "./Main";
import Direct from "./Direct";

/**
 * All routes go here.
 * Don't forget to import the components above after adding new route.
 */
const Routes = () => {
  return (
    <switch>
      <Route exact path="/" component={Main}></Route>
      <Route exact path="/Signup" component={Signup}></Route>
      <Route exact path="/Direct" component={Direct}></Route>
    </switch>
  );
};

export default Routes;
