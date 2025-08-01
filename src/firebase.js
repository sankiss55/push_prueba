// src/firebase.js
import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyAASNitktsaADqwXm0KVRsTVSX3un1cHGY",
  authDomain: "cafeteria-7ba83.firebaseapp.com",
  projectId: "cafeteria-7ba83",
  storageBucket: "cafeteria-7ba83.appspot.com",
  messagingSenderId: "827668591350",
  appId: "1:827668591350:web:ebaec22ca4bdee2fa1f2d7"
};

const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);

export const requestPermission = async () => {
  console.log('Requesting permission...');
  const permission = await Notification.requestPermission();
  if (permission === 'granted') {
    console.log('Notification permission granted.');
    const token = await getToken(messaging, {
       vapidKey: "BAtK7GnWie3W-Dg885dye7au1mzUWGVZocUl0tXkg88TdoLA2UMXFTSCsP7pxa5ksz16YFxlYC4zbsnh3VFp-IY"
    });
    console.log("FCM Token:", token);
    // Aquí podrías enviarlo a tu backend
  } else {
    console.log('No permission granted');
  }
};

export const onMessageListener = () =>
  new Promise((resolve) => {
    onMessage(messaging, (payload) => {
      resolve(payload);
    });
  });
