import React, { Component } from 'react'
import './label.css'
import { Layer, Line, Text } from 'react-konva';
import Konva from 'konva';

class Label extends Component {
  render() {
    return (
      <Layer>
        <Text text="Try click on rect" />
        <Line
          points = {[0, 0, 100, 200]}
          stroke = {'red'}
          strokeWidth = {1}
        />
      </Layer>
    );
  }
}

export default Label
