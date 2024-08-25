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

let userInput = prompt("Change Server URL Default (" + WS_URL + "):");

// Display the input
if (userInput) {
  WS_URL = userInput;
}



const websocket = new WebSocket(WS_URL);

function blobToString(blob) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    
    reader.onloadend = () => {
      resolve(reader.result);
    };
    
    reader.onerror = reject;
    
    // Read the Blob as text
    reader.readAsText(blob);
  });
}

function blobToObject(blob) {
  return blobToString(blob)
    .then(text => {
      try {
        return JSON.parse(text);
      } catch (e) {
        throw new Error('Error parsing JSON from Blob');
      }
    });
}


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
    let json = "";

    // Function to process Blob and handle the data
    function processBlob(blob) {
      return blobToObject(blob)
        .then(objectData => {
          json = objectData; // Update json with the object data
          
          // Now handle json as required
          handleJsonData(json);
        })
        .catch(error => {
          console.error("Error converting Blob to object:", error);
        });
    }
  
    // Function to handle JSON data
    function handleJsonData(json) {
      try {

  
        if ("error" in json) {
          setMessages((prevMessages) => [json.error, ...prevMessages]);
          seterrorMessages((prevMessages) => [json.error, ...prevMessages]);
        } else if ("body" in json) {
          setMessages((prevMessages) => [json.body.message, ...prevMessages]);
        } else {
          setMessages((prevMessages) => [json, ...prevMessages]);
          if (json.type === "error") {
            seterrorMessages((prevMessages) => [json, ...prevMessages]);
          }
          if (json.param.event_name === 'create_building') {
            setBuildingKey(json.param.key);
          }
          if (json.param.event_id !== undefined && json.param.event_id !== null) {
            setEventId(json.param.event_id);
          }
          if (json.param.event_name === 'user_retrieve') {
            setBuildings(Object.keys(json.param.user.city_data));
            setPlayer(json.param.user);
          } else if (json.param.event_name === 'user_list') {
            const players = json.param.players;
            const keysToKeep = ['obj_id', 'player_data'];
  
            const filteredPlayers = players
              .filter(player => player.obj_id > json.param.player_id)
              .map(player => {
                return keysToKeep.reduce((obj, key) => {
                  if (player[key] !== undefined) {
                    obj[key] = player[key];
                  }
                  return obj;
                }, {});
              });
            setplayersAll(filteredPlayers);
          }
        }
      } catch (err) {
        console.log(err);
      }
    }
  
    try {
      if (event.data instanceof Blob) {
        // Handle Blob
        blobToString(event.data).then(stringData => {
          console.log("String Data:", stringData);
          processBlob(event.data); // Process the Blob and update json
        }).catch(error => {
          console.error("Error converting Blob to string:", error);
        });
      } else {
        // If event.data is not a Blob, process it directly
        json = JSON.parse(event.data);
        handleJsonData(json);
      }
    } catch (err) {
      console.log(err);
    }
  }


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
