// firebase-messaging-sw.js

importScripts("https://www.gstatic.com/firebasejs/9.23.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/9.23.0/firebase-messaging-compat.js");

const firebaseConfig = {
  apiKey: "AIzaSyBXeMTtU1-CjGPpDZM7w0MzH0HG01cZ-Zg",
  authDomain: "cse-a-notifications.firebaseapp.com",
  projectId: "cse-a-notifications",
  storageBucket: "cse-a-notifications.appspot.com",
  messagingSenderId: "295368934339",
  appId: "1:295368934339:web:2e3944fa3112b2cb376b76"
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/icon.png' // Optional: Add your icon
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
