import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

// child Components
import Header from './Header'
import Footer from './Footer'


class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Footer />
      </div>
    );
  }
}

export default App;
