import React from 'react'

class Block extends React.Component {
  render () {
    return (
      <svg>
        <rect {...this.props} />
        <path fill='#fff' fillOpacity='0.7' d={`m0,0 ${this.props.width / 8},${this.props.width / 8} ${3 * this.props.width / 4},0 ${this.props.width / 8},-${this.props.width / 8}`} />
        <path fill='#000' fillOpacity='0.1' d={`m0,0 ${this.props.width / 8},${this.props.width / 8} 0,${3 * this.props.width / 4}, -${this.props.width / 8},${this.props.width / 8} m${this.props.width},-${this.props.width} -${this.props.width / 8},${this.props.width / 8} 0,${3 * this.props.width / 4} ${this.props.width / 8},${this.props.width / 8}`} />
        <path fill='#000' fillOpacity='0.5' d={`m0,${this.props.width} ${this.props.width / 8},-${this.props.width / 8} ${3 * this.props.width / 4},0 ${this.props.width / 8},${this.props.width / 8}`} />
      </svg>
    )
  }
}

export default Block

/*

 <defs>
 <g id='n'>
 <use id='0' y='24' x='120' xlink:href='#x' />
 <use x='24' xlink:href='#0' /><use x='48' xlink:href='#0' />
 </g>
 </defs>
 <g id='i'>
 <use id='a' y='24' xlink:href='#x' fill='#00f0f0' />
 <use x='24' xlink:href='#a' />
 </g>
 <use x='48' xlink:href='#i' />
 <use id='j' x='120' xlink:href='#x' fill='#0000f0' />
 <use xlink:href='#n' fill='#0000f0' />
 <use x='264' xlink:href='#x' fill='#f0a000' />
 <use x='96' xlink:href='#n' fill='#f0a000' />
 <g id='o'>
 <use id='b' x='312' xlink:href='#x' fill='#f0f000' />
 <use x='24' xlink:href='#b' />
 </g>

 <use y='24' xlink:href='#o' />
 <g id='s'>
 <use id='c' x='48' y='96' xlink:href='#x' fill='#00f000' />
 <use x='24' xlink:href='#c' />
 </g>
 <use x='24' y='-24' xlink:href='#s' />
 <use x='24' y='72' xlink:href='#n' fill='#a000f0' />
 <use x='168' y='72' xlink:href='#x' fill='#a000f0' />
 <g id='z'>
 <use id='d' x='264' y='72' xlink:href='#x' fill='#f00000' />
 <use x='-24' xlink:href='#d' />
 </g>
 <use x='24' y='24' xlink:href='#z' />

 */
