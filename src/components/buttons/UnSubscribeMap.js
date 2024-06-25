import DrawerButton from './one_button';

export default function UnSubscribeMap(websocket) {

  const body = {
    event: "subscribe",
    method: "delete",
    kwargs: {
      "channel":"map"
    },
    body:{}
  }

    return (

      <DrawerButton
      text="UnSubscribe Map"
      body={body}
      websocket={websocket}
      />

    );

  }
