
import DrawerButton from './one_button';

export default function AttackResourceTiles(websocket) {

  const body = {
    "event": "attack_resource_tile",
    "method": "create",
    "kwargs": {
      "target_pos":[21, 22],
      "troops": {
        "Bowman":100
      },
      "heroes": {},
    },
    "body": {}
  }
    
    return (
  
      
      <DrawerButton
      text="Attack ResourceTiles"
      body={body}
      websocket={websocket}
      color={'#001F3F'}

      />
        

    );

  }


