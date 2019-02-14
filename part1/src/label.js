import React, { Component } from 'react'
import './label.css'
import { Layer, Line, Text } from 'react-konva';

class Label extends Component {
  render () {
    return (
      <Layer>
        <Text
          text={this.props.text}
          x={Math.floor(this.props.from.x) - 600}
          y={Math.floor(this.props.from.y) - 500}
          align={'left'}
          fontStyle={'bold'}
          fill={this.props.color}
        />
      </Layer>
    );
  }
}

export default Label
