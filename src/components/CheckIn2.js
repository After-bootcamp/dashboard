import React, {Component} from "react";
import { Modal, Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";


class CheckIn2 extends Component {
  constructor (props) {
    super(props);
    this.state = {
      todaysData: props.todaysData,
      show: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  componentDidMount() {
    console.log("state at Checkin2: ", this.state.todaysData);
  }

  handleSubmit(event) {
    console.log("You have submitted this: ", this.state.todaysData);
    event.preventDefault();
    this.handleClose();
    this.props.showAnswers(this.state);
  }

  handleInputChange(event) {
    const target = event.target;
    let value = target.value;
    const name = target.name;
    let tempArray = this.state.todaysData.slice();
    console.log(tempArray);
    tempArray[name].value = parseInt(value);
    this.setState({
      todaysData:tempArray
    });
  }

  handleShow() {
    this.setState({show: true});
  }

  handleClose() {
    this.setState({show: false})
  }

  render() {
    return(
      <div>
        <h3>Check In Time!</h3>
        <Button bsStyle="info" bsSize="large" onClick={this.handleShow}>
          Check in here
        </Button>
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Check in here</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <form onSubmit={this.handleSubmit}>
            {[...this.state.todaysData.keys()].map((n) => (
              <FormGroup key={n} controlId="formControlSelect">
                <ControlLabel>{this.state.todaysData[n].label}</ControlLabel>
                <FormControl name={n} componentClass="select" value={this.state.todaysData[n].value} onChange={this.handleInputChange}>
                  {
                    [...Array(25).keys()].map((m)=>(<option key={m} value={`${m}`}>{m}</option>))
                  }
                </FormControl>
              </FormGroup>
            ))}
            <Button type="submit" >Submit</Button>
          </form>
          </Modal.Body>
        </Modal>
      </div>
    )
  }
}

export default CheckIn2;
