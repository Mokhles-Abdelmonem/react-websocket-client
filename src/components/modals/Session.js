import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';

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

export default function SessionModal({websocket}) {
  const [open, setOpen] = React.useState(true);
  const [deviceId, setDeviceId] = React.useState("123");

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleTextFieldChange = (event) => {
    setDeviceId(event.target.value);
  };
  const handleClick = () => {
    const handshakeMessage = {
        event: "session",
        method: "create",
        kwargs: {
            "device_id": "123"
        }
    }
    websocket.send(JSON.stringify(handshakeMessage));
    setOpen(false);
  };

  

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: 400 }}>
            <h2 id="parent-modal-title">Session</h2>
            <p id="parent-modal-description">
                connect to server
            </p>
            <Stack direction="row" spacing={2}>

            <TextField
                required
                id="outlined-required"
                label="Device id"
                defaultValue="123"
                value={deviceId}
                onChange={handleTextFieldChange}
            />
            <Button variant="contained" color="success" onClick={handleClick}>
                Connect
            </Button>
            </Stack>

        </Box>
      </Modal>
    </div>
  );
}
