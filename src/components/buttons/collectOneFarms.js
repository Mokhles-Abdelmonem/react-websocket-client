import OneButton from './one_button';


export default function CollectOneFarm(websocket, buildingType, Index) {

  const body = {
    method: "update",
    event: "collect",
    kwargs: {
      "building_type":buildingType,
      "index":Index
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


