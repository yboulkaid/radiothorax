import React, { Component } from 'react'
import Slider from 'rc-slider'
import 'rc-slider/assets/index.css';

class MainSlider extends Component {
  render () {
    return (
      <div className='main-slider'>
        Step {this.props.frame} / {this.props.totalFrames}
        <br />

        <Slider defaultValue={0}
          min={0}
          max={this.props.totalFrames}
          value={this.props.frame}
          onChange={this.props.setFrameHandler} />

      </div>
    )
  }
}

export default MainSlider
