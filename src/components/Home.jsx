import React, {useEffect, useState} from 'react';
import {CssBaseline, Button, CircularProgress, Container, Box} from '@mui/material'
import {Link, Navigate, Outlet} from 'react-router-dom'

import CohortMenu from './CohortMenu.jsx';

function Home({isLoggedIn, selectObj, updateSelect, setEnroll}) {

  return (
    <>
    <Container style={{height:"100vh"}}>
      <Box
            sx={{
              marginTop: 2,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'space-around'
            }}>
         {isLoggedIn === null ? <CircularProgress sx={{position:'absolute', top:'50vh'}} size={80} /> :
            isLoggedIn === false ?
            <Navigate to='/login'/> :
            <CohortMenu updateSelect={updateSelect} selectObj={selectObj} setEnroll={setEnroll} />}
        </Box>
      </Container>
    </>
  );
}

export default Home;