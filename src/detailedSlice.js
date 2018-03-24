import React, { Component } from 'react'
import Label from './label.js'
import { Stage } from 'react-konva';
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
          <Stage width={400} height={400} className='label'>
            <Label from={{x: 100, y: 100}} to={{x: 200, y: 200}} text='Organe 1'/>
          </Stage>
        </div>
      </div>
    )
  }
}

export default DetailedSlice
