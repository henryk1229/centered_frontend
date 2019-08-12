import React, { useState, useEffect } from 'react'
import { Link, Redirect } from 'react-router-dom'
import '../css/NavBar.css'

const NavBar = (props) => {

  // <button onClick={props.leaveEnvironment}> Leave Environment</button>
      // <button onClick={props.saveTheme}> Save Theme</button>

  return(
        <div>
          {props.user ?
            <div className="nav-bar-wrapper">
              <p id="logo"> _centered_ </p>
              <ul id="contents">
                Signed in as: {props.user.username}&nbsp;
                <button id="button" onClick={props.logout}> Log out </button>
              </ul>

            </div>
            :
            <div className="nav-bar-wrapper">
                <p id="logo"> _centered_ </p>
                <ul id="contents">
                  <Link to="/login">Login</Link>&nbsp;
                  <Link to="/signup">Sign up</Link>&nbsp;
                </ul>
            </div>
          }
        </div>
      )
}


export default NavBar
