import * as React from 'react';
import DrawerButton from './buttons/one_button';
import Events from './EventData/BackgroundEvents.json'

function BackgroundEvents({websocket, buildings, setBuildings}) {
  return (
    <> 
      {Object.entries(Events).map(([key, value]) => (
          <div key={key} >
              <DrawerButton
              text={key}
              body={value}
              websocket={websocket}
              color={"#001F3F"}
              buildings={buildings}
              setBuildings={setBuildings}
              />
          </div>
      ))}
    </>
  );
}

export default BackgroundEvents;
