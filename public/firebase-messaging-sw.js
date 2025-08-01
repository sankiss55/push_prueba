// firebase-messaging-sw.js
importScripts('https://www.gstatic.com/firebasejs/10.4.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.4.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyAASNitktsaADqwXm0KVRsTVSX3un1cHGY",
  authDomain: "cafeteria-7ba83.firebaseapp.com",
  projectId: "cafeteria-7ba83",
  messagingSenderId: "827668591350",
  appId: "1:827668591350:web:ebaec22ca4bdee2fa1f2d7",
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  const { title, body } = payload.notification;
  const notificationOptions = {
    body: body,
    icon: '/logo192.png',
  };

  self.registration.showNotification(title, notificationOptions);
});
