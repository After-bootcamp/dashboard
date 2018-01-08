import React, { Component } from 'react';
import AboutData from './AboutData';
import AboutItem from './AboutItem';

class AboutMe extends Component {
  render() {
    return (
      <div>
        <h1>About us</h1>
        <ul>{ <AboutItem data={AboutData} /> }</ul>
      </div>
    );
  }
};

export default AboutMe
