import React, { useState, useEffect } from 'react'
import Tone from 'tone'
import * as mm from '@magenta/music';
import { genRandomOsc } from '../helperfunctions/helperFunctions'
// import { usePanner } from '../hooks/UsePanner'
import { createSynth } from '../helperfunctions/Synth.js'
import { createDrone } from '../helperfunctions/Drone.js'
import { createPanner } from '../helperfunctions/Panner.js'
// import { useEffectAsync } from '../hooks/useEffectAsync'
// import { matrix } from '../helperfunctions/NoteLibrary'

export default function SoundContainer(props){

  //initialize mm & Tone
  let Tone = mm.Player.tone;
  let stepDur = 25;
  let seqSteps = 32;
  let model = new mm.Coconet(
    `https://storage.googleapis.com/magentadata/js/checkpoints/coconet/bach`
  );
  let synth = createSynth()
  let drone = createDrone()

  //initialize user "notes"
  let note_string = props.user.koan_number.toString()
  let note_array = note_string.split('')
  let num_array = []
  for (let num of note_array) {
    // num = 1 num = 3 num = 6 num = 8
    // num === "1" ? num_array.push(11) : num;
    // num === "3" ? num_array.push(12) : num;
    // num === "6" ? num_array.push(16) : num;
    // num === "8" ? num_array.push(16) : num;

    num_array.push(parseInt(num))

  }
  // seedNote = 50 + num_array[1]
  //take num_array and make it a matrix for lead and bass ?
  console.log("num", num_array)
  let seedNote = Tone.Frequency((50+num_array[1]), "midi").toNote()
  console.log(seedNote)
  let harmony = new Tone.Frequency(seedNote).harmonize(num_array)
  for (let n of harmony) {
    console.log(Tone.Frequency(n, "midi").toNote())
  }
  console.log(harmony)

  //
  // let seedNote = 60 + Math.floor(Math.random() * 12);
  //
  // // Create a note sequence that plays that pitch on first time step
  let ns = mm.NoteSequence.create();
  ns.quantizationInfo = { stepsPerQuarter: 4 };
  ns.totalQuantizedSteps = seqSteps;
  let note = new mm.NoteSequence.Note();
  note.pitch = seedNote;
  note.instrument = 1; // alto voice
  note.quantizedStartStep = 0;
  note.quantizedEndStep = 1;
  ns.notes.push(note);


  const fmDrone = (notes, playSeconds, tailSeconds) => {
    synth.triggerAttackRelease(notes, playSeconds);
  }
  const fmBells = (notes, playSeconds, tailSeconds) => {
    drone.triggerAttackRelease(notes, playSeconds);
  }

  useEffect(()=>{

      // console.log(harmony)

    let notes = Promise.all([

    ]);

    Promise.all([notes, model.initialize()]).then(([buffers]) => {
      let bufs = [

      ];

    const nextSequence = async () => {

      // Fill in the rest
      let output = await model.infill(ns);

      for (let note of output.notes) {
        let start = note.quantizedStartStep * stepDur;
        // let [bufNote, buffer] = bufs[Math.floor(Math.random() * bufs.length)];
        let buffer = 1
        let noteDistance = note.pitch - 1
        let playbackRate = 2 ;
        let src = new Tone.BufferSource({ playbackRate }).toMaster();
        src.start(Tone.now() + start);
      }
      setTimeout(nextSequence, seqSteps * stepDur * 1000);
    };
  });//comment out buffers } before )

    console.log("ueNS")
      return () => { console.log("unmounted") }
    }, [])
  // console.log("sc", props.user)
  return(
    <div className="sound-container">
    </div>
  )
}
