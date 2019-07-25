import React, { useState, useEffect } from 'react'
import { Link, Redirect } from 'react-router-dom'

const NavBar = (props) => {

  const [loggedIn, setLoggedIn] = useState(false)

  useEffect(()=>{
      if (localStorage.token) {
        setLoggedIn(true)
      }
    },
    []
  )

  const  handleLogout = () => {
    console.log("clicked")
    delete localStorage.token
    setLoggedIn(false)
    return<Redirect to="/" />

  }

  const handleStatus = (props) => {
    if (loggedIn) {
      return (
        <div>
          _centered_ &nbsp;
          <Link to="/">Home</Link>&nbsp;
          <button onClick={()=>handleLogout()}> Log out </button>
        </div>
      )
    } else {
      return(
        <div>
            <p> _centered_ </p>
            <Link to="/">Home</Link>&nbsp;
            <Link to="/login">Login</Link>&nbsp;
            <Link to="/signup">Sign up</Link>&nbsp;
        </div>
      )
    }
  }

  // console.log("navbar", props)
  return(
          <div className="navbar">
              {handleStatus()}
          </div>
        )
}


export default NavBar
