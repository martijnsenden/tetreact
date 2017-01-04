import React from 'react'
import Playfield from '../../components/Playfield/Playfield'
import Tetromino from '../../components/Tetromino/Tetromino'
import { shuffleArray } from '../../utils/utils'
import { tetrominoes, playfield, blockSize } from './../../config/config'

class Tetrion extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      pieceSequence: [],
      currentTetromino: null,
    }
  }

  componentWillMount() {
    if (!this.state.currentTetromino) {
      this.drawTetromino()
    }
  }

  randomGenerate() {
    shuffleArray(Object.keys(tetrominoes)).forEach((tetromino) => {
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
    return (
      <svg
        x="0"
        y="0"
        width={playfield.width * blockSize}
        height={(playfield.height + playfield.vanishZone) * blockSize}
        id="tetrion"
      >
        <Playfield x={0} y={2 * blockSize} />
        <Tetromino
          x={3 * blockSize}
          y={0}
          type={this.state.currentTetromino}
          angle={0} locked={false}
        />
      </svg>
    )
  }
}

export default Tetrion
