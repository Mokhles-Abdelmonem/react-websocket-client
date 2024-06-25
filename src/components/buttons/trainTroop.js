import DrawerButton from './one_button';


export default function TrainTroop(websocket, buildingType) {

  const body = {
    event: "train",
    method: "update",
    kwargs: {
      "building_type": buildingType,
      "soldier_type":"DeltaStrikerUnit",
      "soldier_number":5,
    },
    body:{}
  }

    return (

      <DrawerButton
      text="Train Troop"
      body={body}
      websocket={websocket}
      color={'#001F3F'}
      />
        
    );

  }


