import React, { useState, useEffect } from 'react'
import Tone from 'tone'
// import * as mm from '@magenta/music';
import { genRandomOsc } from '../helperfunctions/helperFunctions'
// import { usePanner } from '../hooks/UsePanner'
import { createSynth } from '../helperfunctions/Synth.js'
import { createDrone } from '../helperfunctions/Drone.js'
import { createPanner } from '../helperfunctions/Panner.js'
import { matrix } from '../helperfunctions/NoteLibrary'


export default function MvpSoundContainer(props){

  useEffect(()=>{

    let lead = new Tone.Loop(time => {
      props.rightSynth.triggerAttackRelease(props.notes[0], '2', time);
      props.rightSynth.triggerAttackRelease(props.notes[1], '1', '+1:0');
      props.rightSynth.triggerAttackRelease(props.notes[2], '2', '+2:0');
      props.rightSynth.triggerAttackRelease(props.notes[3], '4', '+3:0');
      props.rightSynth.triggerAttackRelease(props.notes[4], '2', '+5:0');
      props.rightSynth.triggerAttackRelease(props.notes[5], '2', '+6:0');
      props.rightSynth.triggerAttackRelease(props.notes[6], '1', '+6:4');
      props.rightSynth.triggerAttackRelease(props.notes[7], '1', '+6:8');
    }, '11m')

    let drone = new Tone.Loop(time => {
      props.leftSynth.triggerAttackRelease(props.droneNotes[0], '4', '+4:0');
      props.leftSynth.triggerAttackRelease(props.droneNotes[1], '4', '+8:0');
      props.leftSynth.triggerAttackRelease(props.droneNotes[0], '4', '+12:0');
      props.leftSynth.triggerAttackRelease(props.droneNotes[2], '2', '+16:0');
      props.leftSynth.triggerAttackRelease(props.droneNotes[3], '2', '+18:0');
      props.leftSynth.triggerAttackRelease(props.droneNotes[0], '1', '+22:0');

    }, '27m')

    lead.start()
    drone.start()

    Tone.Transport.bpm.value = 180;
    Tone.Transport.start();
    //
      return () => { Tone.Transport.stop() }
    }, [])


  return(
    <div className="mvp-sound-container">
    </div>
  )
}
