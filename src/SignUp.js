import React, { Component } from 'react';

class SignUp extends Component {
  constructor(props){
    super(props);
    this.state = {
      email: '',
      password: ''
    }
  }

  signUp() {
    const { email, password } = this.state;
    // console.log(email, password);
  }


  render() {
    return (
      <div className="form-inline">
        <div className="form-group">
          <input 
            className="form-control"
            type="text"
            placeholder="email"
            onChange={e => this.setState({email: e.target.value})}
          />

           <input 
            className="form-control"
            type="password"
            placeholder="password"
            onChange={e => this.setState({password: e.target.value})}
          />

          <button
            className="btn btn-primary btn-square"
            type="button"
            onClick={() => this.signUp()}
          >
          Sign Up
          </button>
        </div>
      </div>
    )
  }
}

export default SignUp;