
import OneButton from './one_button';

export default function Attack(websocket) {

  const body = {
    event: "attack",
    method: "create",
    kwargs: {
      "troops": {
        "Bowman":800,
        "Crossbowman":800,
        "Artilleryman":800,
        "Sharpshooter":800,
        "BattleArcher":800,
      },
      "heroes": {},
      "attack_pos":[20, 40],
      "other_id":"1702970824292308012", 
      // "other_id":"8300183916898568", 
    },
    body:{}
  }
    
    return (
  
      
      <OneButton
      text="attack castle"
      body={body}
      websocket={websocket}
      color={'#001F3F'}

      />
        

    );

  }


