import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

import LoginPage from './LoginPage'
import Environment from './Environment'
import Indexpage from './IndexPage'

//commented out HomePage for Environment

function App() {

  const [page, setPage] = useState('login')
  // const [isLoading, setIsLoading] = useState(true)

  // useEffect(()=>{
  //     console.log('loaded')
  //     fetch('http://localhost:3000/api/v1/users/profile', {
  //       headers: {
  //         "Authorization": localStorage.getItem("token")
  //       }
  //     })
  //     .then(res=>res.json())
  //     .then(console.log)
  //   },
  //   []
  // )

  return (
    <>
      {page === 'login' ? <LoginPage /> : 'userPage'}
    </>
  );
}

export default App;
