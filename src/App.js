import React, { useState, useEffect } from 'react';
// import logo from './logo.svg';
import './css/App.css';

import Login from './components/Login'
import SignUp from './components/Signup'
import HomePage from './components/HomePage'
import NavBar from './components/NavBar'

import { Switch, Route, Redirect, withRouter } from 'react-router-dom';


const App = (props) => {

  //app loader
  const [loading, setLoading] = useState(false)

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

  //background for env
  const [background, setBackground] = useState('#fff')

  const logout = () => {
    setUser(null)
    localStorage.removeItem("token")
    return <Redirect to="/login" />
  }

  const handleLogin = (user) => {
    setUser(user)
  }

  const handleBackground = (background) => {
    setBackground(background)
  }

  const leaveEnv = () => {
    setBackground('#fff')
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
          props.history.push("/profile")
        }
      })
    }
  }, [loading])


  if (token && !loading) {
    return (
      <div className="app">
        <NavBar
          user={user}
          logout={logout}
          leaveEnv={leaveEnv}
        />
        <Switch>
          <Route exact path="/profile" render={(props) => {
            return <HomePage
            user={user}
            background={background}
            handleBackground={handleBackground}
            {...props}/>}}
          />
        </Switch>
      </div>
    );
  } else if (token && loading) {
    return (
      <div className="app">
        <NavBar
          user={user}
          logout={logout}
          leaveEnv={leaveEnv}
        />
      </div>
    );
  } else {
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
  }
}

export default withRouter(App);
