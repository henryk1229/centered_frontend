import Tone from 'tone'
import { genRandomOsc } from './helperFunctions'

const oscArray = [
  "sine",
  "triangle",
  "square",
  "sawtooth"
]

export function createSynth(){

  let reverb = new Tone.Reverb({ decay: 1, wet: 0.8 });
  reverb.generate();

  let synth = new Tone.PolySynth(6, Tone.FMSynth).chain(
      new Tone.Chorus({ frequency: 0.33, depth: 0.7, wet: 0.85 }),
      new Tone.FeedbackDelay({
        delayTime: '64n',
        feedback: 0.2,
        wet: 0.3
      }),
      reverb,
      Tone.Master
    );

    synth.set({
      harmonicity: 1,
      modulationIndex: 1,
      oscillator: {
        type: "sine"
      },
      envelope: {
        attack: .6,
        sustain: 1,
        release: 2,
        attackCurve: "linear",
        releaseCurve: "linear"
      },
      modulation: { type: "sawtooth" },
      modulationEnvelope: {
        attack: .4,
        sustain: 1,
        release: 1,
        releaseCurve: "linear"
      },
      volume: -10
    });

  return synth

}
