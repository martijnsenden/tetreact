import React from 'react'
import Tetromino from './components/Tetromino/Tetromino'
import logo from './logo.svg'
import './App.css'

const App = () => (
  <div className="App">
    <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h2>Welcome to React</h2>
    </div>
    <p className="App-intro">
      To get started, edit <code>src/App.js</code> and save to reload.
    </p>
    <Tetromino type="i" angle={0} locked={false} />
    <Tetromino type="i" angle={90} locked={false} />
    <Tetromino type="i" angle={180} locked={false} />
    <Tetromino type="i" angle={270} locked={false} />
    <Tetromino type="j" angle={0} locked={false} />
    <Tetromino type="j" angle={90} locked={false} />
    <Tetromino type="j" angle={180} locked={false} />
    <Tetromino type="j" angle={270} locked={false} />
    <Tetromino type="l" angle={0} locked={false} />
    <Tetromino type="l" angle={90} locked={false} />
    <Tetromino type="l" angle={180} locked={false} />
    <Tetromino type="l" angle={270} locked={false} />
    <Tetromino type="o" angle={0} locked={false} />
    <Tetromino type="o" angle={90} locked={false} />
    <Tetromino type="o" angle={180} locked={false} />
    <Tetromino type="o" angle={270} locked={false} />
    <Tetromino type="s" angle={0} locked={false} />
    <Tetromino type="s" angle={90} locked={false} />
    <Tetromino type="s" angle={180} locked={false} />
    <Tetromino type="s" angle={270} locked={false} />
    <Tetromino type="t" angle={0} locked={false} />
    <Tetromino type="t" angle={90} locked={false} />
    <Tetromino type="t" angle={180} locked={false} />
    <Tetromino type="t" angle={270} locked={false} />
    <Tetromino type="z" angle={0} locked={false} />
    <Tetromino type="z" angle={90} locked={false} />
    <Tetromino type="z" angle={180} locked={false} />
    <Tetromino type="z" angle={270} locked={false} />
  </div>
)

export default App
