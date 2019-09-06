import React, { useState, useEffect } from 'react';
// import logo from './logo.svg';
import './css/App.css';

import Login from './components/Login'
import SignUp from './components/Signup'
import HomePage from './components/HomePage'
import NavBar from './components/NavBar'
// import Environment from './components/Environment'
// import Indexpage from './IndexPage'

import { Switch, Route, Redirect } from 'react-router-dom';
//commented out HomePage for Environment

const App = (props) => {

  const [loading, setLoading] = useState(true)

  // user state and user fetch config
  const [user, setUser] = useState(null)
  const token = localStorage.getItem('token')
  const userUrl = 'http://localhost:3000/api/v1/auto_login'
  // auth token for all fetch requests
  const fetchConfig = {
    headers: {
      'Authorization': token
    }
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem("token")
    return <Redirect to="/login" />
  }

   const leaveEnvironment = () => {
      props.history.push("/")
   }

   const handleLogin = (user) => {
     setUser(user)
   }

  useEffect(()=>{
    if (token) {
      fetch(userUrl, fetchConfig)
      .then(res => res.json())
      .then(data => {
        if (data.errors) {
          localStorage.removeItem('token')
          alert(data.errors)
        } else {
          setUser(data)
          setLoading(false)
        }
      })
    }
  }, [loading])

  console.log(props)
  if (!token) {
    return (
      <div className="app">
        <NavBar
          user={user}
          logout={logout}
        />
          <Switch>
            <Route exact path="/login" render={(props) => {
              return <Login
              handleLogin={handleLogin}
              {...props}/>}}
            />
            <Route exact path="/signup" render={(props) => {
              return <SignUp
              handleLogin={handleLogin}
              {...props}/>}}
            />
          </Switch>
      </div>
    )
  } else if (loading && token) {
    return (
      <div className="app">
        <NavBar
          user={user}
          logout={logout}
        />
      </div>
    )
  } else if (!loading && token) {
    return (
      <div className="app">
        <NavBar
          user={user}
          logout={logout}
          leaveEnvironment={leaveEnvironment}
        />
        <Switch>
          <Route exact path="/profile" render={(props) => {
            return <HomePage
            user={user}
            {...props}/>}}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
