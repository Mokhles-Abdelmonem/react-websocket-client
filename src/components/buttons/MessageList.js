import OneButton from './one_button';

export default function MessageList(websocket) {

  const body = {
    event: "message",
    method: "list",
    kwargs: {
      consumer:"alliance" // ["kingdom", "alliance", "4558819746088874"]
    },
    body:{
      "message":"Hello there my name is Mokhles .",
    }
  }

    return (
  
      <OneButton
      text="Get message"
      body={body}
      websocket={websocket}
      />

    );

  }
