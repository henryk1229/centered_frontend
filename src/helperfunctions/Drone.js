import Tone from 'tone'

export function createDrone(){

   let flanger = new Tone.FeedbackDelay({
     delayTime: 0.005,
     feedback: 0.5,
     wet: .33
   });
   new Tone.LFO(1, 0.003, 0.007).start().connect(flanger.delayTime);

   let reverb = new Tone.Reverb({ decay: 1, wet: 0.8 });
   reverb.generate();

   // let comb  = new Tone.LowpassCombFilter({
   //   delayTime : 0.05,
   //   resonance : 0.5,
   //   dampening : 3000
   // })

   let synth = new Tone.PolySynth(4, Tone.FMSynth).chain(
     flanger,
     reverb,
     Tone.Master
   );
   synth.set({
     harmonicity: 1.7,
     modulationIndex: 1,
     oscillator: {
       type: "sine"
     },
     envelope: {
       attack: 2,
       decay: 4,
       sustain: 2,
       release: 2,
       attackCurve: "linear",
       releaseCurve: "linear"
     },
     modulation: { type: "triangle" },
     modulationEnvelope: {
       attack: 1,
       decay: 1,
       sustain: 2,
       release: 2
     },
     volume: -13
   });

   return synth

}
