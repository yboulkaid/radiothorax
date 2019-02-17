import React, { Component } from 'react'
import Label from './label.js'

class LabelSet extends Component {
  isVisibleFor (frameStart, frameEnd) {
    frameEnd += 1 // Because of weird data input?
    return this.props.visible && this.props.frame >= frameStart && this.props.frame <= frameEnd
  }

  organs (fileName) {
    const csvParse = require('csv-parse/lib/es5/sync');
    const organList = require(`../public/captions/${fileName}`)
    const base64File = organList.split(',')[1]
    const decodedCsv = atob(base64File)
    const organs = csvParse(decodedCsv, {delimiter: ';', columns: true})
    return organs
  }

  organLabels (fileName) {
    return this.organs(fileName).map((organ) => {
      let scaleFactor = 2
      let scaledX = Math.round(organ.x / scaleFactor)
      let scaledY = Math.round(organ.y / scaleFactor)
      if (this.isVisibleFor(organ.frameStart, organ.frameEnd)) {
        return (
          <Label
            key={organ.label}
            from={{x: scaledX, y: scaledY}}
            to={{x: scaledX, y: scaledY}}
            text={organ.label}
            color={this.props.color}/>
        )
      } else {
        return []
      }
    })
  }

  render () {
    return (
      this.organLabels(this.props.fileName)
    )
  }
}

export default LabelSet
