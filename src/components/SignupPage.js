import React, { useState, useEffect } from 'react'
import '../css/SignupPage.css'

//commented out environment to work on

const SignupPage = (props) => {

  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleUsername = e => {
    setUsername(e.target.value)
  }

  const handleEmail = e => {
    setEmail(e.target.value)
  }

  const handlePassword = e => {
    setPassword(e.target.value)
  }

  const handleSubmit = e => {

    e.preventDefault()
    fetch('http://localhost:3000/api/v1/signup', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username: username,
        email: email,
        password: password
      })
    })
    .then(res=>res.json())
    .then(data=>{
      localStorage.setItem('token', data.token)
      props.history.push("/")
      props.handleLogin({
        username: username,
        password: password
      })
      //then redirect to profile page
    }).catch(console.log)
  }

  return(
    <div className="signup-page">
      <form onSubmit={(e) => handleSubmit(e)}>
        <input className="signup-field"type="text" name="username" placeholder="username" onChange={(e) => handleUsername(e)}/>
        <input className="signup-field" type="text" name="email" placeholder="email" onChange={(e) => handleEmail(e)}/>
        <input className="signup-field" type="password" name="password" placeholder="password" onChange={(e) => handlePassword(e)}/>
        <input className="submit" type="submit" value="log in" />
      </form>


    </div>
  )

}

export default SignupPage
