import DrawerButton from './one_button';

export default function getUltimates(websocket) {

  const body = {
    event: "ultimates",
    method: "list",
    kwargs: {"center_point":[50, 50]},
    body:{}
  }
  


  
    return (
  
      
      <DrawerButton
      text="Get Ultimates"
      body={body}
      websocket={websocket}
      />

  
    );

  }
