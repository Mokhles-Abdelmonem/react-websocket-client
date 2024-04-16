import OneButton from './one_button';

export default function GetUsersRegion(websocket) {

  const body = {
    event: "user_region",
    method: "list",
    kwargs: {"center_point":[23, 24]},
    body:{}
  }
  


  
    return (
  
      
      <OneButton
      text="Get Players region"
      body={body}
      websocket={websocket}
      />

  
    );

  }
