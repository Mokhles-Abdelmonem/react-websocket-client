import DrawerButton from './one_button';

export default function AccelerateEvent(websocket, eventId) {

  const body = {
    event: "event",
    method: "update",
    kwargs: {
      "event_id": eventId,
      "package": 60,
    },
    body:{}
  }
  
  
    return (
  
      <DrawerButton
      text="Accelerate Event"
      body={body}
      websocket={websocket}
      color={'#8B0000'}
      />
  
    );

  }
