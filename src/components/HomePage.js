import React, { useState, useEffect } from 'react'
import { Link, Redirect } from 'react-router-dom'
import Environment from './Environment'

//commented out environment to work on

const HomePage = (props) => {

  const [env, setEnv] = useState(false)

  // console.log("homepage", props)
  return(
    <div className="home-page">
      <div className="user-profile">
        User Name: {props.user.username}
      </div>
      <div className = "user-environments">
        <button onClick={()=>setEnv(!env)}>
          {env === false ? 'Enter Environment' : 'Leave Environment'}
        </button>
        {env === true ? <Environment env={env}/> : <></>}
      </div>
    </div>
  )
}

export default HomePage
