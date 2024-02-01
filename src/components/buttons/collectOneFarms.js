import OneButton from './one_button';


export default function CollectOneFarm(websocket, buildingType, buildingId) {

  const body = {
    method: "update",
    event: "collect",
    kwargs: {
      "building_type":buildingType,
      "building_id":buildingId
    }, 
    body:{}
  }

    return (

      <OneButton
      text="Collect"
      body={body}
      websocket={websocket}
      />
        
  
    );

  }


