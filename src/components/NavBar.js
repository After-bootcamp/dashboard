import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { login, logout, isLoggedIn } from '../utils/AuthService';
import '../CSS/App.css'

// Child Components
import NavData from './NavData';
import NavItem from './NavItem';
import AboutMe from './AboutMe';

class NavBar extends Component {

  render() {
    return (
        <nav className="navbar navbar-default">
          <div className="navbar-header">
            <Link className="navbar-brand" to="/" >AfterBootcamp</Link>
          </div>
          <ul className="nav navbar-nav">
            <li>
              <Link to='/'>Intro</Link>
              <Link to='/about_us'>About Us</Link>
            </li>
            <li>
            {
              ( isLoggedIn() ) ? <Link to="/dashboard">dashboard</Link> : ''
            }
            </li>
          </ul>
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

export default NavBar
