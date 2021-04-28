import { Redirect, useHistory, BrowserRouter } from "react-router-dom";
import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import Headers from "./Header";
import "../App.css";

import {
  faUserAlt,
  faSignInAlt,
  faLock,
  faDivide,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Row,
  Col,
  Alert,
  Container,
  Card,
  CardBody,
  CardTitle,
  CardText,
  InputGroup,
  CardLink,
} from "reactstrap";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
  }
  render() {
    return (
      <div>
        <Headers />
        <form className="signup-form">
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="inputEmail4">Email</label>
              <input
                type="email"
                class="form-control"
                id="inputEmail4"
                placeholder="Email"
              ></input>
            </div>
            <div class="form-group col-md-6">
              <label for="inputPassword4">Password</label>
              <input
                type="password"
                class="form-control"
                id="inputPassword4"
                placeholder="Password"
              ></input>
            </div>
          </div>
          <div class="form-group">
            <label for="re-enter-password">Re-enter Password</label>
            <input
              type="text"
              class="form-control"
              id="re-enter-password"
              placeholder="Password"
            ></input>
          </div>
          <div class="form-group">
            <label for="inputAddress">Address</label>
            <input
              type="text"
              class="form-control"
              id="inputAddress"
              placeholder="1234 Main St"
            ></input>
          </div>
          <div class="form-group">
            <label for="inputAddress2">Address 2</label>
            <input
              type="text"
              class="form-control"
              id="inputAddress2"
              placeholder="Apartment, studio, or floor"
            ></input>
          </div>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="inputCity">City</label>
              <input type="text" class="form-control" id="inputCity"></input>
            </div>
            <div class="form-group col-md-4">
              <label for="inputState">State</label>
              <select id="inputState" class="form-control">
                <option selected>Choose...</option>
                <option value="1">CA</option>
              </select>
            </div>
            <div class="form-group col-md-2">
              <label for="inputZip">Zip</label>
              <input type="text" class="form-control" id="inputZip"></input>
            </div>
          </div>
          <div class="form-group">
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                id="gridCheck"
              ></input>
              <label class="form-check-label" for="gridCheck">
                Check me out
              </label>
            </div>
          </div>
          <button type="submit" class="btn btn-primary">
            Sign up
          </button>
          <div />
          <button type="submit" class="btn btn-primary">
            Save
          </button>
          <div />
          <button type="submit" class="btn btn-secondary">
            Back
          </button>
        </form>
      </div>
    );
  }
}
export default Signup;
