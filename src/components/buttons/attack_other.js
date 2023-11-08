
import OneButton from './one_button';

export default function Attack(websocket) {

  const body = {
    event: "attack",
    method: "create",
    kwargs: {
      "troops": {
        "Spearman":100,
        "PeasantArcher":100,
        "Infantry":100,
        "knight":100,
        "Assassin":100,
      },
      "heroes": {},
      "attack_pos":[20, 40],
      "other_id":"7599602824905487", 
      // "other_id":"8300183916898568", 
    },
    body:{}
  }
    
    return (
  
      
      <OneButton
      text="attack castle"
      body={body}
      websocket={websocket}
      color={'#ADD8E6'}

      />
        

    );

  }


