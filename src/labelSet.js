import React, { Component } from 'react'
import Label from './label.js'

class LabelSet extends Component {
  isVisibleFor (frameStart, frameEnd) {
    return this.props.frame >= frameStart && this.props.frame <= frameEnd
  }

  organs (fileName) {
    const csvParse = require('csv-parse/lib/sync');
    const organList = require(`../public/captions/${fileName}`)
    const base64File = organList.split(',')[1]
    const decodedCsv = atob(base64File)
    const organs = csvParse(decodedCsv, {delimiter: ';', columns: true})
    return organs
  }

  organLabels (fileName) {
    return this.organs(fileName).map((organ) => {
      if (this.isVisibleFor(organ.frameStart, organ.frameEnd)) {
        return (
          <Label
            key={organ.organe}
            from={{x: organ.labelX, y: organ.labelY}}
            to={{x: organ.x, y: organ.y}}
            text={organ.organe}
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
