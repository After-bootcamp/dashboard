import React, {Component} from 'react';
import { Link, NavLink } from 'react-router-dom';
import {login, logout, isLoggedIn} from '../utils/AuthService';
import {NavItem, Navbar, Nav, Button} from 'react-bootstrap';
import '../CSS/App.css';

class NavbarInstance extends Component {

  render() {
    return (
      <Navbar  collapseOnSelect>
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
              (isLoggedIn()) ? (<NavItem className="btn btn-danger log" onClick={() => logout()} eventKey={4} >Log Out</NavItem>) : (<NavItem className="btn btn-info log" onClick={() => login()} eventKey={4} > Log In</NavItem>)
            }
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
};

export default NavbarInstance;
