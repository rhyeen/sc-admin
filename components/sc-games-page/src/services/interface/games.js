import { INTERFACE_STATE, InterfaceState } from 'interface-handler/src/interface-state.js';
import * as CallHttp from './firebase/games.js';

export function removeAllDungeonsGames(dungeonId) {
  switch (InterfaceState.get()) {
    case INTERFACE_STATE.HTTP:
      return CallHttp.removeAllDungeonsGames(dungeonId);
    default:
      return InterfaceState.invalid();
  }
}
