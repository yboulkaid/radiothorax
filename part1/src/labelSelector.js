import React, { Component } from 'react'
import {RadioGroup, Radio} from 'react-radio-group'

class LabelSelector extends Component {
  constructor () {
    super()
    this.handleChange = this.handleChange.bind(this)
    this.state = {
      selectedValue: 'rouge'
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
    const optionRadios = this.props.options.map(
      (option) => (
        <div>
          <Radio value={option} />
          <label> {option} </label>
        </div>
      )
    )

    return (
      <RadioGroup name='captionSet' selectedValue={this.state.selectedValue} onChange={this.handleChange}>
        {optionRadios}
      </RadioGroup>
    )
  }
}

export default LabelSelector
