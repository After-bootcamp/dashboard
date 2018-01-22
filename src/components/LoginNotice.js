import React, { Component } from "react";
import "../CSS/App.css";
import {login} from '../utils/AuthService';

// child Components
import {Button, Modal} from "react-bootstrap";


class LoginNotice extends Component {
  constructor() {
    super();

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = { ShowModal: true };
  }

  handleClose() {
    window.location = '/'
    this.setState({
      ShowModal: false
    });
  }

  handleShow() {
    this.setState({
      ShowModal: true
    });
  }

  render() {
    return (
      <div>
        <Modal show={this.state.ShowModal} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>
              Please Login
            </Modal.Title>
          </Modal.Header>

          <Modal.Body>
            If you would like to view this page, please Login/ Sign up
          </Modal.Body>

          <Modal.Footer>
            <Button onClick={this.handleClose}>Close</Button>
            <Button className="btn btn-info log" onClick={() => login()}>Log In</Button>
          </Modal.Footer>


        </Modal>

      </div>
    )
  }
}

export default LoginNotice;
