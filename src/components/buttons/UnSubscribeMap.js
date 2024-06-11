import OneButton from './one_button';

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

      <OneButton
      text="UnSubscribe Map"
      body={body}
      websocket={websocket}
      />

    );

  }
