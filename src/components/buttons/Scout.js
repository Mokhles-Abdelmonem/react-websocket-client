
import DrawerButton from './one_button';

export default function Scout(websocket) {

  const body = {
    "event": "scout_area",
    "method": "create",
    "kwargs": {
      "target_pos":[20, 40],
    },
    "body": {}
  }
    
    return (
  
      
      <DrawerButton
      text="Scout Area"
      body={body}
      websocket={websocket}
      color={'#001F3F'}

      />
        

    );

  }


