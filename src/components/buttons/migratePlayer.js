import DrawerButton from './one_button';

export default function migratePlayer(websocket) {

  const body = {
    event: "migrate_super",
    method: "update",
    kwargs: {},
    body:{
      "position":{
        "x":20,
        "y":40,
        "z":10
     }
    }
  }

    return (
  
      <DrawerButton
      text="Super Migrate"
      body={body}
      websocket={websocket}
      />

  
    );

  }
