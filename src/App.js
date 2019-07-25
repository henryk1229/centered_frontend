import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

import LoginPage from './components/LoginPage'
import SignupPage from './components/SignupPage'
import HomePage from './components/HomePage'
import NavBar from './components/NavBar'
import Environment from './components/Environment'
// import Indexpage from './IndexPage'

import { Switch, Route } from 'react-router-dom';
//commented out HomePage for Environment

const App = (props) => {

  const [user, setUser] = useState({})
  const [isLoading, setIsLoading] = useState(true)

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
    <NavBar user={user}/>
    <Switch>
       <Route exact path="/login" component={LoginPage} />
       <Route exact path="/signup" component={SignupPage} />
       <Route exact path='/environment' user={user} component={Environment} />
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
