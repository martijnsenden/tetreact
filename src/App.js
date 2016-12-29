import React, { Component } from 'react'
import Block from './components/block/block'
import {blockSize} from './config/config'
import logo from './logo.svg'
import './App.css'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <div className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h2>Welcome to React</h2>
        </div>
        <p className='App-intro'>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Block height={blockSize} width={blockSize} fill='#FFA100' />
      </div>
    )
  }
}

export default App
