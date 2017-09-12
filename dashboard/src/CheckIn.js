import React, { Component } from 'react'
import { Modal, FormGroup, Radio, FormControl, ControlLabel } from 'react-bootstrap';

class CheckIn extends Component {
  constructor (props) {
    super(props);
    this.state = {
      showModal: false,
      selectedOption1: '0',
      selectedOption2: '0',
      selectedOption3: '0',
      selectedOption4: '0',
      selectedOption5: '0',
      selectedOption6: '0',
      selectedHours: '0'
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.open = this.open.bind(this)
    this.close = this.close.bind(this)

    this.handleOptionChange1 = this.handleOptionChange1.bind(this);
    this.handleOptionChange2 = this.handleOptionChange2.bind(this);
    this.handleOptionChange3 = this.handleOptionChange3.bind(this);
    this.handleOptionChange4 = this.handleOptionChange4.bind(this);
    this.handleOptionChange5 = this.handleOptionChange5.bind(this);
    this.handleOptionChange6 = this.handleOptionChange6.bind(this);
    this.handleSelectChange = this.handleSelectChange.bind(this);
  }

  close() {
    this.setState({ showModal: false })
  }

  open() {
    this.setState({ showModal: true })
  }

  handleSubmit(event) {
    event.preventDefault()
    console.log(this.state)
    this.close()
  }

  handleChange(event) {
  }

  handleOptionChange1(event, name) {
    this.setState({
      selectedOption1: event.target.value
    })
  }

  handleOptionChange2(event) {
    this.setState({
      selectedOption2: event.target.value
    })
  }

  handleOptionChange3(event) {
    this.setState({
      selectedOption3: event.target.value
    })
  }

  handleOptionChange4(event) {
    this.setState({
      selectedOption4: event.target.value
    })
  }

  handleOptionChange5(event) {
    this.setState({
      selectedOption5: event.target.value
    })
  }

  handleOptionChange6(event) {
    this.setState({
      selectedOption6: event.target.value
    })
  }

  handleSelectChange(event) {
    this.setState({
      selectedHours: event.target.value
    })
  }

  render() {
    return (
      <div>
        <h3
          className="btn btn-success"
          onClick={this.open}
          >
            Check In (if it is a new day)
        </h3>
        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>How much work did you do yesterday?</Modal.Title>
            <p><strong>Rate yourself 1 to 5.</strong></p>
          </Modal.Header>
          <Modal.Body>
            <form onSubmit={this.handleSubmit} action="">
              <p>Code Challenges</p>
              <FormGroup>
                <Radio name="radioGroup1" value="1" checked={this.state.selectedOption1 === "1"} onChange={this.handleOptionChange1} inline>
                  1
                </Radio>
                {' '}
                <Radio name="radioGroup1" value="2" checked={this.state.selectedOption1 === "2"} onChange={this.handleOptionChange1} inline>
                  2
                </Radio>
                {' '}
                <Radio name="radioGroup1" value="3" checked={this.state.selectedOption1 === "3"} onChange={this.handleOptionChange1} inline>
                  3
                </Radio>
                {' '}
                <Radio name="radioGroup1" value="4" checked={this.state.selectedOption1 === "4"} onChange={this.handleOptionChange1} inline>
                  4
                </Radio>
                {' '}
                <Radio name="radioGroup1" value="5" checked={this.state.selectedOption1 === "5"} onChange={this.handleOptionChange1} inline>
                  5
                </Radio>
              </FormGroup>
              <p>Job Hunt</p>
              <FormGroup>
                <Radio name="radioGroup2" value="1" checked={this.state.selectedOption2 === "1"} onChange={this.handleOptionChange2} inline>
                  1
                </Radio>
                {' '}
                <Radio name="radioGroup2" value="2" checked={this.state.selectedOption2 === "2"} onChange={this.handleOptionChange2} inline>
                  2
                </Radio>
                {' '}
                <Radio name="radioGroup2" value="3" checked={this.state.selectedOption2 === "3"} onChange={this.handleOptionChange2} inline>
                  3
                </Radio>
                {' '}
                <Radio name="radioGroup2" value="4" checked={this.state.selectedOption2 === "4"} onChange={this.handleOptionChange2} inline>
                  4
                </Radio>
                {' '}
                <Radio name="radioGroup2" value="5" checked={this.state.selectedOption2 === "5"} onChange={this.handleOptionChange2} inline>
                  5
                </Radio>
              </FormGroup>
              <p>Networking</p>
              <FormGroup>
                <Radio name="radioGroup3" value="1" checked={this.state.selectedOption3 === "1"} onChange={this.handleOptionChange3} inline>
                  1
                </Radio>
                {' '}
                <Radio name="radioGroup3" value="2" checked={this.state.selectedOption3 === "2"} onChange={this.handleOptionChange3} inline>
                  2
                </Radio>
                {' '}
                <Radio name="radioGroup3" value="3" checked={this.state.selectedOption3 === "3"} onChange={this.handleOptionChange3} inline>
                  3
                </Radio>
                {' '}
                <Radio name="radioGroup3" value="4" checked={this.state.selectedOption3 === "4"} onChange={this.handleOptionChange3} inline>
                  4
                </Radio>
                {' '}
                <Radio name="radioGroup3" value="5" checked={this.state.selectedOption3 === "5"} onChange={this.handleOptionChange3} inline>
                  5
                </Radio>
              </FormGroup>
              <p>Algorithms</p>
              <FormGroup>
                <Radio name="radioGroup4" value="1" checked={this.state.selectedOption4 === "1"} onChange={this.handleOptionChange4} inline>
                  1
                </Radio>
                {' '}
                <Radio name="radioGroup4" value="2" checked={this.state.selectedOption4 === "2"} onChange={this.handleOptionChange4} inline>
                  2
                </Radio>
                {' '}
                <Radio name="radioGroup4" value="3" checked={this.state.selectedOption4 === "3"} onChange={this.handleOptionChange4} inline>
                  3
                </Radio>
                {' '}
                <Radio name="radioGroup4" value="4" checked={this.state.selectedOption4 === "4"} onChange={this.handleOptionChange4} inline>
                  4
                </Radio>
                {' '}
                <Radio name="radioGroup4" value="5" checked={this.state.selectedOption4 === "5"} onChange={this.handleOptionChange4} inline>
                  5
                </Radio>
              </FormGroup>
              <p>Coding Playground</p>
              <FormGroup>
                <Radio name="radioGroup5" value="1" checked={this.state.selectedOption5 === "1"} onChange={this.handleOptionChange5} inline>
                  1
                </Radio>
                {' '}
                <Radio name="radioGroup5" value="2" checked={this.state.selectedOption5 === "2"} onChange={this.handleOptionChange5} inline>
                  2
                </Radio>
                {' '}
                <Radio name="radioGroup5" value="3" checked={this.state.selectedOption5 === "3"} onChange={this.handleOptionChange5} inline>
                  3
                </Radio>
                {' '}
                <Radio name="radioGroup5" value="4" checked={this.state.selectedOption5 === "4"} onChange={this.handleOptionChange5} inline>
                  4
                </Radio>
                {' '}
                <Radio name="radioGroup5" value="5" checked={this.state.selectedOption5 === "5"} onChange={this.handleOptionChange5} inline>
                  5
                </Radio>
              </FormGroup>
              <p>Community Forum</p>
              <FormGroup>
                <Radio name="radioGroup6" value="1" checked={this.state.selectedOption6 === "1"} onChange={this.handleOptionChange6} inline>
                  1
                </Radio>
                {' '}
                <Radio name="radioGroup6" value="2" checked={this.state.selectedOption6 === "2"} onChange={this.handleOptionChange6} inline>
                  2
                </Radio>
                {' '}
                <Radio name="radioGroup6" value="3" checked={this.state.selectedOption6 === "3"} onChange={this.handleOptionChange6} inline>
                  3
                </Radio>
                {' '}
                <Radio name="radioGroup6" value="4" checked={this.state.selectedOption6 === "4"} onChange={this.handleOptionChange6} inline>
                  4
                </Radio>
                {' '}
                <Radio name="radioGroup6" value="5" checked={this.state.selectedOption6 === "5"} onChange={this.handleOptionChange6} inline>
                  5
                </Radio>
              </FormGroup>
              <FormGroup controlId="formControlsSelect">
                <ControlLabel># Hours Available Today</ControlLabel>
                <FormControl onChange={this.handleSelectChange} componentClass="select" placeholder="select">
                  {[...Array(25).keys()].map((n)=>(<option key={n} value={`${n}`}>{n}</option>))}
                </FormControl>
              </FormGroup>
              <button>Submit</button>
            </form>
          </Modal.Body>
        </Modal>
      </div>
    )
  }
}

export default CheckIn;
