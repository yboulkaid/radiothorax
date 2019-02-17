import React, { Component } from 'react'
import './label.css'

class Label extends Component {
  render () {
    return (
      <div>
        {this.props.text}
      </div>
      // <Layer>
      //   <Text
      //     text={this.props.text}
      //     x={Math.floor(this.props.from.x) - 600}
      //     y={Math.floor(this.props.from.y) - 500}
      //     align={'left'}
      //     fontStyle={'bold'}
      //     fill={this.props.color}
      //   />
      // </Layer>
    );
  }
}

export default Label
