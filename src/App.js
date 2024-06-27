import './App.css';
import React, { useEffect, useState } from 'react';
import './App.css';
import ResponsiveDrawer from './components/Drawer';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import SessionModal from './components/modals/Session';
import PersistentDrawerLeft from './components/Drawer2';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

let WS_URL = "";


WS_URL = "ws://localhost:8090";
WS_URL = "ws://134.119.216.225:8090";

const websocket = new WebSocket(WS_URL);


function App() {
  const [messages, setMessages] = useState([]);
  const [Key, setBuildingKey] = useState(1);
  const [eventId, setEventId] = useState("a1f09ea2-1937-48f9-b45e-a9b516635a79");

  websocket.onmessage = function (event) {
    const json = JSON.parse(event.data)
    console.log("comming event", json);
    try {
      if ("error" in json) {
        setMessages((prevMessages) => [json.error, ...prevMessages]);
      }
      else if ("body" in json){
        setMessages((prevMessages) => [json.body.message, ...prevMessages]);
      }else{
        setMessages((prevMessages) => [json, ...prevMessages]);
        if (json.param.event_name === 'create_building'){
          setBuildingKey(json.param.key)
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
      <SessionModal
        websocket={websocket}
      />
      <PersistentDrawerLeft
        websocket={websocket}
        Key={Key}
        eventId={eventId}
        messages={messages}
      />
    </ThemeProvider>

  );
}

export default App;
