import OneButton from './one_button';


export default function UpdateBuildingPosition(websocket, buildingType, Key) {
//   Here is the last thing to test 
  const body = {
    event: "building_position",
    method: "update",
    kwargs: {
      "building_type":buildingType,
      "key": Key
    },
    body: {
      "x":555,
      "y":555,
      "z":555
   }
  }

    return (
  
      <OneButton
      text="Update Position"
      body={body}
      websocket={websocket}
      />
        
  
    );

  }

