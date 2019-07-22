import React, { useState, useEffect } from 'react'
import Environment from './Environment'

function HomePage() {

  const [currentUser, setCurrentUser] = useState('')

  useEffect(()=>{
      setCurrentUser(1)
    },
  [currentUser]
  )

  return(
    <div className="home-page">
      <Environment />
    </div>
  )

}

export default HomePage
