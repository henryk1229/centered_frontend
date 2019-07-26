import React, { useState, useEffect } from 'react'
import { Link, Redirect } from 'react-router-dom'
import Environment from './Environment'
import ColorChooser from './ColorChooser'

//commented out environment to work on

const HomePage = (props) => {

  // const [env, setEnv] = useState(false)

  const [chosenColor, setChosenColor] = useState('')

  // <div className="user-profile">
  //   User Name: {props.user.username}
  // </div>
  // <div className = "user-environments">
  //   <button onClick={()=>setEnv(!env)}>
  //     {env === false ? 'Enter Environment' : 'Leave Environment'}
  //   </button>
  //   {env === true ? <Environment env={env}/> : <></>}
  // </div>

  // <button onClick={()=>setEnv(!env)}>
  //   {env === false ? 'Enter Environment' : 'Leave Environment'}
  // </button>
  // {env === true ? <Environment env={env}/> : <></>}

  const handleColorPick = ({background}) => {
    console.log("hCP", background)
    setChosenColor(background)
  }

  // console.log("homepage", props)
  return(
    <div className="home-page">
      {props.user ?
        <>
        <div className="color-picker">
        <ColorChooser handleColorPick={handleColorPick}/>
        </div>
        </>
        :
        null
      }
    </div>
  )
}

export default HomePage
