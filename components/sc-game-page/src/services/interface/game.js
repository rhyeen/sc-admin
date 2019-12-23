import { INTERFACE_STATE, InterfaceState } from 'interface-handler/src/interface-state.js';
import * as CallHttp from './firebase/game.js';

export function getGame(gameId) {
  switch (InterfaceState.get()) {
    case INTERFACE_STATE.HTTP:
      return CallHttp.getGame(gameId);
    default:
      return InterfaceState.invalid();
  }
}
