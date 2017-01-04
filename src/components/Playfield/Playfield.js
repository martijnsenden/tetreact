import React from 'react'
import { playfield, blockSize } from './../../config/config'

const { number } = React.PropTypes
const { width, height } = playfield

const Playfield = (props) => {
  const { x, y } = props
  return (
    <svg x={x} y={y} width={width * blockSize} height={height * blockSize}>
      <defs>
        <pattern
          id="playfieldGrid"
          width={blockSize}
          height={blockSize}
          patternUnits="userSpaceOnUse"
        >
          <path d={`M ${blockSize} 0 L 0 0 0 ${blockSize}`} fill="none" stroke="gray" strokeWidth="0.5" />
        </pattern>
      </defs>
      <rect
        width={width * blockSize}
        height={height * blockSize}
        fill="url(#playfieldGrid)"
        stroke="gray"
        strokeWidth="1"
      />
    </svg>
  )
}

Playfield.propTypes = {
  x: number,
  y: number,
}

export default Playfield
