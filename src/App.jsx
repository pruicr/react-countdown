import React, { Component } from 'react'
import { Form, FormControl, Button } from 'react-bootstrap'

import Clock from './Clock.jsx'
import './App.css'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      deadline: 'December 25, 2017',
      newDeadline: ''
    }
  }

  changeDeadline() {
    this.setState({deadline: this.state.newDeadline})
  }

  render() {
    return (
      <div className="App">
        <div className="App-title">Coundown to {this.state.deadline}</div>
        <Clock deadline={this.state.deadline}/>
        <Form inline>
          <FormControl className="Deadline-input" onChange={e => this.setState({newDeadline: e.target.value})} type="text" placeholder="new date"/>
          <Button onClick={() => this.changeDeadline()}>Submit</Button>
        </Form>
      </div>
    )
  }
}
