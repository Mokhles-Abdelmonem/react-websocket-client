import * as React from 'react';
import DrawerButton from './buttons/one_button';
import EventData from './EventData/Events.json'

function SingleEvents({websocket, buildings, setBuildings, eventId, player, playersAll}) {
  return (
    <> 
      {Object.entries(EventData).map(([key, value]) => (
          <div key={key} >
              <DrawerButton
              text={key}
              body={value}
              websocket={websocket}
              buildings={buildings}
              setBuildings={setBuildings}
              eventId={eventId}
              player={player}
              playersAll={playersAll}
              />
          </div>
      ))}
    </>
  );
}

export default SingleEvents;
