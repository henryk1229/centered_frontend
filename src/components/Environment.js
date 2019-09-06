import React, { useState, useEffect } from 'react'
import Tone from 'tone'

import ImageContainer from '../containers/ImageContainer'
import SoundContainer from '../containers/SoundContainer'
import SynthContainer from '../containers/SynthContainer'

// rememeber the randomNum = 0 on useEffect bug with playMusic()

const Environment = (props) => {

  const [randomNum, setRandomNum] = useState(0)

  useEffect(() => {
    let random = Math.floor(Math.random() * 7)
      setRandomNum(random)

    // return () => { Tone.transport.stop()}
    },
    []
  )
  // console.log(props.color)
  return(
    <>
      <ImageContainer
      randomNum={randomNum}
      color={props.color}
      background={props.background}
      handleLeave={props.handleLeave}
      user={props.user}
      />
    </>
  )
}

export default Environment
