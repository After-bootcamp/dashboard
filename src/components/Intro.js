import React, { Component } from 'react';
import "../CSS/App.css";


// childComponents
import NavBar from './NavBar';
import Footer from './Footer';

class Intro extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <h2>This will be an intro</h2>
        <Footer />
      </div>
    )
  }
}

export default Intro;
