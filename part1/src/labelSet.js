import React, { Component } from 'react'
import Label from './label.js'

class LabelSet extends Component {
  isVisibleFor (frameStart, frameEnd) {
    return true
    // return this.props.visible && this.props.frame >= frameStart && this.props.frame <= frameEnd
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
    // console.log()
    return this.organs(fileName).map((organ) => {
      if (this.isVisibleFor(organ.frameStart, organ.frameEnd)) {
        return (
          <Label
            key={organ.label}
            from={{x: organ.x, y: organ.y}}
            to={{x: organ.x, y: organ.y}}
            text={organ.label}
            color={this.props.color}/>
        )
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
