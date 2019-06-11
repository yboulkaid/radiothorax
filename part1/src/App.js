import React, { Component } from 'react'
import Viewer from './viewer.js'
import './App.css'
import './index.css'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <div className='App-header'>
          <h2>Visionneuse de radioanatomie</h2>
        </div>
        <Viewer imageSet='BoneAxial'/>
        <Viewer imageSet='BoneCoronal'/>
        <Viewer imageSet='BoneSagittal'/>

      </div>
    )
  }
}

export default App
