
import OneButton from './one_button';

export default function DeleteBuiding(websocket, buildingType, buildingId) {
  let data = {
    "building_type":buildingType,
    "building_id": buildingId
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

