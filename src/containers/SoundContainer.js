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

const SoundContainer = (props) => {

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
      numArray.push(parseInt(n))
    }
  })
  // seedNote = 50 + num_array[1]
  //take num_array and make it a matrix for lead and bass ?
  console.log("num", numArray)
  let seedNote = Tone.Frequency((48+numArray[0]), "midi").toNote()
  let bassTonic = (36+numArray[0])
  let bassNotes = [
    Tone.Frequency(bassTonic, "midi").toNote(),
    Tone.Frequency(bassTonic+7, "midi").toNote(),
    Tone.Frequency(bassTonic+12, "midi").toNote(),
    Tone.Frequency(bassTonic+4, "midi").toNote(),
    Tone.Frequency(bassTonic-5, "midi").toNote()
  ]
  console.log("bass", bassNotes)
  let harmony = new Tone.Frequency(seedNote).harmonize(numArray)
  for (let n of harmony) {
    console.log(Tone.Frequency(n, "midi").toNote())
  }
  console.log(harmony)

  //
  // let seedNote = 60 + Math.floor(Math.random() * 12);
  //
  // // Create a note sequence that plays that pitch on first time step
  // let ns = mm.NoteSequence.create();
  // ns.quantizationInfo = { stepsPerQuarter: 4 };
  // ns.totalQuantizedSteps = seqSteps;
  // let note = new mm.NoteSequence.Note();
  // note.pitch = seedNote;
  // note.instrument = 1; // alto voice
  // note.quantizedStartStep = 0;
  // note.quantizedEndStep = 1;
  // ns.notes.push(note);


  // const fmDrone = (notes, playSeconds, tailSeconds) => {
  //   synth.triggerAttackRelease(notes, playSeconds);
  // }
  // const fmBells = (notes, playSeconds, tailSeconds) => {
  //   drone.triggerAttackRelease(notes, playSeconds);
  // }

  useEffect(()=>{

      // console.log(harmony)
    //
    // let notes = Promise.all([
    //
    // ]);
    //
    // Promise.all([notes, model.initialize()]).then(([buffers]) => {
    //   let bufs = [
    //
    //   ];
    //
    // const nextSequence = async () => {
    //
    //   // Fill in the rest
    //   let output = await model.infill(ns);
    //
    //   for (let note of output.notes) {
    //     let start = note.quantizedStartStep * stepDur;
    //     // let [bufNote, buffer] = bufs[Math.floor(Math.random() * bufs.length)];
    //     let buffer = 1
    //     let noteDistance = note.pitch - 1
    //     let playbackRate = 2 ;
    //     let src = new Tone.BufferSource({ playbackRate }).toMaster();
    //     src.start(Tone.now() + start);
    //   }
    //   setTimeout(nextSequence, seqSteps * stepDur * 1000);
    // };
  // });//comment out buffers } before )

      return () => { console.log("unmounted") }
    }, [])
  // console.log("sc", props.user)
  return(
    <div className="sound-container">
    </div>
  )
}

export default SoundContainer
