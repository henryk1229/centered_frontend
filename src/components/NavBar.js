import React, { useState, useEffect } from 'react'
import { Link, Redirect } from 'react-router-dom'

const NavBar = (props) => {

  // const [loggedIn, setLoggedIn] = useState(false)

  // useEffect(()=>{
  //     if (localStorage.token) {
  //       setLoggedIn(true)
  //     }
  //   },
  //   []
  // )

  // const  handleLogout = () => {
  //   console.log("clicked")
  //   delete localStorage.token
  //   setLoggedIn(false)
  //   return<Redirect to="/" />
  //
  // }
  //
  // const handleStatus = (props) => {
  //
  // }

  // console.log("navbar", props)
  return(
        <div className="navbar">
          {props.user ?
            <div>
              <p> _centered_ </p>
              <Link to="/">Home</Link>&nbsp;
              User Name: {props.user.username}
              <button onClick={props.logout}> Log out </button>
              <button onClick={props.saveTheme}> Save Theme</button>
            </div>
            :
            <div>
                <p> _centered_ </p>
                <Link to="/login">Login</Link>&nbsp;
                <Link to="/signup">Sign up</Link>&nbsp;
            </div>
          }
        </div>
      )
}


export default NavBar
