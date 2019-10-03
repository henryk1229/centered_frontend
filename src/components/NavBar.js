import React from 'react'
import { Link } from 'react-router-dom'
import '../css/NavBar.css'

const NavBar = (props) => {

  return(
    <div >
      {props.user ?
        <div className="nav-bar-wrapper">
          <p id="logo"> _centered_ </p>
          <ul id="contents">
            Welcome, {props.user.username}&nbsp;
            <button id="button" onClick={props.logout}> Log out </button>
            {props.background  !== '#fff' ?
            <button id="button-right" onClick={() => props.leaveEnv()}> Leave Environment</button>
            :
            null
          }
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
