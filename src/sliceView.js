import React, { Component } from 'react'
import './sliceView.css';

class SliceView extends Component {
  render () {
    const percentage = (100 * this.props.frame / this.props.totalFrames) + '%'
    return (
      <div className='slice-view'>
        <p className='slice-view__slice-number'>
          Frame {this.props.frame}
        </p>
        <div className='slice-view__progress-bar' style={{ height : percentage}}>

        </div>
      </div>
    )
  }
}

export default SliceView
