import OneButton from './one_button';

export default function getUltimates(websocket) {

  const body = {
    event: "ultimates",
    method: "list",
    kwargs: {},
    body:{}
  }
  


  
    return (
  
      
      <OneButton
      text="Get Ultimates All"
      body={body}
      websocket={websocket}
      />

  
    );

  }
