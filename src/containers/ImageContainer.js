import React from 'react'
import Circle from '../components/Circle'

const ImageContainer = (props) => {

  // console.log("circle", props.user)
  return(
    <div className="image-container">
      <Circle
      randomNum={props.randomNum}
      color={props.color}
      background={props.background}
      handleLeave={props.handleLeave}
      user={props.user}
      />
    </div>
  )
}

export default ImageContainer
