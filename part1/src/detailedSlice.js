import React, { Component } from 'react'
import LabelSet from './labelSet.js'
import { Stage } from 'react-konva';
import './detailedSlice.css'

class DetailedSlice extends Component {
  render () {
    var imageIndex = ('00000' + this.props.frame).substr(-5, 5);
    const frameImage = require(`../public/images/boneAx/OsAx_${imageIndex}.png`)
    return (
      <div className='detailed-slice'>
        <p className='detailed-slice__text'>
          Frame {this.props.frame}
        </p>
        <div className='detailed-slice__image-container' id='scrollable'>
          <img src={frameImage} className='detailed-slice__image' alt='my'/>
          <Stage width={500} height={500} className='label'>
            <LabelSet
              frame={this.props.frame}
              color='red'
              fileName='organes.csv'
              visible={this.props.captionSet === 'set1'}
            />
            <LabelSet
              frame={this.props.frame}
              color='yellow'
              fileName='organes2.csv'
              visible={this.props.captionSet === 'set2'}
            />
          </Stage>
        </div>
      </div>
    )
  }
}

export default DetailedSlice
