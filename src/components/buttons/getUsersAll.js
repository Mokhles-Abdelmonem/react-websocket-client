import DrawerButton from './one_button';

export default function GetUsersAll(websocket) {

  const body = {
    event: "user",
    method: "list",
    kwargs: {},
    body:{}
  }
  


  
    return (
  
      
      <DrawerButton
      text="Get Players All"
      body={body}
      websocket={websocket}
      />

  
    );

  }
