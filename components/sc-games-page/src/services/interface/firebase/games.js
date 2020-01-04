import { firebaseFunctions, firebaseAdminRequest } from '../../../../../utils/firebase.js';

export function removeAllDungeonsGames(dungeonId) {
  return firebaseFunctions.httpsCallable('removeAllDungeonsGames')(firebaseAdminRequest({dungeonId}));
}
