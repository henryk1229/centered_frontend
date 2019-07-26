import React, { useState, useEffect } from 'react';
// import logo from './logo.svg';
import './App.css';

import LoginPage from './components/LoginPage'
import SignupPage from './components/SignupPage'
import HomePage from './components/HomePage'
import NavBar from './components/NavBar'
// import Environment from './components/Environment'
// import Indexpage from './IndexPage'

import { Switch, Route, Redirect } from 'react-router-dom';
//commented out HomePage for Environment

const App = (props) => {

  const [user, setUser] = useState(null)
  // const [isLoading, setIsLoading] = useState(true)

  const logout = () => {
      setUser(null)
      localStorage.removeItem("token")
      return <Redirect to="/" />
   }

   const userState = (data) => {
     setUser(data)
   }

  useEffect(()=>{
    if (!!localStorage.token) {
        fetch('http://localhost:3000/api/v1/profile', {
          headers: {
            'Authorization': localStorage.getItem("token")
          }
        })
        .then(res=>res.json())
        .then(res=>setUser(res))
      }
    },
    []
  )
  // console.log(user)
  return (
    <div className="app">
    <NavBar user={user} logout={logout}/>
    <Switch>
      <Route exact path="/login" render={(props) => {
        return <LoginPage user={user} userState={userState} {...props}/>}}
        />
      <Route exact path="/signup" render={(props) => {
        return <SignupPage user={user} userState={userState} {...props}/>}}
        />
      <Route exact path="/"
      render={(routerProps) => {
        return <HomePage user={user}/>
        }}
        />
    </Switch>
    </div>
  );
}

export default App;
