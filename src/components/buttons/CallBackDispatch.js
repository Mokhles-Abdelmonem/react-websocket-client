import OneButton from './one_button';

export default function CallBack(websocket, eventId) {

  const body = {
    "event": "dispatch_callback",
    "method": "update",
    "kwargs": {
      "event_id": eventId,
      "position": [10, 10]
    },
    "body":{}
  }
  
  
    return (
  
      <OneButton
      text="CallBack"
      body={body}
      websocket={websocket}
      color={'#8B0000'}
      />
  
    );

  }
