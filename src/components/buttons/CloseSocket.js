import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import OneButton from './one_button';






export default function CloseSocket(websocket) {

  const body = {
    event: "connection",
    method: "close",
    kwargs: {},
    body:{}
  }
    
    return (
  
      
      <OneButton
      text="Close"
      body={body}
      websocket={websocket}

      />
        

    );

  }


