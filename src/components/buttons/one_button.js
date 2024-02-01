
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';

export default function OneButton({text, body, websocket, color}) {

  function handleClick (event){
    console.log("send event", body);
    for (let i = 0; i < 1; i++) { 
      websocket.send(JSON.stringify(body))
    }
  }
    return (
  
      <ListItem
      key={text}
      disablePadding
      sx={{ bgcolor: color }}
      >
        <ListItemButton 
        onClick={handleClick}
        >
          <ListItemIcon>
             <MenuIcon />
          </ListItemIcon>
          <ListItemText primary={text} />
        </ListItemButton>
      </ListItem>
        
    );

  }

