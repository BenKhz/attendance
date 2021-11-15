import React, {useState, useEffect} from 'react';
import AttendView from './components/AttendView.jsx';
import EnrollView from './components/EnrollView.jsx';
import Home from './components/Home.jsx';
import {
  BrowserRouter,
  Routes,
  Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/attendView' element={<AttendView/>} />
          <Route path='/enrollView' element={<EnrollView/>} />
        </Routes>
      </BrowserRouter>
   </>
  )
}

export default App;