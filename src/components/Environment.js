import React, { useState, useEffect } from 'react'
// import Tone from 'tone'
import ImageContainer from '../containers/ImageContainer'
import SoundContainer from '../containers/SoundContainer'

const Environment = (props) => {

  const [randomNum, setRandomNum] = useState(null)

  const [lava, toggleLava] = useState(false)

  useEffect(() => {
    let random = Math.floor(Math.random() * 7)
      setRandomNum(random)
    }, [])

  console.log(props.number)
  return(
    <>
      <ImageContainer
      randomNum={randomNum}
      color={props.color}
      background={props.background}
      leaveEnv={props.leaveEnv}
      user={props.user}
      lava={lava}
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
