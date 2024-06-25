import DrawerButton from './one_button';


export default function CollectOneFarm(websocket, buildingType, Key) {

  const body = {
    method: "update",
    event: "collect",
    kwargs: {
      "building_type":buildingType,
      "key":Key
    }, 
    body:{}
  }

    return (

      <DrawerButton
      text="Collect"
      body={body}
      websocket={websocket}
      />
        
  
    );

  }


