import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { login, logout, isLoggedIn } from '../utils/AuthService';
import '../CSS/App.css'

// Child Components
import NavData from './NavData';
import NavItem from './NavItem';

class NavBar extends Component {

  render() {
    return (
        <nav className="navbar navbar-default">
          <div className="navbar-header">
            <Link className="navbar-brand" to="/" >AfterBootcamp</Link>
          </div>
          <ul>
            <li>
              <Link to='/'>Intro</Link>
            </li>
            <li>
            {
              ( isLoggedIn() ) ? <Link to="/main_page">Home</Link> : ''
            }
            </li>
          </ul>
          <ul className="nav navbar-nav navbar-right">
            <li>
              {
                (isLoggedIn() ? ( <button className="btn btn-danger log" onClick={() => logout()}>Log out </button>) : (<button className="btn btn-info log" onClick={() => login()}>Log In</button>))
              }
            </li>
          </ul>
        </nav>
    );
  }
};

export default NavBar
