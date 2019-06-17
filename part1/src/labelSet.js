import React, { Component } from 'react'
import Label from './label.js'

class LabelSet extends Component {
  constructor (props) {
    super(props)
    this.state = {
      organs: [],
      filename: this.props.fileName
    }

    this.getOrgansLabels = this.getOrgansLabels.bind(this)
    this.organToLabel = this.organToLabel.bind(this)
    this.getOrgansLabels()
  }

  isVisibleFor (frame) {
    return this.props.visible && this.props.frame === parseFloat(frame)
  }

  getOrgansLabels() {
    const csvParse = require('csv-parse/lib/es5/sync');
    const fileUrl = `/captions/${this.props.fileName}`
    fetch(fileUrl)
      .then(response => response.text())
      .then(csvString => csvParse(csvString, {delimiter: ';', columns: true}))
      .then(csv => this.state.organs = csv)
  }

  organToLabel (organ) {
    let scaleFactor = 2
    let scaledX = Math.round(organ.x / scaleFactor)
    let scaledY = Math.round(organ.y / scaleFactor)
    let offsetX = 0;
    let offsetY = -30;
    let computedX = scaledX + offsetX;
    let computedY = scaledY + offsetY;
    if (this.isVisibleFor(organ.Frame)) {
      return (
        <Label
          key={organ.label}
          from={{x: computedX, y: computedY}}
          to={{x: computedX, y: computedY}}
          text={organ.label}
          color={this.props.color}/>
      )
    } else {
      return []
    }
  }

  render () {
    return this.state.organs.map(
      (organ) => this.organToLabel(organ)
    )
  }
}

export default LabelSet
