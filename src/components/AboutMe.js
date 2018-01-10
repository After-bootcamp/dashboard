import React, { Component } from 'react';

// child components
import NavbarInstance from './NavbarInstance';
import Footer from './Footer';
import AboutData from './AboutData';
import AboutItem from './AboutItem';

class AboutMe extends Component {
  render() {
    return (
      <div>
        <NavbarInstance />
        <h1>About us</h1>
        <ul>{ <AboutItem data={AboutData} /> }</ul>
        <Footer />
      </div>
    );
  }
};

export default AboutMe
