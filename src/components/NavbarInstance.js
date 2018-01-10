import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { login, logout, isLoggedIn } from '../utils/AuthService';
import {NavItem, Navbar} from 'react-bootstrap';
import '../CSS/App.css'

// Child Components
// import NavData from './NavData';
// import NavItem from './NavItem';
// import AboutMe from './AboutMe';

class NavbarInstance extends Component {

  render() {
    return (

        <nav className="navbar navbar-default">
          <div className="navbar-header">
            <Link className="navbar-brand" to="/" >AfterBootcamp</Link>
          </div>
          <NavItem eventKey={1} href="/">
            Intro
          </NavItem>
          <NavItem eventKey={2} href="/about_us">
            About Us
          </NavItem>
          {
            ( isLoggedIn() ) ? <NavItem eventKey={3} href="/dashboard">dashboard</NavItem> : ''
          }
          <ul className="nav navbar-nav navbar-right">
            <li>
              {
                (isLoggedIn() ? ( <Link className="btn btn-danger log" to="/" onClick={() => logout()}>Log out </Link>) : (<button className="btn btn-info log" onClick={() => login()}>Log In</button>))
              }
            </li>
          </ul>
        </nav>
    );
  }
};

export default NavbarInstance
