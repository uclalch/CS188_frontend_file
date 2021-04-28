import React, { Component, Fragment } from "react";
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
import background from "../images/intro.png";
import "../App.css";
import Header from "./Header";
import Login from "./Login";
import Routes from "./Routes";

export default class Direct extends Component {
  render() {
    return (
      <div>
        <Header />
        <Button variant="primary" size="lg" color="color.Green" block>
          I am a Recuiter
        </Button>
        <Button variant="secondary" size="lg" color="Green" block>
          I am a Student
        </Button>
      </div>
    );
  }
}
