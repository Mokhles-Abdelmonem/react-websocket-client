import * as React from 'react';
import TextField from '@mui/material/TextField';
import { Box, DialogContentText, FormControl, InputLabel, MenuItem, Select, Slider } from '@mui/material';
import { buildingTypes, malitaryBuildings, soldiersCatData, packages, packages_percentage } from '../EventData/buildings';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

function CreateBuildingForm(props) {
  const { eventBody } = props
  const [building, setBuilding] = React.useState('hq');


  const handleBuildingChange = (event) => {
    console.log(event.target.value)
    eventBody.kwargs.building_type = event.target.value
    setBuilding(event.target.value);
  };

  const handlePosChange = (event) => {
    const { id, value } = event.target;
    eventBody.body.world_position[id] = parseInt(value, 10);
  };

  React.useEffect(() => {
    eventBody.kwargs.building_type = "hq"
  }, [])

  return (
    <>
        <FormControl variant="filled" sx={{ m: 1, minWidth: 220 }}>
          <InputLabel id="building-create-select-filled-label">Building</InputLabel>
          <Select
            labelId="building-create-select-filled-label"
            id="building-create-select-filled"
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


function UpgradeBuildinForm(props) {
  const { eventBody, buildings } = props
  const [building, setBuilding] = React.useState(buildings[0]);

  const handleBuildingChange = (event) => {
    eventBody.kwargs.building_type = event.target.value
    setBuilding(event.target.value);
  };

  const handleKeyChange = (event) => {
    const { id, value } = event.target;
    eventBody.kwargs[id] = parseInt(value, 10);
  };

  React.useEffect(() => {
    setBuilding(buildings[0])
    eventBody.kwargs.building_type = buildings[0]
  }, [buildings])

    return(
      <>
        <FormControl variant="filled" sx={{ m: 1, minWidth: 220 }}>
          <InputLabel id="building-update-select-filled-label">Building</InputLabel>
          <Select
            labelId="building-update-select-filled-label"
            id="building-update-select-filled"
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
    eventBody.kwargs.building_type = building
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
    setBuilding(buildings[0])
    eventBody.kwargs.building_type = buildings[0]
  }, [buildings])

    return(
      <>
        <FormControl variant="filled" sx={{ m: 1, minWidth: 220 }}>
          <InputLabel id="train-troops-select-filled-label">Building</InputLabel>
          <Select
            labelId="train-troops-select-filled-label"
            id="train-troops-select-filled"
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


function AttackPlayerForm(props) {
  const { eventBody, player, playersAll } = props
  const [troops, setTroops] = React.useState([]);
  const [targerPlayer, setTargerPlayer] = React.useState({});
  const [checkedData, setCheckedData] = React.useState({});
  
  Object.keys(checkedData).map((key) => {
    if (!checkedData[key]) {
      delete eventBody.kwargs.troops[key]
    }else{
      eventBody.kwargs.troops[key] = 1
    }
    
  })

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
    if (playersAll !== undefined && playersAll.length > 0 ){
      console.log("playersAll", playersAll)
      setTargerPlayer(playersAll[0])
    }    

  }, [playersAll, player])

  return (
    <>
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
    </>
  );
}


function SpyForm(props) {
  const { eventBody, player, playersAll } = props


  const handlePlayerChange = (event) => {
    let other_id = event.target.value
    const Player =playersAll.filter(player => player.obj_id === other_id)[0];
    eventBody.kwargs.other_id = other_id
    eventBody.kwargs.target_pos = [Player.player_data.position.x, Player.player_data.position.y]
    
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


function ScoutForm(props) {
  const { eventBody } = props


  const handlePosChange = (event) => {
    const { id, value } = event.target;
    let index = 0
    if (id === "y") {
      index = 1
    }
    eventBody.kwargs.target_pos[index] = parseInt(value, 10);
  };


  return (
    <>
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


function AttackAdversariesForm(props) {
  const { eventBody, player } = props
  const [troops, setTroops] = React.useState([]);
  const [checkedData, setCheckedData] = React.useState({});
  
  Object.keys(checkedData).map((key) => {
    if (!checkedData[key]) {
      delete eventBody.kwargs.troops[key]
    }else{
      eventBody.kwargs.troops[key] = 1
    }
    
  })

  function MarginBar() {
    return (
      <Box
        sx={{
          height: 30,
        }}
      />
    );
  }

  const handlePosChange = (event) => {
    const { id, value } = event.target;
    let index = 0
    if (id === "y") {
      index = 1
    }
    eventBody.kwargs.target_pos[index] = parseInt(value, 10);
  };

  const handleCheckboxChange = (event) => {
    const { id, checked } = event.target;
    setCheckedData((prevState) => ({...prevState, [id]: checked, }));
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
  

  }, [player])

  return (
    <>
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
    </>
  );
}


function AccelerateForm(props) {
  const { eventBody, eventId } = props
  eventBody.kwargs.event_id = eventId
  const [acceleratePackage, setPackage] = React.useState(packages[4]);

  const handlePackageChange = (event) => {
    let acceleratePackage = event.target.value;
    eventBody.kwargs.package = acceleratePackage;
    setPackage(acceleratePackage);
  };


    return(
      <>
        <TextField
          disabled
          id="eventId"
          label="Event Id (auto generated)"
          defaultValue={eventId}
        />
        <FormControl variant="filled" sx={{ m: 1, minWidth: 220 }}>
          <InputLabel id="accelerate-event-select-filled-label">Packages</InputLabel>
          <Select
            labelId="accelerate-event-select-filled-label"
            id="accelerate-event-select-filled"
            value={acceleratePackage}
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


function DeleteEventForm(props) {
  const { eventBody, eventId } = props
  eventBody.kwargs.event_id = eventId


    return(
      <>
        <TextField
          disabled
          id="eventId"
          label="Event Id (auto generated)"
          defaultValue={eventId}
        />
      </>
    )
}


function CallBackForm(props) {
  const { eventBody, eventId } = props
  eventBody.kwargs.event_id = eventId

  const handlePosChange = (event) => {
    const { id, value } = event.target;
    let index = 0
    if (id === "y") {
      index = 1
    }
    eventBody.kwargs.target_pos[index] = parseInt(value, 10);
  };


    return(
      <>
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
          <TextField
          disabled
          id="eventId"
          label="Event Id (auto generated)"
          defaultValue={eventId}
        />
      </>
    )
}


function DispatchAccelerateForm(props) {
  const { eventBody, eventId } = props
  eventBody.kwargs.event_id = eventId
  const [acceleratePackage, setPackage] = React.useState(packages[4]);

  const handlePackageChange = (event) => {
    let acceleratePackage = event.target.value;
    eventBody.kwargs.package = acceleratePackage;
    setPackage(acceleratePackage);
  };


    return(
      <>
        <TextField
          disabled
          id="eventId"
          label="Event Id (auto generated)"
          defaultValue={eventId}
        />
        <FormControl variant="filled" sx={{ m: 1, minWidth: 220 }}>
          <InputLabel id="accelerate-event-select-filled-label">Packages</InputLabel>
          <Select
            labelId="accelerate-event-select-filled-label"
            id="accelerate-event-select-filled"
            value={acceleratePackage}
            onChange={handlePackageChange}
            label="packages"
          >
          {packages_percentage.map((value) => (
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



const BackgroundEventsForms = {
    "CreateBuilding": CreateBuildingForm,
    "UpdateBuilding": UpgradeBuildinForm,
    "TrainTroops": TrainTroopsForm,
    "AttackPlayer": AttackPlayerForm,
    "Spy": SpyForm,
    "Scout": ScoutForm,
    "AttackUltimates": AttackAdversariesForm,
    "AttackResourceTile": AttackAdversariesForm,
    "Accelerate": AccelerateForm,
    "DispatchAccelerate": DispatchAccelerateForm,
    "DeleteEvent": DeleteEventForm,
    "CallBack": CallBackForm,
  } 

export default BackgroundEventsForms;
