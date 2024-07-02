import * as React from 'react';
import TextField from '@mui/material/TextField';
import { Box, DialogContentText, FormControl, InputLabel, MenuItem, Select, Slider } from '@mui/material';
import { buildingTypes, malitaryBuildings, soldiersCatData, packages } from '../EventData/buildings';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

function CreateBuildingForm(props) {
  const { eventBody } = props
  const [building, setBuilding] = React.useState('hq');


  const handleBuildingChange = (event) => {
    console.log(event.target.value)
    eventBody.kwargs["building_type"] = event.target.value
    setBuilding(event.target.value);
  };

  const handlePosChange = (event) => {
    const { id, value } = event.target;
    eventBody.body.world_position[id] = parseInt(value, 10);
  };

  React.useEffect(() => {
    eventBody.kwargs["building_type"] = "hq"
  }, [])

  return (
    <>
        <FormControl variant="filled" sx={{ m: 1, minWidth: 220 }}>
          <InputLabel id="demo-simple-select-filled-label">Building</InputLabel>
          <Select
            labelId="demo-simple-select-filled-label"
            id="demo-simple-select-filled"
            value={building}
            onChange={handleBuildingChange}
            label="building"
          >
          {buildingTypes.map((value) => (
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
          id="x"
          label="x"
          type="number"
          defaultValue="1"
          onChange={handlePosChange}
        />
        <TextField
          required
          id="y"
          label="y"
          type="number"
          defaultValue="1"
          onChange={handlePosChange}
        />
        <TextField
          required
          id="z"
          label="z"
          type="number"
          defaultValue="1"
          onChange={handlePosChange}
        />
    </>
  );
}
  
function UpgradeBuildinForm(props) {
  const { eventBody, buildings } = props
  const [building, setBuilding] = React.useState(buildings[0]);

  const handleBuildingChange = (event) => {
    console.log(event.target.value)
    eventBody.kwargs["building_type"] = event.target.value
    setBuilding(event.target.value);
  };

  const handleKeyChange = (event) => {
    const { id, value } = event.target;
    eventBody.kwargs[id] = parseInt(value, 10);
  };

  React.useEffect(() => {
    setBuilding(buildings[0])
    eventBody.kwargs["building_type"] = buildings[0]
  }, [buildings])

    return(
      <>
        <FormControl variant="filled" sx={{ m: 1, minWidth: 220 }}>
          <InputLabel id="demo-simple-select-filled-label">Building</InputLabel>
          <Select
            labelId="demo-simple-select-filled-label"
            id="demo-simple-select-filled"
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
      </>
    )
}

function TrainTroopsForm(props) {
  const { eventBody, buildings } = props

  const [building, setBuilding] = React.useState(buildings[0]);
  const ownedBuilding = malitaryBuildings.filter(element => buildings.includes(element));
  const [soldiersFiltered, setsoldiersFiltered] = React.useState([]);
  const [soldierDisabled, setSoldierDisabled] = React.useState(true);
  
  const handleBuildingChange = (event) => {
    let building = event.target.value
    eventBody.kwargs["building_type"] = building
    setBuilding(building);
    setsoldiersFiltered(soldiersCatData[building])
    setSoldierDisabled(false)
  };

  const handleSoldierNumChange = (event) => {
    const { id, value } = event.target;
    eventBody.kwargs[id] = value;
  };
  
  const handleSoldierTypeChange = (event) => {
    const { name, value } = event.target;
    eventBody.kwargs[name] = value;
  };

  React.useEffect(() => {
    setBuilding()
    eventBody.kwargs["building_type"] = buildings[0]
  }, [buildings])

    return(
      <>
        <FormControl variant="filled" sx={{ m: 1, minWidth: 220 }}>
          <InputLabel id="demo-simple-select-filled-label">Building</InputLabel>
          <Select
            labelId="demo-simple-select-filled-label"
            id="demo-simple-select-filled"
            value={building}
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
          id="soldier_number"
          label="soldier_number"
          type="number"
          defaultValue="5"
          onChange={handleSoldierNumChange}
        />
        <FormControl variant="filled" sx={{ m: 1, minWidth: 220 }} disabled={soldierDisabled}>
          <InputLabel id="soldier_type"> Soldier </InputLabel>
          <Select
            labelId="demo-simple-select-filled-label"
            name="soldier_type"
            onChange={handleSoldierTypeChange}
            label="soldier_type"
          >
          {soldiersFiltered.map((value) => (
            
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

function AccelerateForm(props) {
  const { eventBody, eventId } = props
  eventBody.kwargs["event_id"] = eventId
  eventBody.kwargs["package"] = packages[4]

  const handlePackageChange = (event) => {
    console.log(event.target.value)
    eventBody.kwargs["package"] = event.target.value
  };


    return(
      <>
        <TextField
          disabled
          id="eventId"
          label={eventId}
          defaultValue={eventId}
        />
        <FormControl variant="filled" sx={{ m: 1, minWidth: 220 }}>
          <InputLabel id="demo-simple-select-filled-label">Packages</InputLabel>
          <Select
            labelId="demo-simple-select-filled-label"
            id="demo-simple-select-filled"
            value={packages[4]}
            onChange={handlePackageChange}
            label="packages"
          >
          {packages.map((value) => (
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

function AttackPlayerForm(props) {
  const { eventBody, player, playersAll } = props
  const [troops, setTroops] = React.useState([]);
  const [targerPlayerId, setTargerPlayerId] = React.useState("");
  const [targerPlayer, setTargerPlayer] = React.useState({});
  const [checkedData, setCheckedData] = React.useState({});
  
  Object.keys(checkedData).map((key) => {
    if (!checkedData[key]) {
      delete eventBody.kwargs.troops[key]
    }else{
      eventBody.kwargs.troops[key] = 1
    }
    
  })

  console.log("rendered")
  function MarginBar() {
    return (
      <Box
        sx={{
          height: 30,
        }}
      />
    );
  }

  const handleCheckboxChange = (event) => {
    const { id, checked } = event.target;
    setCheckedData((prevState) => ({...prevState, [id]: checked, }));
  };


  const handlePlayerChange = (event) => {
    let other_id = event.target.value
    const Player =playersAll.filter(player => player.obj_id === other_id)[0];
    eventBody.kwargs.other_id = other_id
    eventBody.kwargs.target_pos = [Player.player_data.position.x, Player.player_data.position.y]
    
    setTargerPlayerId(other_id);
    setTargerPlayer(Player);
    
  };

  const handleSliderChange = (event) => {
    const { name, value } = event.target;
    eventBody.kwargs.troops[name] = parseInt(value, 10);
    setCheckedData((prevState) => ({...prevState, [name]: true, }));

  };


  function valuetext(value) {
    return `${value}°C`;
  }

  React.useEffect(() => {
    if (player.troops !== undefined){
      let troops = Object.keys(player.troops)
      setTroops(troops)
      troops.map((soldier)=> {
        setCheckedData((prevState) => ({...prevState, [soldier]: false, }));
      })
    }
    if (playersAll.length > 0 ){
      setTargerPlayerId(playersAll[0].obj_id)
      setTargerPlayer(playersAll[0])
    }    

  }, [player, playersAll])

  return (
    <>
        <FormGroup sx={{ m: 1, minWidth: 440 }}>
        <FormControl variant="filled" sx={{ m: 1, minWidth: 220 }}>
          <InputLabel id="target_player"> Target Player </InputLabel>
            <Select
              labelId="demo-simple-select-filled-label"
              name="target_player"
              onChange={handlePlayerChange}
              label="target_player"
              value={targerPlayer.username}
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

          <MarginBar/>
          <DialogContentText>
            Troops
          </DialogContentText>
          {troops.map((value) => (
            <>
              <FormControlLabel control={
                <Checkbox
                onChange={handleCheckboxChange}
                id={value}
                checked={checkedData[value]}
                />
              } label={value} />
              <Slider
                aria-label="SoldierNumber"
                defaultValue={1}
                getAriaValueText={valuetext}
                valueLabelDisplay="auto"
                shiftStep={1}
                step={1}
                marks
                min={1}
                max={player.troops[value].owned}
                name={value}
                onChange={handleSliderChange}
              />
            </>
          ))}
        </FormGroup>
    </>
  );
}
  

const EventForms = {
    "CreateBuilding": CreateBuildingForm,
    "UpdateBuilding": UpgradeBuildinForm,
    "TrainTroops": TrainTroopsForm,
    "AttackPlayer": AttackPlayerForm,
    "Accelerate": AccelerateForm,
  } 

export default EventForms