import React, { useState, useEffect } from 'react'

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
    fetch('http://localhost:3000/api/v1/login', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username: username,
        password: password
      })
    })
    .then(res=>res.json())
    .then(data=>{
      localStorage.setItem('token', data.token)
      props.history.push("/")
      props.userState({
        username: username,
        password: password
      })
      //then redirect to profile page
    })
  }

  return(
    <div className="signup-page">
      <form onSubmit={(e) => handleSubmit(e)}>
        <input type="text" name="username" placeholder="username" onChange={(e) => handleUsername(e)}/>
        <input type="text" name="email" placeholder="email" onChange={(e) => handleUsername(e)}/>
        <input type="password" name="password" placeholder="password" onChange={(e) => handlePassword(e)}/>
        <input type="submit" value="log in" />
      </form>


    </div>
  )

}

export default SignupPage
