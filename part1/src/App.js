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

        <Viewer imageSet='BoneAxial' title='BoneAxial' defaultCaption='rouge' captions={['vert', 'bleu']}/>
        <Viewer imageSet='BoneCoronal' title='BoneCoronal' defaultCaption='bleu' captions={['jaune', 'rouge']}/>
        <Viewer imageSet='BoneSagittal' title='BoneSagittal' defaultCaption='rouge' captions={['bleu', 'rouge']}/>

      </div>
    )
  }
}

export default App
