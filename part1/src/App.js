import React, { Component } from 'react'
import logo from './logo.svg'
import MainSlider from './mainSlider.js'
import SliceView from './sliceView.js'
import DetailedSlice from './detailedSlice.js'
import LabelSelector from './labelSelector.js'
import './App.css'
import './index.css'

class App extends Component {
  constructor () {
    super()
    this.setFrame = this.setFrame.bind(this)
    this.setCaption = this.setCaption.bind(this)
    this.state = {
      frame: 0,
      totalFrames: 70,
      caption: 'set1'
    }
  }

  setFrame (frame) {
    this.setState(
      {
        frame: frame,
        totalFrames: this.state.totalFrames,
        caption: this.state.caption
      }
    )
  }

  setCaption (caption) {
    this.setState(
      {
        frame: this.state.frame,
        totalFrames: this.state.totalFrames,
        caption: caption
      }
    )
  }

  componentDidMount () {
    document.getElementById('scrollable').addEventListener(
      'wheel', (event) => { this.reactToScrollWheel(event) }
      , { capture: false, passive: false });
  }

  reactToScrollWheel (event) {
    var newFrame = this.state.frame
    if (event.deltaY > 0) {
      newFrame = Math.max(this.state.frame - 1, 0)
    } else {
      newFrame = Math.min(this.state.frame + 1, this.state.totalFrames)
    }
    this.setFrame(newFrame)
    event.preventDefault();
  }

  render () {
    const sideView1 = require('../public/images/radio/BoneAxial/sides/side-1.jpg')
    const sideView2 = require('../public/images/radio/BoneAxial/sides/side-2.jpg')

    return (
      <div className='App'>
        <div className='App-header'>
          <h2>Visionneuse de radioanatomie</h2>
        </div>
        <div className='App-sidebar'>
          <SliceView frame={this.state.frame} totalFrames={this.state.totalFrames} image={sideView1} />
          <SliceView frame={this.state.frame} totalFrames={this.state.totalFrames} image={sideView2} />
        </div>
        <div className='App-detailed-slice'>
          <DetailedSlice frame={this.state.frame} captionSet={this.state.caption} />
        </div>
        <div className='App-footer'>
          <MainSlider frame={this.state.frame} totalFrames={this.state.totalFrames} setFrameHandler={this.setFrame} />
          <LabelSelector selectedValue='orange' setCaptionHandler={this.setCaption}/>
        </div>
      </div>
    )
  }
}

export default App
