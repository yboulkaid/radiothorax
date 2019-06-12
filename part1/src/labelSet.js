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

  isVisibleFor (frameStart, frameEnd) {
    frameEnd += 1 // Because of weird data input?
    return this.props.visible && this.props.frame >= frameStart && this.props.frame <= frameEnd
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
  }

  render () {
    console.log(this.state.organs)
    return this.state.organs.map(
      (organ) => this.organToLabel(organ)
    )
  }
}

export default LabelSet
