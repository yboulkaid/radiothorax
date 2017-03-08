import React, { Component } from 'react'
import logo from './logo.svg'
import MainSlider from './mainSlider.js'
import './App.css'

class App extends Component {
  constructor () {
    super()
    this.setFrame = this.setFrame.bind(this)
    this.state = {
      frame: 0,
      totalFrames: 100
    }
  }

  setFrame (frame) {
    this.setState(
      {
        frame: frame,
        totalFrames: this.state.totalFrames
      }
    )
  }

  render () {
    return (
      <div className='App'>
        <div className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h2>Youssef teste</h2>
        </div>
        <MainSlider frame={this.state.frame} totalFrames={this.state.totalFrames} setFrameHandler={this.setFrame} />
      </div>
    )
  }
}


export default App
