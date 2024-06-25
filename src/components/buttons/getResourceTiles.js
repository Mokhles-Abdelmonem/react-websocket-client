import DrawerButton from './one_button';

export default function getResourceTiles(websocket) {

  const body = {
    event: "resource_tiles",
    method: "list",
    kwargs: {"center_point":[23, 24]},
    body:{}
  }
  


  
    return (
  
      
      <DrawerButton
      text="Get ResourceTiles"
      body={body}
      websocket={websocket}
      />

  
    );

  }
