import React, { Component } from 'react'
import './label.css'

class Label extends Component {
  render () {
    var styles = {
      left: this.props.from.x,
      top: this.props.from.y
    };
    return (
      <div className='label' style={styles}>
        <span className='label__dot'>
          x
        </span>
        <span className='label__caption'>
          {this.props.text}
        </span>
      </div>
    );
  }
}

export default Label
