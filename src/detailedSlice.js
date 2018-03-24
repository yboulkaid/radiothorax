import React, { Component } from 'react'
import Label from './label.js'
import { Stage } from 'react-konva';
import './detailedSlice.css'

const csvParse = require('csv-parse/lib/sync');
const organList = require('../public/organes.csv')
const base64File = organList.split(',')[1]
const decodedCsv = atob(base64File)
const organs = csvParse(decodedCsv, {delimiter: ';', columns: true})

const organLabels=organs.map(function (organ) {
  return (
    <Label
      key={organ.organe}
      from={{x: organ.labelX, y: organ.labelY}}
      to={{x: organ.x, y: organ.y}}
      text={organ.organe}/>
  )
})

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
          <Stage width={500} height={500} className='label'>
            { organLabels }
          </Stage>
        </div>
      </div>
    )
  }
}

export default DetailedSlice
