import OneButton from './one_button';

export default function JoinAllies(websocket) {

  const body = {
    event: "join_allies",
    method: "update",
    kwargs: {
      "allies_id":"1698653858807687764"
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
