import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import BackgroundEventsForms from '../modals/BackgroundEventsForms';
import EventForms from '../modals/SingleEventsForms';
import FormDialog from '../modals/TimeEventsDialoge';
import EventDataSimple from '../EventData/EventDataSimple.json'

export default function DrawerButton({
  text, body, websocket, color, buildings, setBuildings, eventId, player, playersAll, setmessagesSent
}) {
  const [open, setOpen] = React.useState(false);
  const FormsAll = { ...BackgroundEventsForms, ...EventForms }; 
  const cleanText = text.replace(/ /g, '');
  const Form = FormsAll[cleanText] || null;

  if (["Accelerate", "DeleteEvent", "CallBack", "DispatchAccelerate"].includes(cleanText)) {
    color = "#8B0000";
  }
  
  if (cleanText in EventDataSimple) {
    color = "#00a152";
  }
  

  const handleClickOpen = () => {
    if (Form === null){
      let message = JSON.stringify(body)
      setmessagesSent((prevMessages) => [body, ...prevMessages])
      websocket.send(message);
    }else{
      setOpen(true);
    }
  };

  return (
    <>
      <ListItemButton 
        onClick={handleClickOpen}
        sx={{ bgcolor: color }}
      >
        <ListItemIcon>
          <MenuIcon />
        </ListItemIcon>
        <ListItemText primary={text} />
      </ListItemButton>
      <ListItem 
        disablePadding
      >
        {Form ? (
          <FormDialog
            websocket={websocket}
            text={text}
            body={body}
            open={open}
            setOpen={setOpen}
            Form={Form}
            buildings={buildings} 
            setBuildings={setBuildings}
            eventId={eventId}
            player={player}
            playersAll={playersAll}
            setmessagesSent={setmessagesSent}
          />
        ) : (null)
      }
      </ListItem>
    </>
  );
}
