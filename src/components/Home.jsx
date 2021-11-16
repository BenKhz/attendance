import React, {useEffect, useState} from 'react';
import {Button} from '@mui/material'
import {Link, Navigate, Outlet} from 'react-router-dom'

function Home({isLoggedIn}) {

  const [selectObj, updateSelect] = useState({});

  return (
    <>
      {!isLoggedIn ? <Navigate to='/login'/> : console.log("isLoggedIn = true , navigating to home compnent")}
      {isLoggedIn &&
        <div>
          This should be home View with the ability to select stuff campus, cohort select should default to most recent. Look for some Library or presset auth form
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
          <Button onClick={() => {console.log(`${Object.keys(selectObj)} should be sent to server to get populate current enrollment, and set cohort/campus`)}}>Retrieve from Db!</Button>
          <Link to='/attendView'>
            <Button onClick={()=>{ console.log('Attendance View Button Clicked!')}}> Attendance View </Button>
          </Link>
          <Link to='/enrollView'>
            <Button onClick={()=>{ console.log('EnrollView Button Clicked!')}}> Enrollment View </Button>
          </Link>
        </div>}
        <Outlet />
    </>
  );
}

export default Home;