import React, { useState, useEffect } from 'react'

import ImageContainer from './ImageContainer'
import SoundContainer from './SoundContainer'
import SynthContainer from './SynthContainer'



// rememeber the randomNum = 0 on useEffect bug with playMusic()

function Environment(props){

  const [randomNum, setRandomNum] = useState(0)

  useEffect(() => {
    let random = Math.floor(Math.random() * 7)
      setRandomNum(3)
    },
    []
  )

  return(
    <>
      <ImageContainer randomNum={randomNum}/>
      <SynthContainer randomNum={randomNum}/>
      <SoundContainer randomNum={randomNum}/>


    </>
  )
}

export default Environment
