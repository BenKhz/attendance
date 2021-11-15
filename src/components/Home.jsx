import React, {useState} from 'react';
import {Button} from '@mui/material'
import Login from './Login.jsx'

function Home(props) {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [selectObj, updateSelect] = useState({})
  return (
    <>
      {!isLoggedIn && <Login/>}
      {isLoggedIn &&
        <div>
          This should be home View with the ability to select stuff campus, cohort select should default to most recent.
          <select onChange={(e) => {updateSelect({...selectObj, 'cohort': e.target.value})}} >
            <option>Cohort4 from db</option>
            <option>Cohort3 from db</option>
            <option>Cohort2 from db</option>
            <option>Cohort1 from db</option>
          </select>
          <select onChange={(e) => {updateSelect({...selectObj, 'campus': e.target.value})}}>
            <option>campus 1</option>
            <option>campus 2</option>
          </select>
          <Button onClick={() => {console.log(selectObj)}}></Button>
        </div>}
    </>
  );
}

export default Home;