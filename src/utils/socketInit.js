export default function (store ,dispatchFunc) {
  // if served from secure connection, create secure websocket
  var url = window.location.href.replace('https', 'wss').replace('http', 'ws');
  const socket = new WebSocket(url);
  socket.addEventListener('open', (event) => {
    socket.addEventListener('message', (e) => {
      if (e.data !== "pong") {
        var parsed = JSON.parse(e.data),
            idx = store.enrolled.findIndex(elem => {
          return elem.user_name === parsed.user_name || elem.email === parsed.email;
        });
        if (idx >= 0) {
          dispatchFunc({ type: "REGISTERED_ZOOM_ATTENDEE", idx, payload: parsed });
        } else {
          dispatchFunc({ type: "UNREGISTERED_ZOOM_ATTENDEE", payload: parsed });
        }
      }
    });
  });
  // 15 sec ping-pong to keep connection alive
  setInterval(() => { socket.send('ping'); }, 15000);
}