import OneButton from './one_button';

export default function JoinAllies(websocket) {

  const body = {
    event: "join_allies",
    method: "update",
    kwargs: {
      "allies_id":"1702798087309447954"
    },
    body:{}
  }

    return (

      <OneButton
      text="Join Allies"
      body={body}
      websocket={websocket}
      />

    );

  }
