import React, { useEffect } from 'react'
import Tone from 'tone'
// import * as mm from '@magenta/music';
// import { genRandomOsc } from '../helperfunctions/helperFunctions'
import { createSynth } from '../helperfunctions/Synth.js'
import { createDrone } from '../helperfunctions/Drone.js'
import { createPanner } from '../helperfunctions/Panner.js'

const SoundContainer = (props) => {

  //initialize user "notes"
  let koanString = props.user.koan_number.toString()
  let koanArray = koanString.split('')
  let numArray = []
  koanArray.map(n =>{
    // num = 1 num = 3 num = 6 num = 8
    if (n === "1") {
      return numArray.push(11)
    } else if (n === "3") {
      return numArray.push(12)
    }
    else if (n === "6") {
      return numArray.push(16)
    }
    else if (n === "8") {
      return numArray.push(16)
    }
    else {
      return numArray.push(parseInt(n))
    }
  })

  let seedNote = Tone.Frequency((60+props.randomNum), "midi").toNote()
  let bassTonic = (36+props.randomNum)
  let bassNotes = [
    Tone.Frequency(bassTonic, "midi").toNote(),
    Tone.Frequency(bassTonic+7, "midi").toNote(),
    Tone.Frequency(bassTonic+12, "midi").toNote(),
    Tone.Frequency(bassTonic-5, "midi").toNote(),
    // Tone.Frequency(bassTonic-5, "midi").toNote()
  ]
  console.log("bass", bassNotes)
  let harmony = new Tone.Frequency(seedNote).harmonize(numArray)
  for (let n of harmony) {
    console.log(Tone.Frequency(n, "midi").toNote())
  }
  console.log(harmony)

  //effects
  // // panner 3d
  let pannerLeft = createPanner()
  pannerLeft.setPosition(-3,0,0)
  let pannerRight = createPanner()
  pannerRight.setPosition(3,0,0)
  // let delay = new Tone.FeedbackDelay ('32n', 0.5)
  let pingPong = new Tone.PingPongDelay("4n", .9)

  //instantiate synths
  let rightSynth = createSynth()
  let source = rightSynth.chain(pannerRight, Tone.Master)

  let leftSynth = createDrone()
  leftSynth.chain(pannerLeft, Tone.Master)

  useEffect(()=>{

      let lead = new Tone.Loop(time => {
        rightSynth.triggerAttackRelease(harmony[0], '4', time);
        rightSynth.triggerAttackRelease(harmony[1], '2', '+2:0');
        rightSynth.triggerAttackRelease(harmony[2], '4', '+4:0');
        rightSynth.triggerAttackRelease(harmony[3], '4', '+8:0');
        rightSynth.triggerAttackRelease(harmony[4], '2', '+10:0');
        rightSynth.triggerAttackRelease(harmony[5], '4', '+14:0');
        rightSynth.triggerAttackRelease(harmony[6], '2', '+16:0');
      }, '23m')

      let drone = new Tone.Loop(time => {
        leftSynth.triggerAttackRelease(bassNotes[0], '8', '+4:0');
        leftSynth.triggerAttackRelease(bassNotes[1], '8', '+12:0');
        leftSynth.triggerAttackRelease(bassNotes[0], '8', '+20:0');
        leftSynth.triggerAttackRelease(bassNotes[2], '4', '+30:0');
        leftSynth.triggerAttackRelease(bassNotes[3], '4', '+34:0');
        leftSynth.triggerAttackRelease(bassNotes[4], '4', '+38:0');

      }, '41m')

      lead.start()
      drone.start()

      Tone.Transport.bpm.value = 180;
      Tone.Transport.start();
      //

      return () => { Tone.Transport.stop() }
    }, [])
  // console.log("sc", props.user)
  return(
    <div className="sound-container">
    </div>
  )
}

export default SoundContainer
