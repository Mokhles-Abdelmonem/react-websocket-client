import OneButton from './one_button';

export default function Chat(websocket) {

  const body = {
    event: "message",
    method: "create",
    kwargs: {
      consumer:"kingdom" // ["kingdom", "alliance", "4558819746088874"]
    },
    body:{
      "message":"Hello there my name is Mokhles .",
    }
  }

    return (
  
      <OneButton
      text="send message"
      body={body}
      websocket={websocket}
      />

    );

  }
