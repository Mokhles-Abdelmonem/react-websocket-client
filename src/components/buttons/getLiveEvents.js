import OneButton from './one_button';

export default function getLiveEvents(websocket) {

  const body = {
    event: "live_events",
    method: "list",
    kwargs: {},
    body:{}
  }
  
    return (
      
      <OneButton
      text="Get Live Events"
      body={body}
      websocket={websocket}
      />
        

    );

  }
