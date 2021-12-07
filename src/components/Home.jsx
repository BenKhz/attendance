import React, { useEffect, useState } from 'react';
import { CssBaseline, Button, CircularProgress, Container, Box } from '@mui/material'
import { Link, Navigate, Outlet } from 'react-router-dom'
import axios from 'axios'

import CohortMenu from './CohortMenu.jsx';

function Home({ isLoggedIn, selectObj, updateSelect, setEnroll }) {
  const [campuses, setCampuses] = useState([]);
  const [cohorts, setCohorts] = useState([]);
  useEffect(() => {
    axios.get('/campuses').then(res => { setCampuses(res.data) })
    axios.get('/cohorts').then(res => { setCohorts(res.data) })
  },[])

  return (
    <>
      <Container style={{ height: "100vh" }}>
        <Box
          sx={{
            marginTop: 2,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-around'
          }}>
          {isLoggedIn === null ? <CircularProgress sx={{ position: 'absolute', top: '50vh' }} size={80} /> :
            isLoggedIn === false ?
              <Navigate to='/login' /> :
              <CohortMenu
                updateSelect={updateSelect}
                selectObj={selectObj}
                setEnroll={setEnroll}
                cohorts={cohorts}
                campuses={campuses} />}
        </Box>
      </Container>
    </>
  );
}

export default Home;