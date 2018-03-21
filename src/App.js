import React, { Component } from 'react'
import logo from './logo.svg'
import MainSlider from './mainSlider.js'
import SliceView from './sliceView.js'
import DetailedSlice from './detailedSlice.js'
import './App.css'
import './index.css'

class App extends Component {
  constructor () {
    super()
    this.setFrame = this.setFrame.bind(this)
    this.state = {
      frame: 0,
      totalFrames: 320
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
    const sideView1 = require('../public/images/side/side-1.PNG')
    const sideView2 = require('../public/images/side/side-2.PNG')

    return (
      <div className='App'>
        <div className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h2>It is not lupus</h2>
        </div>
        <div className='App-sidebar'>
          <SliceView frame={this.state.frame} totalFrames={this.state.totalFrames} image={sideView1} />
          <SliceView frame={this.state.frame} totalFrames={this.state.totalFrames} image={sideView2} />
        </div>
        <div className='App-detailed-slice'>
          <DetailedSlice frame={this.state.frame} />
        </div>
        <div className='App-footer'>
          <MainSlider frame={this.state.frame} totalFrames={this.state.totalFrames} setFrameHandler={this.setFrame} />
        </div>
      </div>
    )
  }
}

export default App
