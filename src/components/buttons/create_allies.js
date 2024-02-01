import OneButton from './one_button';

export default function CreateAllies(websocket) {

  const body = {
    event: "allies",
    method: "create",
    kwargs: {},
    body: {
      "name":"lions",
      "symbol":"Lion_Ego",
   }
  }

  
    return (
  
      
      <OneButton
      text="Create Allies"
      body={body}
      websocket={websocket}
      />
  
    );

  }

