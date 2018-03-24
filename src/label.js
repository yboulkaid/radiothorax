import React, { Component } from 'react'
import './label.css'
import { Layer, Line, Text } from 'react-konva';

class Label extends Component {
  render () {
    return (
      <Layer>
        <Text
          text={this.props.text}
          x={this.props.from.x - 50}
          y={this.props.from.y - 10}
          align={'left'}
          fontStyle={'bold'}
          fill={'red'}
        />
        <Line
          points={[
            this.props.from.x,
            this.props.from.y,
            this.props.to.x,
            this.props.to.y
          ]}
          stroke={'red'}
          strokeWidth={2}
        />
      </Layer>
    );
  }
}

export default Label
