import React, { Component } from 'react'
import Viewer from './viewer.js'
import './App.css'
import './index.css'

class App extends Component {
  render () {
    const dataSet = [
      {
        imageSet: 'BoneAxial',
        title: 'BoneAxial',
        defaultCaption: 'bleu',
        captions: ['vert', 'bleu']
      },
      {
        imageSet: 'BoneCoronal',
        title: 'BoneCoronal',
        defaultCaption: 'bleu',
        captions: ['jaune', 'bleu']
      },
      {
        imageSet: 'BoneSagittal',
        title: 'BoneSagittal',
        defaultCaption: 'vert',
        captions: ['jaune', 'vert']
      },
    ]

    const viewers = dataSet.map(
      (set) => (
        <Viewer imageSet={set.imageSet} title={set.title} defaultCaption={set.defaultCaption} captions={set.captions}/>
      )
    )

    return (
      <div className='App'>
        <div className='App-header'>
          <h2>Visionneuse de radioanatomie</h2>
          {viewers}
        </div>


      </div>
    )
  }
}

export default App
