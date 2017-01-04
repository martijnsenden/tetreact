import React from 'react'
import { blockSize, tetrominos } from './../../config/config'
import Block from './../Block/Block'

const { string, number } = React.PropTypes

const Tetromino = (props) => {
  const { type, angle, x, y } = props
  const tetromino = tetrominos[type]
  return (
    <svg x={x} y={y} width={tetromino.width * blockSize} height={tetromino.height * blockSize}>
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
  x: number,
  y: number,
}

export default Tetromino
