import React, {Component} from "react";
// import {VictoryPie, VictoryContainer} from "victory";
// import {Radar, RadarChart, PolarGrid, Legend, PolarAngleAxis, PolarRadiusAxis, RadialBarChart, RadialBar, Tooltip, PieChart, Pie, ResponsiveContainer} from "recharts";
import {VictoryPie} from "victory";
// const style = {
//   top: 0,
//   left: 350,
//   lineHeight: '24px'
// };

class Charts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todaysData:props.todaysData,
      weeksData:props.weeksData
    };
  }

  render() {
    return (
      <div>
        <VictoryPie
          height={200}
          domainPadding={{ x: 100, y:20}}
          animate={{duration: 500}}
          colorScale={["tomato", "orange", "gold", "cyan", "navy" ]}
          data={this.state.todaysData}
          x="index"
          y="value"
        />

        <h3>Last 7 check ins</h3>
        <VictoryPie
          height={225}
          domainPadding={{ x: 100, y:20}}
          animate={{duration: 500}}
          colorScale={["tomato", "orange", "gold", "cyan", "navy" ]}
          data={this.state.weeksData}
          x="index"
          y="value"
        />
      </div>
    )
  }
};


export default Charts;
