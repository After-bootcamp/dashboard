import React, { Component } from "react";
import { Modal } from "react-bootstrap";

class SignIn extends Component {
  constructor (props) {
    super(props);
    this.state = {
      showModal: false,
      username: '',
      password: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    // this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
  };

  close() {
    this.setState({ showModal: false });
  }

  open() {
    this.setState({ showModal: true });
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
    // console.log(event.target.name);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    })
  }

  handleSubmit(event) {
    console.log("A name was submitted: " + this.state.username + " with a password of " + this.state.password);
    event.preventDefault();
    this.close();
  }

  render(props) {
    return (
      <div>
        <h3
          className="btn btn-success"
          onClick={this.open}
          >
            Sign in screen
        </h3>
        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>Please Sign In</Modal.Title>
          </Modal.Header>
          <Modal.Body>


            <form onSubmit={this.handleSubmit}>
              <label>
                Name:
                <input
                  type="text"
                  name="username"
                  value={this.state.username} onChange={this.handleInputChange}
                />
              </label>
              <label>
                Password:
                <input
                  type="text"
                  name="password"
                  value={this.state.password} onChange={this.handleInputChange}
                />
              </label>
              <input type="submit" value="submit" />
            </form>


          </Modal.Body>
        </Modal>
      </div>
    )
  }
}

export default SignIn
