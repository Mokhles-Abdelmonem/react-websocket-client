import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';

function CreateBuildinForm({eventBody, seteventBody}) {
  const handleTextFieldChange = (event) => {
    setDeviceId(event.target.value);
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
  
function UpgradeBuildinForm({eventBody, seteventBody}) {
    const handleTextFieldChange = (event) => {
      setDeviceId(event.target.value);
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
    "CreateBuilding": CreateBuildinForm,
    "UpdateBuilding": UpgradeBuildinForm,
  } 

export default EventForms