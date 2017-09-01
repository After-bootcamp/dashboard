import React, { Component } from 'react';

class Questions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedRating: '1'
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({selectedRating: event.target.value


    },function() {
      this.props.addRating(this.props.question, this.state.selectedRating)
    })
  }

  render() {
    return (
      <FormGroup>
        <Radio
          value="1"
          name="radioGroup"
          checked={this.state.selectedRating === '1'}
          onChange={this.handleChange}
          inline>
          1
        </Radio>
        <Radio
          value="2"
          name="radioGroup"
          checked={this.state.selectedRating === '2'}
          onChange={this.handleChange}
          inline>
          2
        </Radio>
        <Radio
          value="3"
          name="radioGroup"
          checked={this.state.selectedRating === '3'}
          onChange={this.handleChange}
          inline>
          3
        </Radio>
        <Radio
          value="4"
          name="radioGroup"
          checked={this.state.selectedRating === '4'}
          onChange={this.handleChange}
          inline>
          4
        </Radio>
        <Radio
          value="5"
          name="radioGroup"
          checked={this.state.selectedRating === '5'}
          onChange={this.handleChange}
          inline>
          5
        </Radio>
          Question 1
      </FormGroup>
    )
  }
}

export default Questions;
