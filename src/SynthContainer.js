import React from 'react'
import Tone from 'tone'
import  { useSynth }  from './UseSynth'



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


  const notes = noteMatrix[props.randomNum]

  const leftSynth = useSynth()[0]
  const rightSynth = useSynth()[1]

  const playMusic = () => {

    new Tone.Loop(time => {
      rightSynth.triggerAttackRelease('Eb4', '1:2', time);
      rightSynth.setNote('G5', '+0:2');

      rightSynth.triggerAttackRelease('F5', '0:2', '+6:0');

      rightSynth.triggerAttackRelease('C5', '0:2', '+11:2');

      rightSynth.triggerAttackRelease('Eb4', '2:0', '+19:0');
      rightSynth.setNote('G5', '+19:1:2');
      rightSynth.setNote('F5', '+19:3:0');
      rightSynth.setNote('Bb5', '+19:4:2');
    }, '30m').start();

    new Tone.Loop(time => {
    // Trigger D4 after 5 measures and hold for 1 full measure + two 1/4 notes
      leftSynth.triggerAttackRelease('Eb3', '1:2', '+5:0');
      // Switch to E4 after one more measure
      leftSynth.setNote('Eb4', '+6:0');

      // Trigger B3 after 11 measures + two 1/4 notes + two 1/16 notes. Hold for one measure
      leftSynth.triggerAttackRelease('Eb3', '1m', '+11:2:2');
      // Switch to G3 after a 1/2 note more
      leftSynth.setNote('Bb4', '+12:0:2');

      // Trigger G4 after 23 measures + two 1/4 notes. Hold for a half note.
      leftSynth.triggerAttackRelease('G3', '0:2', '+23:2');
    }, '40m').start();
  Tone.Transport.bpm.value = 240;
  Tone.Transport.start();

  }

   console.log(notes)
   return (
     <>
     {useSynth}
     {props.randomNum !== 0 ? playMusic : ''}
    </>
  )
}

export default SynthContainer
