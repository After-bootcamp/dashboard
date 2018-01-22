import React, { Component } from 'react';

import CheckIn from "./CheckIn";
import CheckIn2 from "./CheckIn2";
import Charts from "./Charts";

class Stats extends Component {
  constructor(props) {
    super();
    this.state = {
      todaysData:[
         { name: 'Code Challenges', A: 3},
         { name: 'Job Search', A: 2},
         { name: 'Networking', A: 3},
         { name: 'Algorithms', A: 4},
         { name: 'Coding Playground', A: 5},
      ],
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
    this.setState({todaysData : answers}, console.log(this.state))
    console.log('the value of answers: ', answers);
  }

  render() {
    return (
      <div className="main_section">
        <h2>DASHBOARD</h2>

        <CheckIn2
          todaysData={this.state.todaysData}
          showAnswers={this.showAnswers.bind(this)}
        />
        <Charts
          todaysData={this.state.todaysData}
          currentData={this.state.currentData}
        />
      </div>
    )
  }
}

export default Stats;
