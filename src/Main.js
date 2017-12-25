import React, { Component } from 'react';

import Stats from "./Stats";
import AboutMe from "./AboutMe"
import { Switch, Route } from 'react-router-dom';

class Main extends Component {




  render() {
    return (
      <div className="main_section">
        <Switch>
          <Route exact path="/" component={Stats} />
          <Route path="/about-us" component={AboutMe} />
        </Switch>
      </div>
    )
  }
}

export default Main;
