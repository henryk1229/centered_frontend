import React from 'react'
import Circle from '../components/Circle'

function ImageContainer(props){

  // console.log(props)
  return(
    <div className="image-container">
      <Circle randomNum={props.randomNum}/>
    </div>
  )
}

export default ImageContainer
