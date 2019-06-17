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
        ],
        sliderOrientations: ['vertical', 'horizontal'],
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
        sliderOrientations: ['vertical', 'vertical'],
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
        ],
        sliderOrientations: ['horizontal', 'horizontal'],
      },
    ]

    const viewers = dataSet.map(
      (set) => (
        <Viewer
          imageSet={set.imageSet}
          title={set.title}
          defaultCaption={set.defaultCaption}
          captions={set.captions}
          sliderOrientations={set.sliderOrientations}
        />
      )
    )

    return (
      <div className='App'>
        <div className='App-header'>
          <h2>Visionneuse de radioanatomie</h2>
        </div>
        {viewers}


      </div>
    )
  }
}

export default App
