import * as React from 'react';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import DrawerButton from './buttons/one_button';
import BackgroundEventData from './EventData/BackgroundEvents.json'
import EventData from './EventData/EventData.json'
import EventDataSimple from './EventData/EventDataSimple.json'


function Events({websocket, buildings, setBuildings, eventId, player, playersAll, setmessagesSent}) {
  const AllData = {...EventData, ...EventDataSimple}

  return (
    <> 
      <List>
        {Object.entries(BackgroundEventData).map(([key, value]) => (
            <div key={key} >
                <DrawerButton
                text={key}
                body={value}
                websocket={websocket}
                color={'#001F3F'}
                buildings={buildings}
                setBuildings={setBuildings}
                eventId={eventId}
                player={player}
                playersAll={playersAll}
                setmessagesSent={setmessagesSent}
                />
            </div>
        ))}
      </List>
      <Divider />
      <List>
        {Object.entries(AllData).map(([key, value]) => (
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
                setmessagesSent={setmessagesSent}
                />
            </div>
        ))}
      </List>
    </>
  );
}

export default Events;
