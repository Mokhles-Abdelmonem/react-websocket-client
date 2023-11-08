import OneButton from './one_button';


export default function TrainTroop(websocket, buildingType) {

  const body = {
    event: "train",
    method: "update",
    kwargs: {
      "building_type": buildingType,
      "soldier_type":"PeasantArcher",
      "soldier_number":5,
    },
    body:{}
  }

    return (

      <OneButton
      text="Train Troop"
      body={body}
      websocket={websocket}
      color={'#ADD8E6'}
      />
        
    );

  }


