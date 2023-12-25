
import OneButton from './one_button';

export default function Spy(websocket) {

  const body = {
    event: "spy_scout",
    method: "create",
    kwargs: {
      "attack_pos":[20, 40],
      "other_id":"1700646931812365505", 
      // "other_id":"8300183916898568", 
    },
    body:{}
  }
    
    return (
  
      
      <OneButton
      text="Spy"
      body={body}
      websocket={websocket}
      color={'#001F3F'}

      />
        

    );

  }


