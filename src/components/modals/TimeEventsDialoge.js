import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Box } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';


export default function FormDialog({
  websocket, text, body, open, setOpen, Form,  buildings, setBuildings, eventId, player, playersAll, setmessagesSent
}) {
  const [eventBody, seteventBody] = React.useState(body);
  const handleClose = () => {
    setOpen(false);
  };


  function GetModalForm() {
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
          {Form({eventBody:eventBody, buildings:buildings, eventId:eventId, player:player, playersAll:playersAll})}
        </Box>
      </>
    )
  }

  return (
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: 'form',
          onSubmit: (event) => {
            event.preventDefault();
            let message = JSON.stringify(eventBody)
            setmessagesSent((prevMessages) => [eventBody, ...prevMessages])
            websocket.send(message);
            handleClose();
          },
        }}
      >
        <DialogTitle> { text } </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Required fields
          </DialogContentText>
          {GetModalForm()}
        </DialogContent>
        <DialogActions>
          <Button variant="contained" color="error" onClick={handleClose}>
            Cancel
          </Button>
          <Button type="submit" variant="contained" endIcon={<SendIcon />} color="success">
            Send
          </Button>
        </DialogActions>
      </Dialog>
  );
}
