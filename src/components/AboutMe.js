import React, { Component } from 'react';

// child components
import NavBar from './NavBar';
import Footer from './Footer';
import AboutData from './AboutData';
import AboutItem from './AboutItem';

class AboutMe extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <h1>About us</h1>
        <ul>{ <AboutItem data={AboutData} /> }</ul>
        <Footer />
      </div>
    );
  }
};

export default AboutMe
