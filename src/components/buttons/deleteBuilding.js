
import OneButton from './one_button';

export default function DeleteBuiding(websocket, buildingType, Key) {
  let data = {
    "building_type":buildingType,
    "key": Key
  }

  const body = {
    event: "building",
    method: "delete",
    kwargs: data,
    body:{}
  }
  
    return (

        
      <OneButton
      text="Delete Building"
      body={body}
      websocket={websocket}
      />

    );

  }

