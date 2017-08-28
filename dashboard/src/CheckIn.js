import React, { Component } from 'react';

class CheckIn extends Component {
  constructor (props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submited: '+ this.state.value);
    console.log(this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <div className="check_in_section">
        <h1>CheckIn form to be added here.</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" value={this.state.value} onChange={this.handleChange}/>
          </label>
          <input type="submit" value="Submit"/>
        </form>
      </div>
    )
  }
}

export default CheckIn;
