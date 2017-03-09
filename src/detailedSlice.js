import React, { Component } from 'react'
import './detailedSlice.css'

class DetailedSlice extends Component {
  render () {
    return (
      <div className='detailed-slice'>
        <p className='detailed-slice__text'>
          Frame {this.props.frame}
        </p>
      </div>
    )
  }
}

export default DetailedSlice
