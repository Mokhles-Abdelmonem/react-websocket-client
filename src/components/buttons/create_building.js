
import OneButton from './one_button';
export default function CreateBuilding(websocket, buildingType) {

   let buildingBody = {
      "world_position":{
         "x":550,
         "y":550,
         "z":550
      },
      "local_scale":{
         "x":1,
         "y":1,
         "z":1
      },
      "max_scale":{
         "x":1,
         "y":1,
         "z":1
      },
      
   }
   let kwargs = {
      "building_type": buildingType,
   }

   const body = {
      event: "building",
      method: "create",
      kwargs: kwargs,
      body: buildingBody
   }

   return (
   
      <OneButton
      text="Create Building"
      body={body}
      websocket={websocket}
      color={'#001F3F'}
      />

   );

  }

