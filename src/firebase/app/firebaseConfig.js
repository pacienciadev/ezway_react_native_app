import {initializeApp} from 'firebase/app';
import {getAnalytics} from 'firebase/analytics';

// Optionally import the services that you want to use
// import {...} from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
  apiKey: process.env.EXPO_API_KEY,
  authDomain: process.env.EXPO_AUTH_DOMAIN,
  projectId: process.env.EXPO_PROJECT_ID,
  storageBucket: process.env.EXPO_STORAGE_BUCKET,
  messagingSenderId: process.env.EXPO_MESSAGING_SENDER_ID,
  appId: process.env.EXPO_APP_ID,
  measurementId: process.env.EXPO_MEASUREMENT_ID,
};

export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase
