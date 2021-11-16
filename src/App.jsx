import React, {useState, useEffect} from 'react';
import AttendView from './components/AttendView.jsx';
import EnrollView from './components/EnrollView.jsx';
import Home from './components/Home.jsx';
import Login from './components/Login.jsx';
import axios from 'axios';

import {
  BrowserRouter,
  Routes,
  Route } from "react-router-dom";

const App = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [currentEnroll, setEnroll] = useState([])

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home isLoggedIn={isLoggedIn}/>} />
          <Route path='/login' element={<Login setLoggedIn={setLoggedIn} isLoggedIn={isLoggedIn}/>} />
          <Route path='/attendView' element={<AttendView currentEnroll={currentEnroll}/>} />
          <Route path='/enrollView' element={<EnrollView currentEnroll={currentEnroll}/>} />
        </Routes>
      </BrowserRouter>
   </>
  )
}

export default App;