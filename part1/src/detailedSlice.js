import React, { Component } from 'react'
import LabelSet from './labelSet.js'
import './detailedSlice.css'

class DetailedSlice extends Component {
  render () {
    var imageIndex = ('00000' + this.props.frame).substr(-5, 5);
    const frameImage = require(`../public/images/radio/${this.props.imageSet}/${imageIndex}.jpg`)
    return (
      <div className='detailed-slice'>
        <div className='detailed-slice__image-container' id='scrollable'>
          <img src={frameImage} className='detailed-slice__image' alt='my'/>
          <LabelSet
            frame={this.props.frame}
            color='red'
            fileName='boneCoro/Os.csv'
            visible={this.props.captionSet === 'rouge'}
          />
          <LabelSet
            frame={this.props.frame}
            color='yellow'
            fileName='VertebresAxial.fcsv.csv'
            visible={this.props.captionSet === 'bleu'}
          />
        </div>
      </div>
    )
  }
}

export default DetailedSlice
