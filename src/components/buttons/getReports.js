import DrawerButton from './one_button';

export default function getReports(websocket) {

  const body = {
    event: "reports",
    method: "list",
    kwargs: {},
    body:{}
  }
  
    return (
  
      <DrawerButton
      text="Get Reports"
      body={body}
      websocket={websocket}
      />
  
    );

  }
