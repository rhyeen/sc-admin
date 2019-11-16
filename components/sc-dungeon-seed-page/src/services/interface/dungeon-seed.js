import { INTERFACE_STATE, InterfaceState } from 'interface-handler/src/interface-state.js';
import * as CallHttp from './firebase/dungeon-seed.js';

export function generateSeed(dungeonId) {
  switch (InterfaceState.get()) {
    case INTERFACE_STATE.HTTP:
      return CallHttp.generateSeed(dungeonId);
    default:
      return InterfaceState.invalid();
  }
}

const TAGS = {
  STABLE: 'stable',
  BETA: 'beta',
  ALPHA: 'alpha',
  DEV: 'dev'
};

export function updatedTags(dungeonSeed, updateStable, updateBeta, updateAlpha, updateDev) {
  const request = {
    seed: dungeonSeed,
    tags: []
  };
  if (updateStable) {
    request.tags.push(TAGS.STABLE);
  }
  if (updateBeta) {
    request.tags.push(TAGS.BETA);
  }
  if (updateAlpha) {
    request.tags.push(TAGS.ALPHA);
  }
  if (updateDev) {
    request.tags.push(TAGS.DEV);
  }
  switch (InterfaceState.get()) {
    case INTERFACE_STATE.HTTP:
      return CallHttp.updatedTags(request);
    default:
      return InterfaceState.invalid();
  }
}
