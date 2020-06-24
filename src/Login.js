import React, { Component } from 'react';
import fire from './config/Fire';
// import { Link } from 'react-router-dom';

class Login extends Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.login = this.login.bind(this)
    this.signup = this.signup.bind(this)
  }

  login(e) {
    e.preventDefault();
    fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
      .catch((error) => {
        console.log(error)
      })
  }

  signup(e) {
    e.preventDefault();
    fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
      .catch((error) => {
        console.log(error)
      })
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <div>
        <form>
          <div className='form-group'>
            <label htmlFor="exampleInputEmail">Email Address</label>
            <input value={this.state.email} onChange={this.handleChange} type="email" name="email" placeholder="Enter email" />
          </div>

          <div className='form-group'>
            <label htmlFor='exampleInputPassword'>Password</label>
            <input value={this.state.password} onChange={this.handleChange} type="password" name="password" placeholder="Enter password" />
          </div>

          <button type="submit" onClick={this.login} className="submit-btn">Login</button>
          <button onClick={this.signup} className='signup-btn'>Signup</button>
        </form>

      </div>
    )
  }
}

export default Login;