import React, { useState, useEffect } from 'react'
import Environment from './Environment'

//commented out environment to work on

function HomePage() {

  const [currentUser, setCurrentUser] = useState('')

  useEffect(()=>{
      setCurrentUser(1)
    },
  [currentUser]
  )

  return(
    <div className="home-page">
      <form onSubmit={}>
        <input type="text" name="username" />
        <input type="password" name="password" />
      </form>


    </div>
  )

}

export default HomePage
