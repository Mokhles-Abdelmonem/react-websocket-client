import React, { useState } from 'react';
import CreateBuilding from './buttons/create_building';
import UpgradeBuilding from './buttons/upgrade_building';
import UpdateBuildingPosition from './buttons/update_build_position';
import CollectOneFarm from './buttons/collectOneFarms';
import DeleteBuiding from './buttons/deleteBuilding';

import TrainTroop from './buttons/trainTroop';
import Attack from './buttons/attack_other';
import GetUsersRegion from './buttons/getUsersRegion';
import CreateAllies from './buttons/create_allies';
import getAllies from './buttons/getAllies';
import JoinAllies from './buttons/JoinAllies';
import migratePlayer from './buttons/migratePlayer';
import RandomMigrate from './buttons/RandomMigrate';
import LeaveAllies from './buttons/LeaveAllies';
import Chat from './buttons/Chat';
import AccelerateEvent from './buttons/AccelerateEvent';
import getDispatches from './buttons/getDespatches';
import getLiveEvents from './buttons/getLiveEvents';
import getReports from './buttons/getReports';
import BuildingMenu from './BuildingMenu';
import GetUsersAll from './buttons/getUsersAll';
import Spy from './buttons/Spy';
import GetCityData from './buttons/GetCity';
import CloseButton from './buttons/CloseSocket';
import Scout from './buttons/Scout';
import AttackUltimates from './buttons/AttackUltimates';
import getUltimates from './buttons/getUltimates';
import getResourceTiles from './buttons/getResourceTiles';
import AttackResourceTiles from './buttons/AttackResourceTiles';
import GetPlayer from './buttons/getPlayer';
import UpdateUsername from './buttons/updateUsername';
import MessageList from './buttons/MessageList';
import SubscribeMap from './buttons/SubscribeMap';
import UnSubscribeMap from './buttons/UnSubscribeMap';
import DrawerButton from './buttons/one_button';
import Events from './EventData/BackgroundEvents.json'

function BackgroundEvents({websocket}) {


  return (
    <> 
      {Object.entries(Events).map(([key, value]) => (
          <div key={key} >
              <DrawerButton
              text={key}
              body={value}
              websocket={websocket}
              color={"#001F3F"}
              />
          </div>
      ))}
    </>
  );
}

export default BackgroundEvents;
