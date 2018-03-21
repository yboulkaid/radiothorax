import React, { Component } from 'react'
import './detailedSlice.css'

class DetailedSlice extends Component {
  render () {
    const frameImage = require(`../public/images/parench/parench-${this.props.frame + 50}.JPG`)
    return (
      <div className='detailed-slice'>
        <p className='detailed-slice__text'>
          Frame {this.props.frame}
        </p>
        <div className='detailed-slice__image-container'>
          <img src={frameImage} className='detailed-slice__image' alt='my'/>
        </div>
      </div>
    )
  }
}

export default DetailedSlice
