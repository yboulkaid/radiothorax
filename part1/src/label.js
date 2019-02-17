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
        {this.props.text}
      </div>
    );
  }
}

export default Label
