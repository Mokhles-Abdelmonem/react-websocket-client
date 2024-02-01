
import OneButton from './one_button';

export default function AttackUltimates(websocket) {

  const body = {
    "event": "attack_ultimates",
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
      text="Attack Ultimates"
      body={body}
      websocket={websocket}
      color={'#001F3F'}

      />
        

    );

  }


