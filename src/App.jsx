import React, {useState, useEffect} from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AttendanceView from './components/AttendanceView.jsx'
import studentRoster from '../lib/hrlax4849'

const App = () => {

  const [zoomWebHooks, setZoomWebHooks] = useState([])
  const [students, setStudents] = useState(studentRoster)
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
        paper: '#24344d',
      },
    },
  });


  useEffect( () => {
    // if served from secure connection, create secure websocket
    var url = window.location.href.replace('https', 'wss').replace('http', 'ws');
    const socket = new WebSocket(url);
    socket.addEventListener('open', (event) => {
      socket.addEventListener('message', (e)=> {
        if(e.data !== "pong") {
          var parsed = JSON.parse(e.data)
          // copy students array
          var tempStudents = students.map(student => {
            if(student.user_name === parsed.user_name || student.email === parsed.email) {
              student.present = true;
              student.date_time = parsed.date_time;
            } return student;
          });
          // iterate through students comparing user_name or email properties
            // if found, add present property and set to true. add date_time property
              // then setStudents to update new mutated array.
            // if not found add registered
          setZoomWebHooks(prev =>  [...prev, parsed])
        }
      })
    })
    setInterval(() => {socket.send('ping')}, 10000)
  }, [])

  return (
    <ThemeProvider theme={theme}>
      {/* {zoomWebHooks.map(item => <div>{item.user_name}, {item.email}</div>)} */}
      <AttendanceView students={students} zoomHooks={zoomWebHooks} />
   </ThemeProvider>
  )
}

export default App;