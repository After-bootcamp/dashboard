import React, { Component } from "react";
// import logo from './logo.svg';
import "./CSS/App.css";

// child Components
import NavBar from "./NavBar";
import Footer from "./Footer";
import Main from "./Main";


class App extends Component {
  constructor() {
    super();
    this.state = {
      todaysData: [{test: "test"}]
    };
  }


  render() {
    return (
      <div>
        <NavBar />
        <Main todaysData={ this.state.todaysData }/>
        <Footer />
      </div>
    );
  }
}

export default App;
