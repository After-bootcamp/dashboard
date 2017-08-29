import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div className="container">
        <div className="navbar fixed-top navbar-light" >
          <a className="navbar-brand" href="#">After Bootcamp</a>
          <div className="pos-f-t">
            <div className="collapse" id="navbarToggleExternalContent">
              <div className="p-4">
                <h4 className="text-white">Main Menu</h4>

              </div>
            </div>
          </div>
          <nav className="navbar navbar-light">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
          </nav>
        </div>
      </div>
    )
  }
}


export default Header;
