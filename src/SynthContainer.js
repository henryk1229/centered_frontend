import React from 'react'
import Tone from 'tone'
import  { useSynth }  from './UseSynth'
import { createSynth } from './Synth.js'
import { genRandomDetune } from './helperFunctions'

const noteMatrix = [

  [],
  ["E3", "A4", "B5"],
  ["C3", "G3", "E4", "C4"],
  ["F3", "A3", "C4", "F4", "A4"],
  ["Eb3", "Bb3", "Eb4", "G4", "D5", "Bb4"],
  ["Eb3", "Bb3", "Eb4", "G4", "Eb4", "Bb3", "Eb4"],
  ["D3", "A3", "F4", "D5", "A4", "F4", "A3", "G3"],
  ["B4", "F#3", "B4", "C#5", "D#5", "B5", "F#5", "D#5", "C#5"],

]

function SynthContainer(props){

  const leftSynth = useSynth()[0]
  const rightSynth = useSynth()[1]
  //effects

  //
  const playMusic = () => {

    const synthPart = new Tone.Sequence(
      function(time, note) {
        leftSynth.triggerAttackRelease(note, "10hz", time);
      },
      noteMatrix[props.randomNum],
      '2n'
    );

    synthPart.start();

    const synthPart2 = new Tone.Sequence(
      function(time, note) {
        rightSynth.triggerAttackRelease(note, "10hz", time);
      },
      noteMatrix[props.randomNum],
      '1n'
    );

    synthPart2.start();
    Tone.Transport.start()

  }

   console.log(leftSynth)
   return (
     <>
     {useSynth}
     {props.randomNum !== 0 ? playMusic : ''}
    </>
  )
}

export default SynthContainer
