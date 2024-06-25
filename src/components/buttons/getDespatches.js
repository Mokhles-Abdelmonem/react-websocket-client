import DrawerButton from './one_button';

export default function getDispatches(websocket) {

  const body = {
    event: "dispatch",
    method: "list",
    kwargs: {},
    body:{}
  }

    return (
  
      <DrawerButton
      text="Get Dispatches"
      body={body}
      websocket={websocket}
      />
        

  
    );

  }
