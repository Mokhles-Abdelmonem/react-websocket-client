import OneButton from './one_button';

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

      <OneButton
      text="Subscribe Map"
      body={body}
      websocket={websocket}
      />

    );

  }
