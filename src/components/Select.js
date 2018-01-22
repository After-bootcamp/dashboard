import React, {Component} from "react";

class Select extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value,
      newNumber: props.value.A,
      currentIndex: props.currentIndex
    }
    this.handleChange= this.handleChange.bind(this);
  }
  seeNewNumber(){
    console.log(this.state.newNumber);
  }
  handleChange(event) {
    this.setState({newNumber: event.target.value},() => {
      console.log(this.state.newNumber);
      this.props.showAnswers(this.state.newNumber, this.state.currentIndex );
    });
    event.preventDefault();
  }
  render() {
    return(
      <select value={this.state.newNumber} onChange={this.handleChange}>
        {[...Array(25).keys()].map((n)=>(<option key={n} value={`${n}`}>{n}</option>))}
      </select>
    )
  }
}

export default Select;
