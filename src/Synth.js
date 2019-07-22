import Tone from 'tone'
import { genRandomOsc, genRandomDetune } from './helperFunctions'

//account for vol difference when "square"

const oscArray = [
  "sine",
  "triangle",
  "square",
  "sawtooth"
]

let envelope = {
  attack: 0.1,
  release: 4,
  releaseCurve: 'linear'
};
//2-4 is best 8v for fE
let filterEnvelope = {
  baseFrequency: 100,
  octaves: genRandomOsc() + 1,
  attack: 0,
  decay: 0,
  release: 1000
};

export function createSynth(){

    let duoSynth = new Tone.DuoSynth({
      harmonicity: 1,
      voice0: {
        oscillator: {type: oscArray[genRandomOsc()]},
        envelope,
        filterEnvelope
      },
      voice1: {
        oscillator: {type: oscArray[genRandomOsc()]},
        envelope,
        filterEnvelope
      },
      vibratoRate: 0.3,
      vibratoAmount: 0.1
    });
    duoSynth.toMaster();


  return duoSynth

}
