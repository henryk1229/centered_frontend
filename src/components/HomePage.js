import React, { useState, useEffect } from 'react'
import { Link, Redirect } from 'react-router-dom'
import Environment from './Environment'
import ColorChooser from './ColorChooser'

import '../css/HomePage.css'

//commented out environment to work on

const HomePage = (props) => {

  // const [env, setEnv] = useState(false)

  // console.log("homepage", props.user)
  return(
    <div className="home-page-wrapper">
      {props.user ?
        <>
        <div className="home-page-wrapper">
        <ColorChooser user={props.user}/>
        </div>
        </>
        :
        null
      }
    </div>
  )
}

export default HomePage
