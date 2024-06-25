import DrawerButton from './one_button';

export default function RandomMigrate(websocket) {

  const body = {
    event: "migrate_random",
    method: "update",
    kwargs: {},
    body:{}
  }

    return (
  
      <DrawerButton
      text="Random Migrate"
      body={body}
      websocket={websocket}
      
      />
  
    );

  }
