import React from 'react'
import { shuffle } from 'lodash'
import Playfield from '../../components/Playfield/Playfield'
import Tetromino from '../../components/Tetromino/Tetromino'
import { tetrominos, playfield, blockSize, defaultRotationSystem } from '../../config/config'

class Tetrion extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      pieceSequence: [],
      currentTetromino: null,
      rotationSystem: defaultRotationSystem,
    }
  }

  componentWillMount() {
    if (!this.state.currentTetromino) {
      this.drawTetromino()
      setInterval(this.drawTetromino.bind(this), 1000)
    }
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
    const currentTetromino = this.state.pieceSequence.shift()
    this.setState({ currentTetromino })
    return currentTetromino
  }

  render() {
    const { width, height, vanishZone, spawnAtY } = playfield
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
          x={3 * blockSize}
          y={spawnAtY[this.state.rotationSystem] * blockSize}
          type={this.state.currentTetromino}
          angle={0}
          locked={false}
          rotationSystem={this.state.rotationSystem}
        />
      </svg>
    )
  }
}

export default Tetrion
