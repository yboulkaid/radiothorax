import React, { Component } from 'react'
import './sliceView.css';

class SliceView extends Component {
  constructor (props) {
    super(props)
    // this.progressBar = this.progressBar.bind(this)
  }

  render () {
    const percentage = (100 * this.props.frame / this.props.totalFrames) + '%'
    const verticalBar = (this.props.orientation === 'vertical')
    let progressBar = null
    if(verticalBar) {
      progressBar = <div className='slice-view__progress-bar' style={{ height: percentage }} />
    }
    else {
      progressBar = <div className='slice-view__vertical-progress-bar' style={{ width: percentage }} />
    }
    return (
      <div className='slice-view'>
        <div className='slice-view__image-container'>
          <img src={this.props.image} className='slice-view__image' alt='my'/>
          {progressBar}
        </div>
      </div>
    )
  }
}

export default SliceView
