import React, {Component} from "react";
import {Radar, RadarChart, PolarGrid, Legend, PolarAngleAxis, PolarRadiusAxis, RadialBarChart, RadialBar, Tooltip} from "recharts";

const data = [
 { subject: 'Code Challenges', A: 140 },
 { subject: 'Job Search', A: 98 },
 { subject: 'Networking', A: 86 },
 { subject: 'Algorithms', A: 99},
 { subject: 'Coding Playground', A: 85},
];

const style = {
  top: 0,
  left: 350,
  lineHeight: '24px'
};


class Charts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todaysData: props.todaysData,
      currentData: props.currentData
    };
  }
  render() {
    return (
      <div>
        <RadarChart cx={300} cy={250} outerRadius={150} width={600} height={500} data={this.state.todaysData}>
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" />
          <PolarRadiusAxis/>
          <Tooltip />
          <Legend />
          <Radar name="Today's info" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6}/>
        </RadarChart>
        <h2>Charts(some kind of progress thingy)</h2>
        <h3>Code Challenges: {this.state.currentData.selectedOption1}</h3>
        <h3>Job Search: {this.state.currentData.selectedOption2}</h3>
        <h3>Networking: {this.state.currentData.selectedOption3}</h3>
        <h3>Algorithms: {this.state.currentData.selectedOption4}</h3>
        <h3>Coding Playground: {this.state.currentData.selectedOption5}</h3>
        <h3>Available Time: {this.state.currentData.selectedHours}</h3>
      </div>
    )
  }
};


export default Charts;
