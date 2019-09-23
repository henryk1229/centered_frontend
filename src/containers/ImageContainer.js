import React, { useState } from 'react'
import { useTrail, animated } from 'react-spring'
import '../index.css'

const fast = { tension: 10, friction: (Math.floor(Math.random() * 10) + 10)  }
const slow = { mass: 10, tension: 30, friction: (Math.floor(Math.random() * 10) + 10) * 5  }
const trans = (x, y) => `translate3d(${x}px,${y}px,0) translate3d(-50%,-50%,0)`

const ImageContainer = (props) => {

  const [trail, set] = useTrail((props.randomNum + 2), () => ({ xy: [0, 0], config: i => (i%2 === 0 ? fast : slow) }))
  const color = useState(props.color)[0]

  const setTrailAndElse = (e) =>{
    set({ xy: [e.clientX, e.clientY] })
  }

  const pingOn = () => {
  //   console.log("clicked")
  //   pannerLeft.setPosition(3,0,0)
  //   pannerRight.setPosition(-3,0,0)
  //   source.chain(pingPong, Tone.Master)
  }
  //
  const pingOff = () => {
  //   // pingPong.disconnect()
  //   pannerLeft.setPosition(-3,0,0)
  //   pannerRight.setPosition(3,0,0)
  //   source.disconnect(pingPong)
  }
  //
  const handleKeyPress = (e) =>{
  //   console.log(e.key)
  //   if (e.key === 'a') {
  //     Tone.Transport.stop()
  //     props.handleLeave()
  //   }
  }

  return (
    <div>
      <div className="hooks-main" onMouseMove={e => setTrailAndElse(e)} onMouseDown={() => pingOn()} onMouseUp={() => pingOff()}
      onKeyPress={(e)=>handleKeyPress(e)}
      tabIndex="1" >
        {trail.map((props, index) => (
          <animated.div
          key={index}
          style={
            {
              transform: props.xy.interpolate(trans),
              background: color
             }
          } />
        ))}
      </div>
      <canvas id="canvas"
      width={window.innerWidth}
      height={window.innerHeight}
      background={props.background}
      style={
        {
          background: props.background
        }
      }>
      </canvas>
    </div>
  )
}

export default ImageContainer
