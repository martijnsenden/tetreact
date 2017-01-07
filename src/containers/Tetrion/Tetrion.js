import React from 'react'
import { shuffle } from 'lodash'
import update from 'immutability-helper'
import Playfield from '../../components/Playfield/Playfield'
import Tetromino from '../../components/Tetromino/Tetromino'
import { tetrominos, playfield, blockSize, defaultRotationSystem, gravity } from '../../config/config'
import { draw } from '../../services/drawingService'

class Tetrion extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      pieceSequence: [],
      currentTetromino: null,
      rotationSystem: defaultRotationSystem,
      level: 180,
    }
  }

  componentWillMount() {
    if (!this.state.currentTetromino) {
      this.drawTetromino()
      // setInterval(this.drawTetromino.bind(this), 1000)
    }
    draw(this.dropTetromino, this)
  }

  randomGenerate() {
    shuffle(Object.keys(tetrominos)).forEach((tetromino) => {
      this.state.pieceSequence.push(tetromino)
    })
  }

  drawTetromino() {
    if (this.state.pieceSequence.length === 0) {
      this.randomGenerate()
    }
    const currentTetromino = {
      x: 3 * blockSize,
      y: playfield.spawnAtY[this.state.rotationSystem] * blockSize,
      type: this.state.pieceSequence.shift(),
      angle: 0,
      locked: false,
      rotationSystem: this.state.rotationSystem,
    }
    this.setState({ currentTetromino })
    return currentTetromino
  }

  dropTetromino() {
    const newState = update(this.state, {
      currentTetromino: {
        y: {
          $apply: oldY => oldY + ((gravity[this.state.level] * blockSize) / 256),
        },
      },
    })
    this.setState(newState)
  }

  render() {
    const { width, height, vanishZone } = playfield
    const { x, y, type, angle, locked, rotationSystem } = this.state.currentTetromino
    return (
      <svg
        x="0"
        y="0"
        width={width * blockSize}
        height={(height + vanishZone[this.state.rotationSystem]) * blockSize}
        id="tetrion"
      >
        <Playfield x={0} y={vanishZone[this.state.rotationSystem] * blockSize} />
        <Tetromino
          x={x}
          y={y}
          type={type}
          angle={angle}
          locked={locked}
          rotationSystem={rotationSystem}
        />
      </svg>
    )
  }
}

export default Tetrion
