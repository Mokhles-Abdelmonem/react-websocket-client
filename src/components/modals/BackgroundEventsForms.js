import * as React from 'react';
import TextField from '@mui/material/TextField';
import { Box, FormControl, InputLabel, MenuItem, Select } from '@mui/material';

let buildingTypes = [
  "farm", "hq", "medical_camp", "lumber_mill", "constructor_builder", "house", "quarry", "ore_refinery",
  "power_station", "wall", "laboratory", "trading_post", "guild_hall", "bank", "prison", "warehouse",
  "workshop", "longshot_division", "barracks", "aero_command", "artillery_garage",
  "garrisons_bunker", "alchemy", "healers_hedge", "watch_tower"
]


function CreateBuildingForm(eventBody, setEventBody) {
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
  
function UpgradeBuildinForm({eventBody, seteventBody}) {
    const handleTextFieldChange = (event) => {
      console.log(event.target.value);
    };
    return(
      <>
        <TextField
          required
          id="outlined-required"
          label="Device id"
          defaultValue="123"
          onChange={handleTextFieldChange}
        />
      </>
    )
  }

const EventForms = {
    "CreateBuilding": CreateBuildingForm,
    "UpdateBuilding": UpgradeBuildinForm,
  } 

export default EventForms