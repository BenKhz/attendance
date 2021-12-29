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
  const [currentEnroll, setEnroll] = useState([])
  const [selectObj, updateSelect] = useState({});

  useEffect(()=>{
    console.warn("Currently using setTimout to mimic session check and login state.")
    setTimeout(() => {
      setLoggedIn(false);
      console.log("isLogged set to False")}, 1000)
    // setTimeout(()=>{setLoggedIn(true);
    //   console.log("isLoggedIn set to True")}, 2000)
  }, [])

  return (
    <>
    <CssBaseline />
    <ThemeProvider theme={theme} >
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home isLoggedIn={isLoggedIn} updateSelect={updateSelect} selectObj={selectObj} setEnroll={setEnroll} />} />
          <Route path='/login' element={<Login setLoggedIn={setLoggedIn} isLoggedIn={isLoggedIn}/>} />
          <Route path='/attendView' element={<AttendView currentEnroll={currentEnroll} />} />
          <Route path='/enrollView' element={<EnrollView currentEnroll={currentEnroll} selectObj={selectObj}/>} />
        </Routes>
      </BrowserRouter>
      </ThemeProvider>
   </>
  )
}

export default App;