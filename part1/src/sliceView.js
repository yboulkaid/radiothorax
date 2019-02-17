import React, { Component } from 'react'
import './sliceView.css';

class SliceView extends Component {
  render () {
    const percentage = (100 * this.props.frame / this.props.totalFrames) + '%'
    return (
      <div className='slice-view'>
        <div className='slice-view__image-container'>
          <img src={this.props.image} className='slice-view__image' alt='my'/>

          <div className='slice-view__progress-bar' style={{ height: percentage }}>
        </div>

        </div>
      </div>
    )
  }
}

export default SliceView
