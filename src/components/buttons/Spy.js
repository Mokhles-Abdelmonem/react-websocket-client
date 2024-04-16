
import OneButton from './one_button';

export default function Spy(websocket) {

  const body = {
    "event": "spy_info",
    "method": "create",
    "kwargs": {
      "target_pos":[20, 40],
      "other_id": "123"
    },
    "body": {}
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


