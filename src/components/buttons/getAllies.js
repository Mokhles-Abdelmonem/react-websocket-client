import OneButton from './one_button';

export default function getAllies(websocket) {

  const body = {
    event: "allies",
    method: "list",
    kwargs: {},
    body:{}
  }
  
    return (
  
      <OneButton
      text="Get Allies"
      body={body}
      websocket={websocket}
      />
  
    );

  }
