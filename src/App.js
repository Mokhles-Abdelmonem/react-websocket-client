import './App.css';
import React, { useEffect, useState } from 'react';
import './App.css';
import Login from './api/LoginUser';

import ResponsiveDrawer from './components/Drawer';


import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

let WS_URL = "";


WS_URL = "ws://localhost:8090";
WS_URL = "ws://134.119.216.225:8090";

const token = localStorage.getItem('token');
// const device_id = localStorage.getItem('device_id');
// if (device_id === "string") {
//   WS_URL = "ws://localhost:8060";
// }
const websocket = new WebSocket(WS_URL);

const handshakeMessage = 
{
  'token': token
}
websocket.onopen = (event) => {
  websocket.send(JSON.stringify(handshakeMessage));
};

websocket.onclose = function(e) {
  console.log("Connection closed from App", e);
};

function App() {
  const [messages, setMessages] = useState([]);
  const [buildingId, setBuildingId] = useState("1703072398898613737");
  const [eventId, setEventId] = useState("building_complete@create@1702471101051810368@1702551294.864431");

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
          if (json.param.building_id !== "None") 
          setBuildingId(json.param.building_id)
        }
        if (json.param.event_id !== undefined && json.param.event_id !== null){
          setEventId(json.param.event_id)
          console.log("json.param.event_id  >>>> ", json.param.event_id)
        }
      }
    } catch (err) {
      console.log(err);
    }
  };


  useEffect(() => {
    Login()
  }, []);
 
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <main>This app is using the dark mode</main>
      <ResponsiveDrawer
        websocket={websocket}
        buildingId={buildingId}
        eventId={eventId}
        messages={messages}
      />
    </ThemeProvider>

  );
}

export default App;
