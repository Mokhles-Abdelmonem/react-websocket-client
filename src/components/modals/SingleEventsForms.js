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


const SingleEventsForms = {
    "UpdateBuildingPos": UpdateBuildingPosForm,
    "Collect": CollectForm,
    "DeleteBuilding": DeleteBuildingForm,

  } 

export default SingleEventsForms