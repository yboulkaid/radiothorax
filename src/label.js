import React, { Component } from 'react'
import './label.css'

class Label extends Component {
  componentDidMount() {
    var c=document.getElementById("canvas");
    var ctx=c.getContext("2d");
    ctx.strokeStyle="#FFFFFF";
    ctx.fillStyle = 'white';
    ctx.beginPath();
    ctx.moveTo(this.props.from.x,this.props.from.y);
    ctx.lineTo(this.props.to.x,this.props.to.y);
    ctx.stroke();
    ctx.font = "12px Arial";
    ctx.fillText(this.props.text ,this.props.from.x,this.props.from.y);
  }

  render () {
    return (
      <canvas id='canvas' className='label'></canvas>
    )
  }
}

export default Label
