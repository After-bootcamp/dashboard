import React, { Component } from 'react'
import { Modal } from 'react-bootstrap';
import Rating from './Rating';

class CheckIn extends Component {
  constructor (props) {
    super(props);
    this.state = {
      showModal: false,
      question1 : ' ',
      question2 : ' ',
      question3 : ' ',
      question4 : ' ',
      question5 : ' ',
      question6 : ' ',
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.open = this.open.bind(this)
    this.close = this.close.bind(this)

  }

  close() {
    this.setState({ showModal: false })
  }

  open() {
    this.setState({ showModal: true })
  }

  handleSubmit(event) {
    event.preventDefault()
    console.log('You have selected:', this.state.question1)
  }

  handleAddRating(question, rating) {
    // this.setState({
    //   question1: rating,
    //   question2: rating,
    //   question3: rating,
    //   question4: rating,
    //   question5: rating,
    //   question6: rating
    // })
    console.log(question)
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
        <Modal className="check_in_section" show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form onSubmit={this.handleSubmit} action="">
              <Rating question={'question1'} addRating={this.handleAddRating.bind(this)}/>
              <Rating question={'question2'} addRating={this.handleAddRating.bind(this)}/>
              <Rating question={'question3'} addRating={this.handleAddRating.bind(this)}/>
              <Rating question={'question4'} addRating={this.handleAddRating.bind(this)}/>
              <Rating question={'question5'} addRating={this.handleAddRating.bind(this)}/>
              <Rating question={'question6'} addRating={this.handleAddRating.bind(this)}/>
              <button>Submit</button>
            </form>
          </Modal.Body>
        </Modal>
      </div>
    )
  }
}

export default CheckIn;
