import OneButton from './one_button';

export default function GetPlayer(websocket) {

  const body = {
    "event": "user",
    "method": "retrieve",
    "kwargs": {},
    "body": {}
  }
  


  
    return (
  
      
      <OneButton
      text="Get Player"
      body={body}
      websocket={websocket}
      />

  
    );

  }
