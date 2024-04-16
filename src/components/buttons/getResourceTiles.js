import OneButton from './one_button';

export default function getResourceTiles(websocket) {

  const body = {
    event: "resource_tiles",
    method: "list",
    kwargs: {"center_point":[23, 24]},
    body:{}
  }
  


  
    return (
  
      
      <OneButton
      text="Get ResourceTiles"
      body={body}
      websocket={websocket}
      />

  
    );

  }
