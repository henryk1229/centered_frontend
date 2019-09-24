import React, { useState } from 'react'
import { useTrail, animated } from 'react-spring'

import '../css/ImageContainer.css'

const fast = { tension: 10, friction: (Math.floor(Math.random() * 10) + 10)  }
const slow = { mass: 10, tension: 30, friction: (Math.floor(Math.random() * 10) + 10) * 5  }
const trans = (x, y) => `translate3d(${x}px,${y}px,0) translate3d(-50%,-50%,0)`

const ImageContainer = (props) => {

  const [trail, set] = useTrail((props.randomNum + 2), () => ({ xy: [0, 0], config: i => (i%2 === 0 ? fast : slow) }))
  const color = useState(props.color)[0]

  const setTrail = (e) =>{
    set({ xy: [e.clientX, e.clientY] })
  }

  //
  const handleKeyPress = (e) =>{
    if (e.key === 'a') {
      props.handleLeave()
    }
  }

  return (
    <div>
      <div className="circle-main" onMouseMove={e => setTrail(e)}
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
