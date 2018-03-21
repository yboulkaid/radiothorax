import React, { Component } from 'react'
import './label.css'

class Label extends Component {
  componentDidMount() {
    var c=document.getElementById("canvas");
    var ctx=c.getContext("2d");
    ctx.strokeStyle="#FFFFFF";
    ctx.fillStyle = 'white';
    ctx.beginPath();
    ctx.moveTo(20,20);
    ctx.lineTo(100,100);
    ctx.stroke();
    ctx.font = "12px Arial";
    ctx.fillText("Hello World",10,22);
  }

  render () {
    return (
      <canvas id='canvas' className='label'></canvas>
    )
  }
}

export default Label
