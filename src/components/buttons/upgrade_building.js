import OneButton from './one_button';
export default function UpgradeBuilding(websocket, buildingType, buildingId) {

  const body = {
    method: "update",
    event: "building",
    kwargs: {
      "building_type":buildingType,
      "building_id":buildingId
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
