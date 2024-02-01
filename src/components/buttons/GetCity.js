import OneButton from './one_button';

export default function GetCityData(websocket) {

  const body = {
    event: "city_data",
    method: "retrieve",
    kwargs: {
      player_id:"1706784718919706931",
      // player_id:"8300183916898568"

    },
    body:{}
  }
  


  
    return (
  
      
      <OneButton
      text="Get City Data"
      body={body}
      websocket={websocket}
      />

  
    );

  }
