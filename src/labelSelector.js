import React, { Component } from 'react'
import {RadioGroup, Radio} from 'react-radio-group'

class LabelSelector extends Component {
  constructor () {
    super()
    this.handleChange = this.handleChange.bind(this)
    this.state = {
      selectedValue: 'set1'
    }
  }

  handleChange (newValue) {
    this.setState(
      {
        selectedValue: newValue
      }
    )
    this.props.setCaptionHandler(newValue)
  }

  render () {
    return (
      <RadioGroup name='captionSet' selectedValue={this.state.selectedValue} onChange={this.handleChange}>
        <Radio value='set1' /> Legende 1
        <Radio value='set2' /> Legende 2
      </RadioGroup>
    )
  }
}

export default LabelSelector
