import OneButton from './one_button';

export default function GetCityData(websocket) {

  const body = {
    event: "city_data",
    method: "retrieve",
    kwargs: {
      player_id:"7599602824905487"
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
