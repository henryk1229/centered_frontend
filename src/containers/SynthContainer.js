import React, { useEffect } from 'react'
import Tone from 'tone'
import  { useSynth }  from '../hooks/UseSynth'

const SynthContainer= (props) => {

//   const notes = noteMatrix[props.randomNum]
//
//   const leftSynth = useSynth()[0]
//   const rightSynth = useSynth()[1]
//
//   let panner = new Tone.Panner3D().toMaster()
//
//     useEffect(() => {
//     // console.log(props)
//     if (props.randomNum !== 0 && props.env === true){
//       // console.log(props)
//       let lead = new Tone.Loop(time => {
//         rightSynth.triggerAttackRelease(notes[0], '1', time);
//         rightSynth.triggerAttackRelease(notes[1], '0:2', '+1:0');
//         rightSynth.triggerAttackRelease(notes[2], '1', '+2:0');
//         rightSynth.triggerAttackRelease(notes[3], '2', '+3:0');
//         rightSynth.triggerAttackRelease(notes[4], '1', '+5:0');
//         rightSynth.triggerAttackRelease(notes[5], '1', '+6:0');
//         rightSynth.triggerAttackRelease(notes[6], '0:2', '+6:4');
//         rightSynth.triggerAttackRelease(notes[7], '0:2', '+6:8');
//       }, '12m')
//
//       let drone = new Tone.Loop(time => {
//         leftSynth.triggerAttackRelease(notes[0], '1', '+2:0');
//         leftSynth.triggerAttackRelease(notes[2], '1', '+4:0');
//         leftSynth.triggerAttackRelease(notes[0], '1:2', '+6:0');
//         leftSynth.triggerAttackRelease(notes[3], '1', '+8:0');
//         leftSynth.triggerAttackRelease(notes[1], '0:2', '+9:0');
//       }, '16m')
//
//       lead.start()
//       drone.start()
//
//     Tone.Transport.bpm.value = 240;
//     Tone.Transport.start();
//   }
//       //component didunmount
//       return () => { Tone.Transport.stop()}
//     }, [props.randomNum])
//
   return (
     <>

    </>
  )
}

export default SynthContainer