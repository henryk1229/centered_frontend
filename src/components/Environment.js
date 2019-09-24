import React, { useState, useEffect } from 'react'

import ImageContainer from '../containers/ImageContainer'
import SoundContainer from '../containers/SoundContainer'

const Environment = (props) => {

  const [randomNum, setRandomNum] = useState(null)

  useEffect(() => {
    let random = Math.floor(Math.random() * 7)
      setRandomNum(random)

    // return () => { Tone.transport.stop()}
    },[]
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
      <SoundContainer
      user={props.user}
      randomNum={randomNum}
      color={props.color}
      background={props.background}
      />
    </>
  )
}

export default Environment
