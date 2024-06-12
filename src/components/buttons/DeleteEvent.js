import OneButton from './one_button';

export default function DeleteEvent(websocket, eventId) {

  const body = {
    event: "event",
    method: "delete",
    kwargs: {
      "event_id": eventId
    },
    body:{}
  }
  
  
    return (
  
      <OneButton
      text="Delete Event"
      body={body}
      websocket={websocket}
      color={'#8B0000'}
      />
  
    );

  }
