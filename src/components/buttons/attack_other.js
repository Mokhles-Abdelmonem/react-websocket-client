
import DrawerButton from './one_button';

export default function Attack(websocket) {

  const body = {
    event: "attack",
    method: "create",
    kwargs: {
      "troops": {
        "DeltaStrikerUnit": 2
      },
      "heroes": {},
      "target_pos":[20, 40],
      "other_id":"12345", 
      // "other_id":"8300183916898568", 
    },
    body:{}
  }
    
    return (
  
      
      <DrawerButton
      text="attack castle"
      body={body}
      websocket={websocket}
      color={'#001F3F'}

      />
        

    );

  }


