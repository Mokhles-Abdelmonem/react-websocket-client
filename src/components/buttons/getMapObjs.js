import OneButton from './one_button';

export default function getMapObjs(websocket) {

  const body = {
    event: "map_object",
    method: "list",
    kwargs: {"center_point":[23, 24]},
    body:{}
  }
  


  
    return (
  
      
      <OneButton
      text="Get Map Objects"
      body={body}
      websocket={websocket}
      />

  
    );

  }
