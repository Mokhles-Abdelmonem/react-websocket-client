import DrawerButton from './one_button';

export default function SubscribeMap(websocket) {

  const body = {
    event: "subscribe",
    method: "create",
    kwargs: {
      "channel":"map"
    },
    body:{}
  }

    return (

      <DrawerButton
      text="Subscribe Map"
      body={body}
      websocket={websocket}
      />

    );

  }
