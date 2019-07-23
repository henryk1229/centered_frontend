import React from 'react'
import Tone from 'tone'
import  { useSynth }  from './UseSynth'



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

function SynthContainer(props){

  const notes = noteMatrix[props.randomNum]

  const leftSynth = useSynth()[0]
  const rightSynth = useSynth()[1]

  const playMusic = () => {

    let lead = new Tone.Loop(time => {
      rightSynth.triggerAttackRelease(notes[0], '1', time);
      rightSynth.triggerAttackRelease(notes[1], '0:2', '+1:0');
      rightSynth.triggerAttackRelease(notes[2], '1', '+2:0');
      rightSynth.triggerAttackRelease(notes[3], '2', '+3:0');
      rightSynth.triggerAttackRelease(notes[4], '1', '+5:0');
      rightSynth.triggerAttackRelease(notes[5], '1', '+6:0');
      rightSynth.triggerAttackRelease(notes[6], '0:2', '+6:4');
      rightSynth.triggerAttackRelease(notes[7], '0:2', '+6:8');
    }, '7m')

    let drone = new Tone.Loop(time => {
      leftSynth.triggerAttackRelease(notes[0], '1', '+2:0');
      leftSynth.triggerAttackRelease(notes[2], '1', '+4:0');
      leftSynth.triggerAttackRelease(notes[0], '1:2', '+6:0');
      leftSynth.triggerAttackRelease(notes[3], '1', '+8:0');
      leftSynth.triggerAttackRelease(notes[1], '0:2', '+9:0');
    }, '8m')

    lead.start()
    drone.start()

  Tone.Transport.bpm.value = 240;
  Tone.Transport.start();

  }

   console.log(notes, leftSynth)
   return (
     <>
     {useSynth}
     {props.randomNum !== 0 ? playMusic : ''}
    </>
  )
}

export default SynthContainer
