import './App.css';
import React, { useEffect, useState } from 'react';
import './App.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import SessionModal from './components/modals/Session';
import PersistentDrawerLeft from './components/Drawer';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

let WS_URL = "";


WS_URL = "ws://134.119.216.225:8090";
WS_URL = "ws://localhost:8090";

const websocket = new WebSocket(WS_URL);


function App() {
  const [messages, setMessages] = useState([]);
  const [messagesSent, setmessagesSent] = useState([]);
  const [errorMessages, seterrorMessages] = useState([]);
  const [Key, setBuildingKey] = useState(1);
  const [eventId, setEventId] = useState("");
  const [buildings, setBuildings] = React.useState([]);
  const [player, setPlayer] = React.useState({});
  const [playersAll, setplayersAll] = React.useState([]);

  websocket.onmessage = function (event) {
    const json = JSON.parse(event.data)
    console.log("comming event", json);
    try {
      if ("error" in json) {
        setMessages((prevMessages) => [json.error, ...prevMessages]);
        seterrorMessages((prevMessages) => [json.error, ...prevMessages])
      }
      else if ("body" in json){
        setMessages((prevMessages) => [json.body.message, ...prevMessages]);
      }else{
        setMessages((prevMessages) => [json, ...prevMessages]);
        if (json.type === "error" ){
          seterrorMessages((prevMessages) => [json, ...prevMessages])
        }
        if (json.param.event_name === 'create_building'){
          setBuildingKey(json.param.key)
        }
        if (json.param.event_id !== undefined && json.param.event_id !== null){
          setEventId(json.param.event_id)
        }
        if (json.param.event_name === 'user_retrieve'){
          setBuildings(Object.keys(json.param.user.city_data))
          setPlayer(json.param.user)
        } else if (json.param.event_name === 'user_list') {
          const players = json.param.players
          
          const keysToKeep = ['obj_id', 'player_data'];
          
          const filteredPlayers = players.filter(player => player.obj_id > json.param.player_id).map(player => {
            return keysToKeep.reduce((obj, key) => {
              if (player[key] !== undefined) {
                obj[key] = player[key];
              }
              return obj;
            }, {});
          });
          setplayersAll(filteredPlayers)
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
        setmessagesSent={setmessagesSent}
      />
      <PersistentDrawerLeft
        websocket={websocket}
        Key={Key}
        eventId={eventId}
        messages={messages}
        messagesSent={messagesSent}
        setmessagesSent={setmessagesSent}
        errorMessages={errorMessages}
        buildings={buildings} 
        setBuildings={setBuildings}
        player={player}
        playersAll={playersAll}
      />
    </ThemeProvider>

  );
}

export default App;
