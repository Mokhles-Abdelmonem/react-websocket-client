import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Box } from '@mui/material';



export default function FormDialog({websocket, text, body, open, setOpen, Form,  buildings, setBuildings}) {
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
          {Form(eventBody, seteventBody, buildings, setBuildings)}
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
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries(formData.entries());
            console.log(formJson);
            console.log("event sent > ", eventBody)
            websocket.send(JSON.stringify(eventBody));
            handleClose();
          },
        }}
      >
        <DialogTitle> { text } </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Fill the required fields
          </DialogContentText>
          {GetModalForm()}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit">submit</Button>
        </DialogActions>
      </Dialog>
  );
}
