import React, { Component } from 'react';

import CheckIn from "./CheckIn";
import CheckIn2 from "./CheckIn2";
import Charts from "./Charts";

class Stats extends Component {
  constructor(props) {
    super();
    this.state = {
      todaysData:[
         { x: 1, y: 3, label: 'Code Challenges'},
         { x: 2, y: 2, label: 'Job Search'},
         { x: 3, y: 3, label: 'Networking'},
         { x: 4, y: 4, label: 'Algorithms'},
         { x: 5, y: 5, label: 'Coding Playground'},
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
    this.setState({todaysData : answers}, this.forceUpdate())
    console.log('the value of answers:  ', answers);
    // this.forceUpdate();
  }
  componentDidMount() {
    console.log(this.state.todaysData);
  }
  componentDidUpdate(prevProps, prevState) {
    console.log("stats did update", this.state.todaysData);
    console.log(prevState.todaysData);

    // if (this.state.todaysData !== prevState.todaysData) {
    //     this.setState({todaysData: prevState.todaysData});
    // }
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
          showAnswer={this.showAnswers.bind(this)}
        />
      </div>
    )
  }
}

export default Stats;
