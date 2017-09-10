import React, { Component } from 'react';
import NavData from './NavData';
import NavItem from './NavItem';

class NavBar extends Component {
  render() {
    
    return (
      <div>
        <nav className="navbar navbar-default">
          <div className="navbar-header">
            <a className="navbar-brand" href="/localhost:3000">After Bootcamp</a>
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#nav-collapse">
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
          </div>
          <div className="navbar-collapse" id="nav-collapse">
            <div className="nav navbar-nav navbar-right">
              <div className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown">Menu <span className="caret"></span></a>
                <div className="dropdown-menu">
                  <ul className="nav navbar-nav">{ <NavItem data={NavData} /> }</ul>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
};

export default NavBar
