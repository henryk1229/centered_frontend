import React, { useState } from 'react'
import Tone from 'tone'
import { useTrail, animated } from 'react-spring'
import { genRandomOsc } from '../helperfunctions/helperFunctions'
import { usePanner } from '../hooks/UsePanner'
import { createSynth } from '../helperfunctions/Synth.js'
import { useSynth } from '../hooks/UseSynth'
import '../index.css'

const fast = { tension: 30, friction: (Math.floor(Math.random() * 10) + 10) * 5  }
const slow = { mass: 10, tension: 30, friction: (Math.floor(Math.random() * 10) + 10) * 5  }
const trans = (x, y) => `translate3d(${x}px,${y}px,0) translate3d(-50%,-50%,0)`


const noteMatrix = [

  [],
  ["E3", "A4", "F#4"],
  ["C3", "G3", "E4", "C4"],
  ["F3", "A3", "C4", "F4", "A4"],
  ["Eb3", "Bb3", "Eb4", "G4", "F4", "Bb4"],
  ["Eb3", "Bb3", "Eb4", "G4", "Eb4", "Bb3", "Eb4"],
  ["D3", "A3", "F4", "D5", "A4", "F4", "A3", "G3"],
  ["B4", "F#3", "B4", "C#5", "D#5", "B5", "F#5", "D#5", "C#5"],

]



const Circle = (props) => {
  //(props.randomNum + 2)
  const [trail, set] = useTrail((props.randomNum + 2), () => ({ xy: [0, 0], config: i => (i%2 === 0 ? fast : slow) }))

  let AudioContext = window.AudioContext || window.webkitAudioContext;
  let audioCtx = new AudioContext();

  // // panner 3d
  let pannerLeft = new Tone.Panner3D().toMaster()
  pannerLeft.panningModel = 'HRTF';
  pannerLeft.distanceModel = 'inverse';
  pannerLeft.refDistance = 1;
  pannerLeft.maxDistance = 10000;
  pannerLeft.rolloffFactor = 1;
  pannerLeft.coneInnerAngle = 360;
  pannerLeft.coneOuterAngle = 180;
  pannerLeft.coneOuterGain = 0;
  pannerLeft.positionZ = 2


  let pannerRight = new Tone.Panner3D().toMaster()
  pannerRight.panningModel = 'HRTF';
  pannerRight.distanceModel = 'inverse';
  pannerRight.refDistance = 1;
  pannerRight.maxDistance = 10000;
  pannerRight.rolloffFactor = 1;
  pannerRight.coneInnerAngle = 360;
  pannerRight.coneOuterAngle = 180;
  pannerRight.coneOuterGain = 0;
  pannerRight.positionZ = 2

  //effects
  // let pannerLeft = new Tone.Panner(-1)
  // let pannerRight = new Tone.Panner(1)
  let delay = new Tone.FeedbackDelay ('32n', 0.4)
  let pingPong = new Tone.PingPongDelay("8n", 0.95)

  //instantiate synths
  let rightSynth = createSynth()
  rightSynth.volume.value = -24
  let source = rightSynth.chain(delay, pannerRight, Tone.Master)

  let leftSynth = createSynth()
  leftSynth.volume.value = -24
  leftSynth.chain(delay, pannerLeft, Tone.Master)

  const notes = noteMatrix[4]

  let lead = new Tone.Loop(time => {
    rightSynth.triggerAttackRelease(notes[0], '1', time);
    rightSynth.triggerAttackRelease(notes[1], '0:2', '+1:0');
    rightSynth.triggerAttackRelease(notes[2], '1', '+2:0');
    rightSynth.triggerAttackRelease(notes[3], '2', '+3:0');
    rightSynth.triggerAttackRelease(notes[4], '1', '+5:0');
    rightSynth.triggerAttackRelease(notes[5], '1', '+6:0');
    rightSynth.triggerAttackRelease(notes[6], '0:2', '+6:4');
    rightSynth.triggerAttackRelease(notes[7], '0:2', '+6:8');
  }, '9m')

  let drone = new Tone.Loop(time => {
    leftSynth.triggerAttackRelease(notes[0], '1', '+2:0');
    leftSynth.triggerAttackRelease(notes[2], '1', '+4:0');
    leftSynth.triggerAttackRelease(notes[0], '1:2', '+6:0');
    leftSynth.triggerAttackRelease(notes[3], '1', '+8:0');
    leftSynth.triggerAttackRelease(notes[1], '0:2', '+9:0');
  }, '11m')

  lead.start()
  drone.start()

  Tone.Transport.bpm.value = 240;
  Tone.Transport.start();


  const setTrailAndElse = (e) =>{
    set({ xy: [e.clientX, e.clientY] })
    // console.log("panner X", panner.positionX, "panner Y", panner.positionY)
  }

  const setPanner = (e) => {
    let posX = e.clientX-window.innerWidth/2
    let posY = e.clientY-window.innerHeight/2
    //
    let r = Math.log(Math.sqrt(posX*posX+posY*posY)/10)*10
    if (r<10)
      r=10

    let posRight = {
      x: Math.cos(e.clientX)*r,
      y: Math.cos(e.clientY)*r,
      z: 2,
    }

    let posLeft = {
      x: Math.cos(e.clientX)*r,
      y: Math.cos(e.clientX)*r,
      z: 1,
    }
    pannerLeft.setPosition(posLeft.x,posLeft.y,posLeft.z)
    pannerRight.setPosition(posRight.x,posRight.y,posLeft.z)
    // console.log(pannerRight.positionX)
  }

  const pingOn = (e) => {
    console.log(source)
    source.chain(pingPong, Tone.Master)
  }

  const pingOff = (e) => {
    // pingPong.disconnect()
    source.disconnect(pingPong)
  }

//
  // console.log("panner X", panner.positionX, "panner Y", panner.positionY)
  return (
    <div onMouseMove={e => setPanner(e)} onMouseDown={e => pingOn(e)} onMouseUp={e => pingOff(e)}>
      <div className="hooks-main" onMouseMove={e => setTrailAndElse(e)}>
        {trail.map((props, index) => (
          <animated.div
          key={index}
          style={
            {
              transform: props.xy.interpolate(trans),
              background: "lightpink"
             }
          } />
        ))}
      </div>
      <canvas id="canvas"
      width={window.innerWidth}
      height={window.innerHeight}
      style={
        {
          background: "lightyellow",
        }
      }>

      </canvas>
    </div>
  )
}

export default Circle
