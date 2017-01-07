import { framerate } from '../config/config'

/**
 * Perform a drawing function at the configured max framerate and optimised using
 * requestAnimationFrame.
 * @param {function} fn Function that should be called at the configured framerate
 * @param {object} boundThis The this context for the called fn param. Pass null if
 * no this context should be bound to the call of the given fn param
 * @param {*} args Any additional arguments are passed into the given fn param call
 */
const draw = (fn, boundThis, ...args) => {
  const duration = Math.round(1000 / framerate)
  let before

  function doDraw() {
    const handle = requestAnimationFrame(doDraw)
    const now = new Date().getTime()
    const dt = now - (before || now)

    if (dt >= duration) {
      if (boundThis) {
        fn.call(boundThis, ...args)
      } else {
        fn(...args)
      }
    }
    before = now

    return handle
  }

  return doDraw()
}

const drawingService = {
  draw,
}

export { draw }
export default drawingService
