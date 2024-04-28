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
import GeneralChat from './buttons/Chat';
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

let buildingTypes = [
  "farm", "hq", "medical_camp", "lumber_mill", "constructor_builder", "house", "quarry", "ore_refinery",
  "power_station", "wall", "laboratory", "trading_post", "guild_hall", "bank", "prison", "warehouse",
  "workshop", "longshot_division", "barracks", "aero_command", "artillery_garage",
  "garrisons_bunker", "alchemy", "healers_hedge", "watch_tower"
]


function Buttons({websocket, Key, eventId}) {
  const [buildingType, setbuildingType] = useState(buildingTypes[0]);


  return (
    <> 
      <BuildingMenu
      buildingTypes={buildingTypes}
      setbuildingType={setbuildingType}
      />

      {CreateBuilding(websocket, buildingType)}
      
      {UpgradeBuilding(websocket, buildingType, Key)}

      {UpdateBuildingPosition(websocket, buildingType, Key)}

      {AccelerateEvent(websocket, eventId)}

      {CollectOneFarm(websocket, buildingType, Key)}

      {DeleteBuiding(websocket, buildingType, Key)}

      {TrainTroop(websocket, buildingType, Key)}

      {Attack(websocket)}

      {GetPlayer(websocket)}

      {UpdateUsername(websocket)}
      
      {GetUsersRegion(websocket)}

      {GetUsersAll(websocket)}

      {GetCityData(websocket)}

      {CreateAllies(websocket)}

      {getAllies(websocket)}

      {JoinAllies(websocket)}

      {LeaveAllies(websocket)}

      {migratePlayer(websocket)}

      {RandomMigrate(websocket)}

      {GeneralChat(websocket)}

      {getDispatches(websocket)}

      {getLiveEvents(websocket)}

      {getReports(websocket)}
      
      {Spy(websocket)}

      {Scout(websocket)}

      {AttackUltimates(websocket)}

      {AttackResourceTiles(websocket)}

      {getUltimates(websocket)}

      {getResourceTiles(websocket)}

      {CloseButton(websocket)}

    </>
  );
}

export default Buttons;
