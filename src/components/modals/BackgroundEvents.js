import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import EventForms from './BackgroundEventsForms'


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};


export default function BackgroundModal({websocket, text, body}) {
  const [open, setOpen] = React.useState(false);
  const [eventBody, seteventBody] = React.useState(body);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleClick = () => {
    console.log("send event", eventBody);
    websocket.send(JSON.stringify(eventBody));
    setOpen(false);
  };

  function defaultForm(eventBody, seteventBody) {
    return(
      <>
      </>
    )
  }

  function GetModalForm() {
    text.replace(/ /g, '');
    let Form = EventForms[text] ?? defaultForm;
    return(
      <>
        <Box
          component="form"
          sx={{
            '& .MuiTextField-root': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete="off"
        >
        {Form(eventBody, seteventBody)}

        </Box>
        <Button variant="contained" color="success" onClick={handleClick}>
              Send
        </Button> 
      </>
    )
  }
  

  return (
    <>
      <ListItemButton 
      onClick={handleOpen}
      >
        <ListItemIcon>
          <MenuIcon />
        </ListItemIcon>
        <ListItemText primary={text} />
      </ListItemButton>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: 400 }}>
            <h2 id="parent-modal-title"> { text } </h2>
            <p id="parent-modal-description">
                send event
            </p>
            {GetModalForm()}
        </Box>
      </Modal>
    </>
  );
}
