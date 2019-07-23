import React from 'react'
import Tone from 'tone'
import { useTrail, animated } from 'react-spring'
import './index.css'

const fast = { tension: 30, friction: 30 }
const slow = { mass: 10, tension: 30, friction: 40 }
const trans = (x, y) => `translate3d(${x}px,${y}px,0) translate3d(-50%,-50%,0)`

export default function Spring(props) {

  const [trail, set] = useTrail((props.randomNum + 2), () => ({ xy: [0, 0], config: i => (i%2 === 0 ? fast : slow) }))

  // console.log(set)
  return (
    <>
      <div className="hooks-main" onMouseMove={e => set({ xy: [e.clientX, e.clientY] })}>
        {trail.map((props, index) => (
          <animated.div
          key={index}
          style={
            {
              transform: props.xy.interpolate(trans),
              background: '#4A2E37'
             }
          } />
        ))}
      </div>
    </>
  )
}
