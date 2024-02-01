import OneButton from './one_button';

export default function getDispatches(websocket) {

  const body = {
    event: "dispatch",
    method: "list",
    kwargs: {},
    body:{}
  }

    return (
  
      <OneButton
      text="Get Dispatches"
      body={body}
      websocket={websocket}
      />
        

  
    );

  }
