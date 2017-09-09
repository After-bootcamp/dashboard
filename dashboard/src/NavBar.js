import React, { Component } from 'react';
import NavData from './NavData';
import NavItem from './NavItem';

class NavBar extends Component {
  render() {
    
    return (
      <div>
        <nav className="navbar navbar-default">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#nav-collapse">
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="/localhost:3000">After Bootcamp</a>
          </div>
          <div className="navbar-collapse" id="nav-collapse">
            <div className="nav navbar-nav">{<NavItem data={NavData}/>}</div>
          </div>
        </nav>
      </div>
    );
  }
};

export default NavBar
