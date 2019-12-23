import { firebaseFunctions, firebaseAdminRequest } from '../../../../../utils/firebase.js';

export function getGame(gameId) {
  return firebaseFunctions.httpsCallable('getGameWithHiddenDetails')(firebaseAdminRequest({gameId}));
}
