import Tone from 'tone'

export function createDrone(){
   //
   //  let delay = new Tone.FeedbackDelay({
   //   delayTime: '32n',
   //   feedback: 0.88,
   //   wet: 0.66
   // });

   let flanger = new Tone.FeedbackDelay({
     delayTime: 0.005,
     feedback: 0.1,
     wet: 0.33
   });
   new Tone.LFO(1, 0.003, 0.007).start().connect(flanger.delayTime);

   let reverb = new Tone.Reverb({ decay: 1, wet: 0.8 });
   reverb.generate();

   let synth = new Tone.PolySynth(5, Tone.FMSynth).chain(
     // delay,
     flanger,
     reverb,
     Tone.Master
   );
   synth.set({
     harmonicity: 1.5,
     modulationIndex: 1,
     oscillator: {
       type: "sine"
     },
     envelope: {
       attack: 1,
       decay: 1,
       sustain: 2,
       release: 2
     },
     modulation: { type: "triangle" },
     modulationEnvelope: {
       attack: 1,
       decay: 1,
       sustain: 2,
       release: 2
     },
     volume: -5
   });

   return synth

}
