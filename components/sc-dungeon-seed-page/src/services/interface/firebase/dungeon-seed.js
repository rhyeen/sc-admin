import { firebaseFunctions, firebaseAdminRequest } from '../../../../../utils/firebase.js';

export function generateSeed(dungeonId) {
  return firebaseFunctions.httpsCallable('generateSeed')(firebaseAdminRequest({dungeonId}));
}

export function updateTags(request) {
  return firebaseFunctions.httpsCallable('updateTags')(firebaseAdminRequest({request}));
}
