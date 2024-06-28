import * as React from 'react';
import TextField from '@mui/material/TextField';
import { Box, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { buildingTypes, malitaryBuildings, soldiersCatData } from '../EventData/buildings';


function CreateBuildingForm(eventBody, setEventBody, buildings, setBuildings) {
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
  
function UpgradeBuildinForm(eventBody, seteventBody, buildings, setBuildings) {
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

function TrainTroopsForm(eventBody, seteventBody, buildings, setBuildings) {
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

const EventForms = {
    "CreateBuilding": CreateBuildingForm,
    "UpdateBuilding": UpgradeBuildinForm,
    "TrainTroops": TrainTroopsForm,
  } 

export default EventForms