import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CreateBuilding from './component_new/create_building';
import UpgradeBuilding from './component_new/upgrade_building';
import UpdateBuildingPosition from './component_new/update_build_position';
import CollectOneFarm from './component_new/collectOneFarms';
import DeleteBuiding from './component_new/deleteBuilding';
import Login from './api/LoginUser';
import Register from './api/Register';
import TrainTroop from './component_new/trainTroop';
import Attack from './component_new/attack_other';
import GetUsers from './component_new/getUsers';
import CreateAllies from './component_new/create_allies';
import getAllies from './component_new/getAllies';
import JoinAllies from './component_new/JoinAllies';
import migratePlayer from './component_new/migratePlayer';
import RandomMigrate from './component_new/RandomMigrate';
import LeaveAllies from './component_new/LeaveAllies';
import GeneralChat from './component_new/generalChat';
import AccelerateEvent from './component_new/AccelerateEvent';
import getDispatches from './component_new/getDespatches';
import getLiveEvents from './component_new/getLiveEvents';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';


let WS_URL = "";
WS_URL = "ws://134.119.216.225:8090";
WS_URL = "ws://localhost:8090";


const token = localStorage.getItem('token');
const websocket = new WebSocket(WS_URL);

const handshakeMessage = 
{
  'token': token,
}
websocket.onopen = (event) => {
  websocket.send(JSON.stringify(handshakeMessage));
};


function Buttons() {
  const [messages, setMessages] = useState([]);
  const [buildingId, setBuildingId] = useState("1694616533666878849");
  const [eventId, setEventId] = useState("123");

  const buildingType = "B1";
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
        setMessages((prevMessages) => [...prevMessages, json.message]);
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
  function CreateUser () {

    function handleClick () {
      Register().then((response) => {
        console.log("response : ", response);
      })
    }



    return (
      <button variant="outlined" size="small"
        onClick={handleClick}
      >
        Create User
      </button>
      )
  }  

  useEffect(() => {
    Login()
  }, []);

  return (
    <> 
    <Box sx={{ width: 1 }}>
      <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
        <Box gridColumn="span 3">
          <Paper elevation={3}  sx={{ height: '100vh' }}>
            {CreateBuilding(websocket, buildingType)}
            <br></br>
            {UpgradeBuilding(websocket, buildingType, buildingId)}
            <br></br>
            {UpdateBuildingPosition(websocket, buildingType, buildingId)}
            <br></br>
            {CollectOneFarm(websocket, buildingType, buildingId)}
            <br></br>
            {DeleteBuiding(websocket, buildingType, buildingId)}
            <br></br>
            {TrainTroop(websocket, buildingType, buildingId)}
            <br></br>
            {Attack(websocket)}
            <br></br>
            {GetUsers(websocket)}
            <br></br>
            {CreateAllies(websocket)}
            <br></br>
            {getAllies(websocket)}
            <br></br>
            {JoinAllies(websocket)}
            <br></br>
            {LeaveAllies(websocket)}
            <br></br>
            {migratePlayer(websocket)}
            <br></br>
            {RandomMigrate(websocket)}
            <br></br>
            {GeneralChat(websocket)}
            <br></br>
            {AccelerateEvent(websocket, eventId)}
            <br></br>
            {getDispatches(websocket)}
            <br></br>
            {getLiveEvents(websocket)}
            </Paper>
        </Box>
        <Box gridColumn="span 8">
          <Paper elevation={3} sx={{ height: '100vh' }}>
            {
            messages.map(
              (message, index) => (<h3 key={index}>{message}</h3>)
              )
            }
          </Paper>
        </Box>
      </Box>
    </Box>
    </>
  );
}

export default Buttons;
