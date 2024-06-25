import DrawerButton from './one_button';

export default function GetCityData(websocket) {

  const body = {
    event: "city_data",
    method: "retrieve",
    kwargs: {
      player_id:"12345",
      // player_id:"8300183916898568"

    },
    body:{}
  }
  


  
    return (
  
      
      <DrawerButton
      text="Get City Data"
      body={body}
      websocket={websocket}
      />

  
    );

  }
