import OneButton from './one_button';
export default function UpgradeBuilding(websocket, buildingType, Key) {

  const body = {
    method: "update",
    event: "building",
    kwargs: {
      "building_type":buildingType,
      "key":Key
    },
    body:{}
  }
  

  
    return (
  
      <OneButton
      text="Upgrade Building"
      body={body}
      websocket={websocket}
      color={'#001F3F'}
      />

    );

  }
