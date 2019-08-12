import React, { useState, useEffect } from 'react'
import Tone from 'tone'
import SoundContainer from '../containers/SoundContainer'
import MvpSoundContainer from '../containers/MvpSoundContainer'
import { useTrail, animated } from 'react-spring'
import { genRandomOsc } from '../helperfunctions/helperFunctions'
import { usePanner } from '../hooks/UsePanner'
import { createSynth } from '../helperfunctions/Synth.js'
import { createPanner } from '../helperfunctions/Panner.js'
import { createDrone } from '../helperfunctions/Drone.js'
import { useSynth } from '../hooks/UseSynth'
import { matrix } from '../helperfunctions/NoteLibrary'
import '../index.css'

const fast = { tension: 10, friction: (Math.floor(Math.random() * 10) + 10)  }
const slow = { mass: 10, tension: 30, friction: (Math.floor(Math.random() * 10) + 10) * 5  }
const trans = (x, y) => `translate3d(${x}px,${y}px,0) translate3d(-50%,-50%,0)`

const Circle = (props) => {

  const [trail, set] = useTrail((props.randomNum + 2), () => ({ xy: [0, 0], config: i => (i%2 === 0 ? fast : slow) }))
  const color = useState(props.color)[0]

  // // panner 3d
  let pannerLeft = createPanner()
  pannerLeft.setPosition(-3,0,0)
  let pannerRight = createPanner()
  pannerRight.setPosition(3,0,0)

  //effects
  // let delay = new Tone.FeedbackDelay ('32n', 0.5)
  let pingPong = new Tone.PingPongDelay("4n", .9)

  //instantiate synths
  let rightSynth = createSynth()
  let source = rightSynth.chain(pannerRight, Tone.Master)

  let leftSynth = createDrone()
  leftSynth.chain(pannerLeft, Tone.Master)


  const random = genRandomOsc()
  console.log(random)

  const notes = matrix[0].lead
  const droneNotes = matrix[0].bass


  ///Sound
  
      let lead = new Tone.Loop(time => {
        rightSynth.triggerAttackRelease(notes[0], '2', time);
        rightSynth.triggerAttackRelease(notes[1], '1', '+1:0');
        rightSynth.triggerAttackRelease(notes[2], '2', '+2:0');
        rightSynth.triggerAttackRelease(notes[3], '4', '+3:0');
        rightSynth.triggerAttackRelease(notes[4], '2', '+5:0');
        rightSynth.triggerAttackRelease(notes[5], '2', '+6:0');
        rightSynth.triggerAttackRelease(notes[6], '1', '+6:4');
        rightSynth.triggerAttackRelease(notes[7], '1', '+6:8');
      }, '11m')

      let drone = new Tone.Loop(time => {
        leftSynth.triggerAttackRelease(droneNotes[0], '4', '+4:0');
        leftSynth.triggerAttackRelease(droneNotes[1], '4', '+8:0');
        leftSynth.triggerAttackRelease(droneNotes[0], '4', '+12:0');
        leftSynth.triggerAttackRelease(droneNotes[2], '2', '+16:0');
        leftSynth.triggerAttackRelease(droneNotes[3], '2', '+18:0');
        leftSynth.triggerAttackRelease(droneNotes[0], '1', '+22:0');

      }, '27m')

      lead.start()
      drone.start()

      Tone.Transport.bpm.value = 180;
      Tone.Transport.start();

  ////

  const setTrailAndElse = (e) =>{
    set({ xy: [e.clientX, e.clientY] })
  }

  const pingOn = () => {
    console.log("clicked")
    pannerLeft.setPosition(3,0,0)
    pannerRight.setPosition(-3,0,0)
    source.chain(pingPong, Tone.Master)
  }

  const pingOff = () => {
    // pingPong.disconnect()
    pannerLeft.setPosition(-3,0,0)
    pannerRight.setPosition(3,0,0)
    source.disconnect(pingPong)
  }

  const handleKeyPress = (e) =>{
    console.log(e.key)
    if (e.key === 'a') {
      Tone.Transport.stop()
      props.handleLeave()
    }
  }


  //
  // <MvpSoundContainer
  // rightSynth={rightSynth}
  // notes={notes}
  // leftSynth={leftSynth}
  // droneNotes={droneNotes}/>
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

export default Circle
