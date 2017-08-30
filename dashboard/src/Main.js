import React, { Component } from 'react';

import CheckIn from "./CheckIn";

class Main extends Component {
  render() {
    return (
      <div className="main_section">
        <h2>DASHBOARD</h2>
        <h3 className="btn btn-success">Check In (if it is a new day)</h3>
        <CheckIn />
      </div>
    )
  }
}


export default Main;
