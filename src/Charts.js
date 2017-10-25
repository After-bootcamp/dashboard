import React from "react";

const Charts = (props) => 
  return (
    <div>
      <h2>Charts(some kind of progress thingy)</h2>
      <h3>Code Challenges: {props.currentData.selectedOption1}</h3>
      <h3>Job Search: {props.currentData.selectedOption2}</h3>
      <h3>Networking: {props.currentData.selectedOption3}</h3>
      <h3>Algorithms: {props.currentData.selectedOption4}</h3>
      <h3>Coding Playground: {props.currentData.selectedOption5}</h3>
      <h3>Community Forum: {props.currentData.selectedOption6}</h3>
      <h3>Available Time: {props.currentData.selectedHours}</h3>
    </div>
  );
};


export default Charts;
