import React, { Component } from 'react'
import {RadioGroup, Radio} from 'react-radio-group'

class LabelSelector extends Component {
  constructor (props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.state = {
      selectedValue: this.props.selectedValue
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
      <RadioGroup name={Math.floor(Math.random()*1000).toString()} selectedValue={this.props.selectedValue} onChange={this.handleChange}>
        {optionRadios}
      </RadioGroup>
    )
  }
}

export default LabelSelector
