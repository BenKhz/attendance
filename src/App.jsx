import React, {useState, useEffect} from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material'
import axios from 'axios';
import AttendView from './components/AttendView.jsx';
import EnrollView from './components/EnrollView.jsx';
import Home from './components/Home.jsx';
import Login from './components/Login.jsx';


import {
  BrowserRouter,
  Routes,
  Route } from "react-router-dom";

const App = () => {
  const theme = createTheme();
  const [isLoggedIn, setLoggedIn] = useState(null);
  const [currentEnroll, setEnroll] = useState(["enroll default1", 'enroll default2'])
  const [selectObj, updateSelect] = useState({});

  useEffect(()=>{
    console.log("Login is null, should mimic auth check to true in 1 second, Disable setTimeout in App")
    // setTimeout(()=>{Math.random() > 0.5 ? setLoggedIn(true) : setLoggedIn(false)}, 1000)
    setTimeout(()=>{setLoggedIn(true)}, 2000)
  }, [])

  return (
    <>
    <CssBaseline />
    <ThemeProvider theme={theme} >
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home isLoggedIn={isLoggedIn} updateSelect={updateSelect} selectObj={selectObj} setEnroll={setEnroll} />} />
          <Route path='/login' element={<Login setLoggedIn={setLoggedIn} isLoggedIn={isLoggedIn}/>} />
          <Route path='/attendView' element={<AttendView currentEnroll={currentEnroll} setEnroll={setEnroll}/>} />
          <Route path='/enrollView' element={<EnrollView currentEnroll={currentEnroll}/>} />
        </Routes>
      </BrowserRouter>
      </ThemeProvider>
   </>
  )
}

export default App;