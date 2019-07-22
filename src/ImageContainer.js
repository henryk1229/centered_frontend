import React from 'react'
import Spring from './Spring'

function ImageContainer(props){

  // console.log(props)
  return(
    <div className="image-container">
      <Spring randomNum={props.randomNum}/>
    </div>
  )
}

export default ImageContainer
