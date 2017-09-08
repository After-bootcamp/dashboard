import React, { Component } from 'react';
// import logo from './logo.svg';
import './CSS/App.css';

// child Components
import NavBar from './NavBar'
import NavList from './NavList'
import Footer from './Footer'
import Main from './Main'


class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
