import * as React from 'react';
import TextField from '@mui/material/TextField';
import { Box, DialogContentText, FormControl, InputLabel, MenuItem, Select, Slider } from '@mui/material';
import { buildingTypes, malitaryBuildings, productionBuildings, soldiersCatData, packages } from '../EventData/buildings';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

function UpdateBuildingPosForm(props) {
  const { eventBody, buildings } = props
  const [building, setBuilding] = React.useState(buildings[0]);

  const handleKeyChange = (event) => {
    const { id, value } = event.target;
    eventBody.kwargs[id] = parseInt(value, 10);
  };

  const handleBuildingChange = (event) => {
    eventBody.kwargs.building_type = event.target.value
    setBuilding(event.target.value);
  };

  const handlePosChange = (event) => {
    const { id, value } = event.target;
    eventBody.body[id] = parseInt(value, 10);
  };

  React.useEffect(() => {
    setBuilding(buildings[0])
    eventBody.kwargs.building_type = buildings[0]
  }, [buildings])


  return (
    <>
        <FormControl variant="filled" sx={{ m: 1, minWidth: 220 }}>
          <InputLabel id="building-create-select-filled-label">Building 2</InputLabel>
          <Select
            labelId="building-create-select-filled-label"
            id="building-create-select-filled"
            value={building}
            onChange={handleBuildingChange}
            label="building"
          >
          {buildings.map((value) => (
            <MenuItem
              key={value}
              value={value}
            >
              {value}
            </MenuItem>
          ))}
          </Select>
        </FormControl>
        <TextField
          id="key"
          label="key"
          type="number"
          defaultValue="1"
          onChange={handleKeyChange}
        />
        <TextField
          id="x"
          label="x"
          type="number"
          defaultValue="0"
          onChange={handlePosChange}
        />
        <TextField
          required
          id="y"
          label="y"
          type="number"
          defaultValue="0"
          onChange={handlePosChange}
        />
        <TextField
          required
          id="z"
          label="z"
          type="number"
          defaultValue="0"
          onChange={handlePosChange}
        />
    </>
  );
}


function CollectForm(props) {
  const { eventBody, buildings } = props
  const ownedBuilding = productionBuildings.filter(element => buildings.includes(element));
  
  const handleBuildingChange = (event) => {
    let building = event.target.value
    eventBody.kwargs.building_type = building
  };
  
  const handleKeyChange = (event) => {
    const { id, value } = event.target;
    eventBody.kwargs[id] = parseInt(value, 10);
  };

    return(
      <>
        <FormControl variant="filled" sx={{ m: 1, minWidth: 220 }}>
          <InputLabel id="train-troops-select-filled-label">Building</InputLabel>
          <Select
            labelId="train-troops-select-filled-label"
            id="train-troops-select-filled"
            onChange={handleBuildingChange}
            label="building"
          >
          {ownedBuilding.map((value) => (
            
            <MenuItem
              key={value}
              value={value}
            >
              {value}
            </MenuItem>
          ))}
          </Select>
        </FormControl>
        <TextField
          id="key"
          label="key"
          type="number"
          defaultValue="1"
          onChange={handleKeyChange}
        />

      </>
    )
}


function DeleteBuildingForm(props) {
  const { eventBody, buildings } = props
  const ownedBuilding = productionBuildings.filter(element => buildings.includes(element));
  const [building, setBuilding] = React.useState(buildings[0]);

  const handleBuildingChange = (event) => {
    let building = event.target.value
    eventBody.kwargs.building_type = building
  };
  
  const handleKeyChange = (event) => {
    const { id, value } = event.target;
    eventBody.kwargs[id] = parseInt(value, 10);
  };

  React.useEffect(() => {
    setBuilding(ownedBuilding[0])
    eventBody.kwargs.building_type = ownedBuilding[0]
  }, [ownedBuilding])


    return(
      <>
        <FormControl variant="filled" sx={{ m: 1, minWidth: 220 }}>
          <InputLabel id="train-troops-select-filled-label">Building</InputLabel>
          <Select
            labelId="train-troops-select-filled-label"
            id="train-troops-select-filled"
            onChange={handleBuildingChange}
            label="building"
            value={building}
          >
          {ownedBuilding.map((value) => (
            
            <MenuItem
              key={value}
              value={value}
            >
              {value}
            </MenuItem>
          ))}
          </Select>
        </FormControl>
        <TextField
          id="key"
          label="key"
          type="number"
          defaultValue="1"
          onChange={handleKeyChange}
        />

      </>
    )
}


function UpdateUsernameForm(props) {
  const { eventBody } = props
  
  const handleKeyChange = (event) => {
    const { id, value } = event.target;
    eventBody.kwargs[id] = value;
  };



    return(
      <>
        <TextField
          id="username"
          label="username"
          onChange={handleKeyChange}
        />
      </>
    )
}


function SearchPlayersForm(props) {
  const { eventBody } = props


  const handlePosChange = (event) => {
    const { id, value } = event.target;
    let index = 0
    if (id === "y") {
      index = 1
    }
    eventBody.kwargs.center_point[index] = parseInt(value, 10);
  };


  return (
    <>
        <br/>
        <DialogContentText>
          Center Point Data
        </DialogContentText>
        <br/>
        <TextField
          id="x"
          label="Pos X"
          type="number"
          defaultValue="0"
          onChange={handlePosChange}
        />
        <TextField
          required
          id="y"
          label="Pos Y"
          type="number"
          defaultValue="0"
          onChange={handlePosChange}
        />
    </>
  );
}


function GetCityDataForm(props) {
  const { eventBody, playersAll } = props

  const handlePlayerChange = (event) => {
    let player_id = event.target.value
    eventBody.kwargs.player_id = player_id
    
  };

  return (
    <>
        <FormControl variant="filled" sx={{ m: 1, minWidth: 220 }}>
          <InputLabel id="target_player"> Target Player </InputLabel>
            <Select
              labelId="demo-simple-select-filled-label"
              name="target_player"
              onChange={handlePlayerChange}
              label="target_player"
            >
            {playersAll.map((player) => (
              
              <MenuItem
                key={player.obj_id}
                value={player.obj_id}
              >
                {player.player_data.username} 
              </MenuItem>
            ))}
          </Select>
        </FormControl>
    </>
  );
}


function CreateAlliesForm(props) {
  const { eventBody } = props
  
  const handleKeyChange = (event) => {
    const { id, value } = event.target;
    eventBody.body[id] = value;
  };



    return(
      <>
        <TextField
          id="name"
          label="Allies Name"
          onChange={handleKeyChange}
        />
        <TextField
          id="symbol"
          label="Allies Symbol"
          onChange={handleKeyChange}
        />
      </>
    )
}

function JoinAlliesForm(props) {
  const { eventBody } = props
  
  const handleKeyChange = (event) => {
    const { id, value } = event.target;
    eventBody.kwargs[id] = value;
  };

    return(
      <>
        <TextField
          id="allies_id"
          label="Allies Id"
          onChange={handleKeyChange}
        />
      </>
    )
}


function SuperMigrateForm(props) {
  const { eventBody } = props

  const handlePosChange = (event) => {
    const { id, value } = event.target;
    eventBody.body.position[id] = parseInt(value, 10);
  };



  return (
    <>
        <TextField
          id="x"
          label="x"
          type="number"
          defaultValue="0"
          onChange={handlePosChange}
        />
        <TextField
          required
          id="y"
          label="y"
          type="number"
          defaultValue="0"
          onChange={handlePosChange}
        />
        <TextField
          required
          id="z"
          label="z"
          type="number"
          defaultValue="0"
          onChange={handlePosChange}
        />
    </>
  );
}


function ChatForm(props) {
  const { eventBody, playersAll } = props
  const playerslist = playersAll.map(player => player.obj_id);
  const consumers = ["kingdom", "allies"].concat(playerslist)

  const handleConsumerChange = (event) => {
    let consumer = event.target.value
    eventBody.kwargs.consumer = consumer
    
  };

  const handleMessageChange = (event) => {
    const { id, value } = event.target;
    eventBody.body[id] = value;
  };



    return(
      <>
        <FormControl variant="filled" sx={{ m: 1, minWidth: 220 }}>
          <InputLabel id="consumer-label"> Consumer </InputLabel>
            <Select
              labelId="demo-simple-select-filled-label"
              name="consumer"
              onChange={handleConsumerChange}
              label="consumer"
            >
            {consumers.map((value) => (
              
              <MenuItem
                key={value}
                value={value}
              >
                {value} 
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <TextField
          id="message"
          label="Message"
          multiline
          onChange={handleMessageChange}
        />
      </>
    )
}


function ChatListForm(props) {
  const { eventBody, playersAll } = props
  const playerslist = playersAll.map(player => player.obj_id);
  const consumers = ["kingdom", "alliance"].concat(playerslist)

  const handleConsumerChange = (event) => {
    let consumer = event.target.value
    eventBody.kwargs.consumer = consumer
    
  };

    return(
      <>
        <FormControl variant="filled" sx={{ m: 1, minWidth: 220 }}>
          <InputLabel id="consumer-label"> Consumer </InputLabel>
            <Select
              labelId="demo-simple-select-filled-label"
              name="consumer"
              onChange={handleConsumerChange}
              label="consumer"
            >
            {consumers.map((value) => (
              
              <MenuItem
                key={value}
                value={value}
              >
                {value} 
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </>
    )
}


function GetMapObjects(props) {
  const { eventBody } = props


  const handlePosChange = (event) => {
    const { id, value } = event.target;
    let index = 0
    if (id === "y") {
      index = 1
    }
    eventBody.kwargs.center_point[index] = parseInt(value, 10);
  };


  return (
    <>
        <br/>
        <DialogContentText>
          Center Point Data
        </DialogContentText>
        <br/>
        <TextField
          id="x"
          label="Pos X"
          type="number"
          defaultValue="0"
          onChange={handlePosChange}
        />
        <TextField
          required
          id="y"
          label="Pos Y"
          type="number"
          defaultValue="0"
          onChange={handlePosChange}
        />
    </>
  );
}


const SingleEventsForms = {
    "UpdateBuildingPos": UpdateBuildingPosForm,
    "Collect": CollectForm,
    "DeleteBuilding": DeleteBuildingForm,
    "UpdateUsername": UpdateUsernameForm,
    "SearchPlayers": SearchPlayersForm,
    "GetCityData": GetCityDataForm,
    "CreateAllies": CreateAlliesForm,
    "JoinAllies": JoinAlliesForm,
    "SuperMigrate": SuperMigrateForm,
    "Chat": ChatForm,
    "ChatList": ChatListForm,
    "GetMapObjects": GetMapObjects,

  } 

export default SingleEventsForms