import React, { Component } from 'react';
import NavList from './NavList';
// import NavListLinks from './NavListLinks';

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
            <a className="navbar-brand" href='localhost:3000'>After Bootcamp</a>
          </div>
          <div className="collapse navbar-collapse" id="nav-collapse">
            <ul className="nav navbar-nav">{<NavList />}</ul>
          </div>
        </nav>
      </div>
    );
  }

};

export default NavBar;


  // render() {
  //   return (
  //     <div className="container">
  //       <div className="navbar fixed-top navbar-light" >
  //         <a className="navbar-brand" href="localhost:3000">After Bootcamp</a>
  //         <div className="pos-f-t">
  //           <div className="collapse" id="navbarToggleExternalContent">
  //             <div className="p-4">
  //               <h4 className="text-white">Main Menu</h4>

  //             </div>
  //           </div>
  //         </div>
  //         <nav className="navbar navbar-light">
  //           <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
  //             <span className="navbar-toggler-icon"></span>
  //           </button>
  //         </nav>
  //       </div>
  //     </div>
  //   )
  // }