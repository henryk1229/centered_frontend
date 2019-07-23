import { useState, useEffect } from 'react'
import Tone from 'tone'
import { genRandomOsc, genRandomDetune } from './helperFunctions'
import { createSynth } from './Synth.js'

//account for vol difference when "square"
export function useSynth(props){

  const [synth, setSynth] = useState([])

  useEffect(() => {

    let detuneValue = genRandomDetune()
    let pannerLeft = new Tone.Panner(-1)
    let pannerRight = new Tone.Panner(1)
    let echo = new Tone.FeedbackDelay('16n', 0.2);

    let delay = Tone.context.createDelay(6.0);
    delay.delayTime.value = 6.0;

    const freeverb = new Tone.Freeverb().toMaster();
    freeverb.dampening.value = 500

    const synth1 = createSynth().toMaster();
    const synth2 = createSynth().toMaster()

    synth1.volume.value = -24
    synth1.detune = detuneValue
    synth1.connect(pannerLeft)

    synth2.volume.value = -24
    synth2.detune = detuneValue
    synth2.connect(pannerRight)

    pannerLeft.connect(freeverb);
    pannerRight.connect(freeverb);

    freeverb.connect(echo)

    echo.toMaster();
    echo.connect(delay);

    setSynth([
      synth1,
      synth2
    ])

    }, []
  )
  // console.log("random Osc", genRandomDetune())
  return synth

}
