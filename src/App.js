import React, { Component } from 'react'
import Navbar from './components/navbar'
import News from './components/News'

export default class App extends Component {
  render() {
    return (
      <div style={{backgroundColor:'#A9A9A9'}}>
        <Navbar></Navbar>
        <News></News>
      </div>
    )
  }
}

