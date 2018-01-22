import React, {Component} from "react";
import { Modal, FormGroup, Radio, FormControl, ControlLabel } from "react-bootstrap";
import Select from "./Select"

class CheckIn2 extends Component {
  constructor (props) {
    super(props);
    this.state = {
      todaysData: props.todaysData
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    console.log(this.state.todaysData[0]);
    event.preventDefault();
    this.props.showAnswers(this.state);
  }

  showAnswers(answers, index) {
    const newAnswer = parseInt(answers);
    this.state.todaysData[index].A = newAnswer;
    console.log('the value of newAnswer: ', newAnswer);
  }

  render() {
    return(
        <form onSubmit={this.handleSubmit}>
          {[...this.state.todaysData.keys()].map((n) => (
            <label key={n}>
              {this.state.todaysData[n].name}:
              <Select
                value={this.state.todaysData[n]}
                showAnswers={this.showAnswers.bind(this)}
                currentIndex={n}
              />
            </label>
          ))}
          <input type="submit" value="Submit" />
        </form>
    )
  }
}

export default CheckIn2;
