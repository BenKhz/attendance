import React, {useState, useEffect, useReducer} from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AttendanceView from './components/AttendanceView.jsx'
import studentRoster from '../lib/hrlax4849'
import storeReducer from './reducers/storeReducer.jsx';
import { Stack } from '@mui/material';

const initialStore = {
  enrolled: studentRoster, // master list initialized from enrollment. events will add.
  unregistered:[], // tracks all zoom attendees not in enrollment / mismatch
  zoom: [] // stores all zoom attendees ? DO I need this?
}

const theme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#5893df',
    },
    secondary: {
      main: '#2ec5d3',
    },
    background: {
      default: '#192231',
      paper: '#e4e8ae',
    },
  },
});

function App() {

  const [store, dispatch] = useReducer(storeReducer, initialStore);

  useEffect(() => {
    // if served from secure connection, create secure websocket
    var url = window.location.href.replace('https', 'wss').replace('http', 'ws');
    const socket = new WebSocket(url);
    socket.addEventListener('open', (event) => {
      socket.addEventListener('message', (e) => {
        if (e.data !== "pong") {
          var parsed = JSON.parse(e.data), idx = store.enrolled.findIndex(elem => {
            return elem.user_name === parsed.user_name || elem.email === parsed.email;
          });
          if (idx >= 0) {
            dispatch({ type: "REGISTERED_ZOOM_ATTENDEE", idx, payload: parsed });
          } else {
            dispatch({ type: "UNREGISTERED_ZOOM_ATTENDEE", payload: parsed });
          }
        }
      });
    });
    // 15 sec ping-pong to keep connection alive
    setInterval(() => { socket.send('ping'); }, 15000);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Stack direction="row" spacing={1} >
        <AttendanceView students={store.enrolled} cohort={48} dispatch={dispatch} />
        <AttendanceView students={store.enrolled} cohort={49} dispatch={dispatch} />
      </Stack>
    </ThemeProvider>
  );
}

export default App;