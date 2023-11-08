import OneButton from './one_button';

export default function AccelerateEvent(websocket, eventId) {

  const body = {
    event: "event",
    method: "update",
    kwargs: {
      "event_id": eventId,
      "package": 10,
    },
    body:{}
  }
  
  
    return (
  
      <OneButton
      text="Accelerate Event"
      body={body}
      websocket={websocket}
      color={'#ffcccb'}
      />
  
    );

  }
