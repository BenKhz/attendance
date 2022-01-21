export default function (store ,dispatchFunc) {
  // if served from secure connection, create secure websocket
  var url = window.location.href.replace('https', 'wss').replace('http', 'ws');
  const socket = new WebSocket(url);
  socket.addEventListener('open', (event) => {
    socket.addEventListener('message', (e) => {
      if (e.data !== "pong") {
        var parsed = JSON.parse(e.data)
        var idx;
        var found = store.enrolled.find((student, ind) => {
          idx = ind;
          return student.email === parsed.email ||
                student.user_name === parsed.user_name ||
                student.id === parsed.id ||
                student.user_id === parsed.User_id})
        if (found) {
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