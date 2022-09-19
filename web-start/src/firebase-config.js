/**
 * To find your Firebase config object:
 * 
 * 1. Go to your [Project settings in the Firebase console](https://console.firebase.google.com/project/_/settings/general/)
 * 2. In the "Your apps" card, select the nickname of the app for which you need a config object.
 * 3. Select Config from the Firebase SDK snippet pane.
 * 4. Copy the config object snippet, then add it here.
 */
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCsbv_daH9eefwBI1PWb21LRsgjsOAUx6U",
  authDomain: "friendlychat-52f13.firebaseapp.com",
  projectId: "friendlychat-52f13",
  storageBucket: "friendlychat-52f13.appspot.com",
  messagingSenderId: "926894268905",
  appId: "1:926894268905:web:732541a7e59d7453fdeb78"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export function getFirebaseConfig() {
  if (!firebaseConfig || !firebaseConfig.apiKey) {
    throw new Error('No Firebase configuration object provided.' + '\n' +
    'Add your web app\'s configuration object to firebase-config.js');
  } else {
    return firebaseConfig;
  }
}