import React, { Component } from 'react';

import CheckIn from "./CheckIn";
import Charts from "./Charts";

class Main extends Component {
  constructor(props) {
    super();
    this.state ={
      todaysData: props.todaysData,
      currentData: {
        showModal: false,
        selectedOption1: '0',
        selectedOption2: '0',
        selectedOption3: '0',
        selectedOption4: '0',
        selectedOption5: '0',
        selectedOption6: '0',
        selectedHours: '0'
      }

    }
  }

  showAnswers(answers) {
    this.setState({currentData : answers}, console.log(this.state))
    console.log('the value of answers: ', answers);
  }

  render() {
    // const dataList = this.props.todaysData.map(item => {
    //   return (
    //     <p> {item.test} </p>
    //   )
    // })
    return (
      <div className="main_section">
      <h2>DASHBOARD</h2>
      <CheckIn
        todaysData={this.props.todaysData}
        showAnswers={this.showAnswers.bind(this)}
      />
      <Charts
        currentData={this.state.currentData}
      />
      </div>
    )
  }
}

export default Main;
