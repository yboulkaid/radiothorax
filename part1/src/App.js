import React, { Component } from 'react'
import Viewer from './viewer.js'
import './App.css'
import './index.css'

class App extends Component {
  render () {
    const dataSet = [
      {
        imageSet: 'BoneCoronal',
        title: 'BoneCoronal',
        defaultCaption: 'BoneCoro/Articulations.csv',
        captions: [
          {
            title: 'Articulations',
            file: 'BoneCoro/Articulations.csv',
          },
          {
            title: 'Cartillage',
            file: 'BoneCoro/Cartillage.csv',
          },
          {
            title: 'Os',
            file: 'BoneCoro/Os.csv',
          },
          {
            title: 'OsCoro',
            file: 'BoneCoro/OsCoro.csv',
          },
        ],
      },
      {
        imageSet: 'BoneAxial',
        title: 'BoneAxial',
        captions: ['vert', 'bleu'],
        defaultCaption: 'bleu',
      },
      {
        imageSet: 'BoneSagittal',
        title: 'BoneSagittal',
        defaultCaption: 'vert',
        captions: ['jaune', 'vert'],
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
