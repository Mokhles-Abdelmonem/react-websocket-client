
import OneButton from './one_button';

export default function Attack(websocket) {

  const body = {
    event: "attack",
    method: "create",
    kwargs: {
      "troops": {
        "Bowman": 200,
        "Crossbowman": 200,
        "Artilleryman": 200,
        "Sharpshooter": 200,
        "BattleArcher": 200,
        "PrecisionRifelman": 200,
        "Hawkeye": 200,
        "LongRangeSniper": 200,
        "HeavyGunner": 200,
        "VanguardMarksman": 200
      },
      "heroes": {},
      "target_pos":[20, 40],
      "other_id":"12345", 
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


