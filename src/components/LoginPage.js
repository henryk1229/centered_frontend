import React, { useState, useEffect } from 'react'

//commented out environment to work on

const LoginPage = (props) => {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleUsername = e => {
    setUsername(e.target.value)
  }

  const handlePassword = e => {
    setPassword(e.target.value)
  }

  const handleSubmit = e => {
    // console.log("before fetch", username, password)
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
      // console.log(data)
      localStorage.setItem('token', data.token)
      props.history.push("/")
      props.userState({
        username: username,
        password: password
      })
    })
  }
  // console.log(props)
  return(
    <div className="login-page">
      <form onSubmit={(e) => handleSubmit(e)}>
        <input type="text" name="username" placeholder="username" onChange={(e) => handleUsername(e)}/>
        <input type="password" name="password" placeholder="password" onChange={(e) => handlePassword(e)}/>
        <input type="submit" value="log in" />
      </form>
    </div>
  )

}

export default LoginPage
