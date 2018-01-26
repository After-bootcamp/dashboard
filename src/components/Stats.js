import React, { Component } from 'react';

// import CheckIn from "./CheckIn";
import CheckIn2 from "./CheckIn2";
import Charts from "./Charts";

class Stats extends Component {
  constructor(props) {
    super();
    this.state = {
      todaysData:[
         { index: 1, value: 3, label: 'Code Challenges'},
         { index: 2, value: 2, label: 'Job Search'},
         { index: 3, value: 3, label: 'Networking'},
         { index: 4, value: 4, label: 'Algorithms'},
         { index: 5, value: 5, label: 'Coding Playground'},
      ],
      weeksData:[
        { index: 1, value: 3, label: 'Code Challenges'},
        { index: 2, value: 2, label: 'Job Search'},
        { index: 3, value: 3, label: 'Networking'},
        { index: 4, value: 4, label: 'Algorithms'},
        { index: 5, value: 5, label: 'Coding Playground'},
      ]
    }
  }
  showAnswers(answers) {
    this.setState({answers}, this.forceUpdate())
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
          weeksData={this.state.weeksData}
        />
      </div>
    )
  }
}

export default Stats;
