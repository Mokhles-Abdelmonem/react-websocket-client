import './App.css';
import React, { useEffect, useState } from 'react';
import './App.css';

import ResponsiveDrawer from './components/Drawer';


import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import GetDeviceID from './api/LoginUser';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

let WS_URL = "";


WS_URL = "ws://134.119.216.225:9090";
WS_URL = "ws://localhost:8090";

const websocket = new WebSocket(WS_URL);


let device_id = localStorage.getItem('device_id');

if (device_id === null | device_id === undefined | device_id === "null") {
  console.log("device_id is ", device_id);
  device_id = prompt("inter device_id")
  localStorage.setItem("device_id", device_id);

}


const handshakeMessage = {
  event: "session",
  method: "create",
  kwargs: {
    "device_id": device_id
  }
}
websocket.onopen = (event) => {
  websocket.send(JSON.stringify(handshakeMessage));
};

websocket.onclose = function(e) {
  console.log("Connection closed from App", e);
};

function App() {
  const [messages, setMessages] = useState([]);
  const [Key, setBuildingKey] = useState(1);
  const [eventId, setEventId] = useState("a1f09ea2-1937-48f9-b45e-a9b516635a79");

  websocket.onmessage = function (event) {
    const json = JSON.parse(event.data)
    console.log("comming event", json);
    try {
      if ("error" in json) {
        setMessages((prevMessages) => [...prevMessages, json.error]);
      }
      else if ("body" in json){
        setMessages((prevMessages) => [...prevMessages, json.body.message]);
      }else{
        setMessages((prevMessages) => [...prevMessages, json]);
        if (json.param.event_name === 'create_building'){
          setBuildingKey(json.param.Key)
        }
        if (json.param.event_id !== undefined && json.param.event_id !== null){
          setEventId(json.param.event_id)
          console.log("json.param.event_id: ", json.param.event_id)
        }
      }
    } catch (err) {
      console.log(err);
    }
  };


  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <main>This app is using the dark mode</main>
      <ResponsiveDrawer
        websocket={websocket}
        Key={Key}
        eventId={eventId}
        messages={messages}
      />
    </ThemeProvider>

  );
}

export default App;
