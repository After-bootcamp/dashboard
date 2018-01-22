import React, {Component} from 'react';
// import { Link, NavLink } from 'react-router-dom';
import {NavItem, Navbar, Nav} from 'react-bootstrap';
import {login, logout, isLoggedIn} from '../utils/AuthService';
import '../CSS/App.css';


class NavbarInstance extends Component {

  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    window.location = "/about_us";
    logout();
  }
  render() {
    return (
      <Navbar >
        <Navbar.Header >
          <Navbar.Brand>
            <a href="/" >AfterBootcamp</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav >
            <NavItem eventKey={1} href="/">
              Intro
            </NavItem>
            <NavItem eventKey={2} href="/about_us">
              About Us
            </NavItem>
            {
              (isLoggedIn() ? <NavItem eventKey={3} href="/dashboard">Dashboard</NavItem> : "")
            }
          </Nav>
          <Nav pullRight>
            {
              (isLoggedIn()) ? (<NavItem className="btn btn-danger log" onClick={() =>  this.handleClick()} eventKey={4} >Log Out</NavItem>) : (<NavItem className="btn btn-info log" onClick={() => login()} eventKey={4} >Log In</NavItem>)
            }
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
};

export default NavbarInstance;
