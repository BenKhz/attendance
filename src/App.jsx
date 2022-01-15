import React, {useState, useEffect} from 'react';

const App = () => {

  const [zoomWebHooks, setZoomWebHooks] = useState([])
  useEffect( () => {
    // if served from secure connection, create secure websocket
    var url = window.location.href.replace('https', 'wss').replace('http', 'ws');git
    const socket = new WebSocket(url);
    socket.addEventListener('open', (event) => {
      socket.addEventListener('message', (e)=> {
        if(e.data !== "pong") {
          setZoomWebHooks(prev =>  [...prev, JSON.parse(e.data)])
        }
      })
    })
    setInterval(() => {socket.send('ping')}, 10000)
  }, [])

  return (
    <>
    {/* <CssBaseline /> */}
    {/* <ThemeProvider theme={theme} > */}
      {/* <SpeedDial /> */}
      <span> This is just for visibility</span>
      {zoomWebHooks.map(item => <div>{item.user_name}</div>)}
      {/* <AttendanceView /> */}
    {/* </ThemeProvider> */}
   </>
  )
}

export default App;