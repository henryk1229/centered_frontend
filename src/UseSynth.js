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

    const freeverb = new Tone.Freeverb().toMaster();
      freeverb.dampening.value = 1000

    const synth1 = createSynth()
    synth1.toMaster();

    const synth2 = createSynth()
    synth2.toMaster()

    synth1.volume.value = -24
    synth1.detune = detuneValue
    synth1.connect(freeverb).connect(pannerLeft)

    synth2.volume.value = -24
    synth2.detune = detuneValue
    synth2.connect(freeverb).connect(pannerRight)

    setSynth([
      synth1,
      synth2
    ])

    }, []
  )
  // console.log("random Osc", genRandomDetune())
  return synth

}
