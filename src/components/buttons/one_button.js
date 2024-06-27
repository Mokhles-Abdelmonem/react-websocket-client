import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import EventForms from '../modals/BackgroundEventsForms';
import FormDialog from '../modals/TimeEventsDialoge';

export default function DrawerButton({ text, body, websocket, color }) {
  const [open, setOpen] = React.useState(false);

  const cleanText = text.replace(/ /g, '');
  const Form = EventForms[cleanText] || null;

  const handleClickOpen = () => {
    if (Form === null){
      websocket.send(JSON.stringify(body));
    }else{
      setOpen(true);
    }
  };

  return (
    <>
      <ListItemButton onClick={handleClickOpen}>
        <ListItemIcon>
          <MenuIcon />
        </ListItemIcon>
        <ListItemText primary={text} />
      </ListItemButton>
      <ListItem key={text} disablePadding sx={{ bgcolor: color }}>
        {Form ? (
          <FormDialog
            websocket={websocket}
            text={text}
            body={body}
            open={open}
            setOpen={setOpen}
            Form={Form}
          />
        ) : (null)
      }
      </ListItem>
    </>
  );
}
