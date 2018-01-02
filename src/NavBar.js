import React, { Component } from 'react';
import NavData from './NavData';
import NavItem from './NavItem';
import SignIn from './SignIn';

class NavBar extends Component {
  render() {

    return (
      <div>
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <a className="navbar-brand" href="/">After Bootcamp</a>
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#nav-collapse">
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
            </div>
            <div className="collapse navbar-collapse" id="nav-collapse">
              <ul className="nav navbar-nav navbar-right">
                <li>
                    <div className="nav navbar-form">
                      <div className="form-group">
                        <SignIn />
                      </div>
                    </div>
                </li>
                <div>
                  <div className="nav navbar-nav navbar-right">
                      <li className="dropdown">
                        <a href="" className="dropdown-toggle" data-toggle="dropdown">Menu<div className="caret"></div></a>
                        <div className="dropdown-menu">
                          <ul className="nav navbar-nav">{ <NavItem data={NavData} /> }</ul>
                        </div>
                      </li>
                  </div>
                </div>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
};

export default NavBar
