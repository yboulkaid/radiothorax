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
        defaultCaption: 'BoneAx/Articulations.csv',
        captions: [
          {
            title: 'Articulations',
            file: 'BoneAx/Articulations.csv',
          },
          {
            title: 'Cartillage',
            file: 'BoneAx/Cartilage.csv',
          },
          {
            title: 'Os',
            file: 'BoneAx/Os.csv',
          },
        ],
      },
      {
        imageSet: 'BoneSagittal',
        title: 'BoneSagittal',
        defaultCaption: 'BoneSag/Articulations.csv',
        captions: [
          {
            title: 'Articulations',
            file: 'BoneSag/Articulations.csv',
          },
          {
            title: 'Cartilage',
            file: 'BoneSag/Cartilage.csv',
          },
          {
            title: 'Os',
            file: 'BoneSag/Os.csv',
          },
          {
            title: 'OsSag',
            file: 'BoneSag/OsSag.csv',
          },
        ],
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
