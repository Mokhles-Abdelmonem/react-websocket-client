
import OneButton from './one_button';

export default function Attack(websocket) {

  const body = {
    event: "attack",
    method: "create",
    kwargs: {
      "troops": {
        "Pyromancer_1":21,
        "Crossbowman":800,
        "Artilleryman":800,
        "Sharpshooter":800,
        "BattleArcher":800,
      },
      "heroes": {},
      "target_pos":[18, 68],
      "other_id":"1706784725993761623", 
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


