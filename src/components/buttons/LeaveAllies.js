import DrawerButton from './one_button';

export default function LeaveAllies(websocket) {

  const body = {
    event: "leave_allies",
    method: "update",
    kwargs: {},
    body:{}
  }


  
    return (
  
      <DrawerButton
      text="Leave Allies"
      body={body}
      websocket={websocket}
      />
        

  
    );

  }
