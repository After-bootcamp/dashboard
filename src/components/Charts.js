import React, {Component} from "react";
import {VictoryPie, VictoryContainer} from "victory";
// import {Radar, RadarChart, PolarGrid, Legend, PolarAngleAxis, PolarRadiusAxis, RadialBarChart, RadialBar, Tooltip, PieChart, Pie, ResponsiveContainer} from "recharts";

const style = {
  top: 0,
  left: 350,
  lineHeight: '24px'
};

class Charts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todaysData: [
         { x: 1, y: 1, label: 'Code Challenges'},
         { x: 2, y: 1, label: 'Job Search'},
         { x: 3, y: 1, label: 'Networking'},
         { x: 4, y: 1, label: 'Algorithms'},
         { x: 5, y: 1, label: 'Coding Playground'},
      ],
    };
  }

  componentDidMount() {
    this.setState({todaysData: this.props.todaysData})
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("Previous props: ", prevProps, "& prevState: ", prevState);
    console.log(this.state.todaysData === prevState);
    console.log(this.state.todaysData);
    console.log(prevState.todaysData);
    // if (this.state.todaysData !== prevState.todaysData) {
    //   this.setState({todaysData: prevState.todaysData})
    // }
  }

  render() {
    return (
      <div>
          <VictoryPie
            colorScale={["tomato", "orange", "gold", "cyan", "navy" ]}
            data={this.state.todaysData}
          />
      </div>
    )
  }
};


export default Charts;
