import React, { Component } from 'react'
import fire from './config/Fire'

class Home extends Component {
  constructor(props) {
    super(props)
    this.logout = this.logout.bind(this)
  }

  logout(e) {
    fire.auth().signOut();
  }

  render() {
    return (
      <div>
        <h1>You are home</h1>
        <button onClick={this.logout}>Logout</button>
      </div>
    )
  }
}

export default Home;