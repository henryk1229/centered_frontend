import React, { useState, useEffect } from 'react'
import { Link, Redirect } from 'react-router-dom'
import Environment from './Environment'
import ColorChooser from './ColorChooser'

import '../css/HomePage.css'

const HomePage = (props) => {

  // console.log("homepage", props.user)
  return(
    <div className="home-page-wrapper">
      <ColorChooser
        user={props.user}
      />
    </div>
  )
}

export default HomePage