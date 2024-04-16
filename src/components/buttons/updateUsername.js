import OneButton from './one_button';

export default function UpdateUsername(websocket) {

  const body = {
  "event": "username",
  "method": "update",
  "kwargs": {
    "username":"Mostafa"
  },
  "body": {}
}


  
    return (
  
      
      <OneButton
      text="update username"
      body={body}
      websocket={websocket}
      />

  
    );

  }
