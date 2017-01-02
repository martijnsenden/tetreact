import React from 'react'
import { blockSize, tetrominoes } from './../../config/config'
import Block from './../Block/Block'

const { string, number, bool } = React.PropTypes

const Tetromino = (props) => {
  const { type, angle, locked } = props
  const tetromino = tetrominoes[type]
  return (
    <svg width={tetromino.width * blockSize} height={tetromino.height * blockSize}>
      {tetromino.angles[angle].map((row, rowIndex) => (
        row.map((cell, cellIndex) => {
          if (cell === 1) {
            return (
              <Block
                x={cellIndex * blockSize}
                y={rowIndex * blockSize}
                width={blockSize}
                height={blockSize}
                fill={tetromino.fill}
              />
            )
          }
          return null
        })
      ))}
    </svg>
  )
}

Tetromino.propTypes = {
  type: string,
  angle: number,
  locked: bool,
}

export default Tetromino
