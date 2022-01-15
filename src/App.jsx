import React, {useState, useEffect} from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material'

const App = () => {
  const theme = createTheme();
  const [zoomWebHooks, setZoomWebHooks] = useState([])
  useEffect( () => {
    const socket = new WebSocket('ws://127.0.0.1:3000');
    socket.addEventListener('open', (event) => {
      socket.addEventListener('message', (e)=> {
        setZoomWebHooks(prev =>  [...prev, JSON.parse(e.data)])
      })
    })
  }, [])
  var zoomWebHooksElems = [];

  return (
    <>
    <CssBaseline />
    <ThemeProvider theme={theme} >
      {/* <SpeedDial /> */}
      {zoomWebHooks.map(item => <div>{item.user_name}</div>)}
      {/* <AttendanceView /> */}
    </ThemeProvider>
   </>
  )
}

export default App;