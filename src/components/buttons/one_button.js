
import ListItem from '@mui/material/ListItem';
import BackgroundModal from '../modals/BackgroundEvents';

export default function DrawerButton({text, body, websocket, color}) {

    return (
  
      <ListItem
      key={text}
      disablePadding
      sx={{ bgcolor: color }}
      >
      <BackgroundModal
      websocket={websocket}
      text={text}
      />
      </ListItem>
        
    );

  }

