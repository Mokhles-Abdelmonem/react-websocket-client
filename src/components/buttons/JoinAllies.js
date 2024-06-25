import DrawerButton from './one_button';

export default function JoinAllies(websocket) {

  const body = {
    event: "join_allies",
    method: "update",
    kwargs: {
      "allies_id":"Lion_Ego_1"
    },
    body:{}
  }

    return (

      <DrawerButton
      text="Join Allies"
      body={body}
      websocket={websocket}
      />

    );

  }
