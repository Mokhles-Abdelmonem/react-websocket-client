
import OneButton from './one_button';

export default function AttackResourceTiles(websocket) {

  const body = {
    "event": "attack_resource_tile",
    "method": "create",
    "kwargs": {
      "target_pos":[18, 68],
      "troops": {
        "Bowman":800
      },
      "heroes": {},
    },
    "body": {}
  }
    
    return (
  
      
      <OneButton
      text="Attack ResourceTiles"
      body={body}
      websocket={websocket}
      color={'#001F3F'}

      />
        

    );

  }


