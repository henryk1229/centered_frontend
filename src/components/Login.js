import React, { useState } from 'react'
import '../css/LoginPage.css'

//commented out environment to work on

const Login = (props) => {

  //login form state and fetch hook initialization
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')


  //fetch config
  const url = 'http://localhost:3000/api/v1/login'
  const fetchConfig = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accepts": "application/json"
    },
    body: JSON.stringify({
      user:{
        username: username,
        password: password
      }
    })
  }

  const handleUsername = e => {
    setUsername(e.target.value)
  }

  const handlePassword = e => {
    setPassword(e.target.value)
  }

  const handleSubmit = e => {

    e.preventDefault()
    fetch(url, fetchConfig)
    .then(res=>res.json())
    .then(data=>{
      if (data.errors) {
        alert(data.errors)
      }
      else {
        localStorage.setItem('token', data.jwt)
        props.login(data.user)
        props.history.push("/profile")
      }
    }).catch(console.log)
  }

  return(
    <div className="login-page">
      <form onSubmit={(e) => handleSubmit(e)}>
          <input
            className="login-field"
            type="text"
            name="username"
            placeholder="username"
            onChange={(e) => handleUsername(e)}
          />
          <input
            className="login-field"
            type="password"
            name="password"
            placeholder="password"
            onChange={(e) => handlePassword(e)}
          />
          <input className="submit" type="submit" value="log in" />
        </form>
    </div>
  )
}


export default Login
