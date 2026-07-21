importScripts('https://www.gstatic.com/firebasejs/9.22.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.22.0/firebase-messaging-compat.js');

const firebaseConfig = {
  apiKey: "AIzaSyDruRISw56lL0dZpnKpFv2COaJkUmamgoc",
  authDomain: "marujoflix.firebaseapp.com",
  databaseURL: "https://marujoflix-default-rtdb.firebaseio.com",
  projectId: "marujoflix",
  storageBucket: "marujoflix.firebasestorage.app",
  messagingSenderId: "258606436715",
  appId: "1:258606436715:web:798dbdf480cd4bc55cfc2e",
  measurementId: "G-K9CC93KZ3Z"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

// Receber notificações em background
messaging.onBackgroundMessage((payload) => {
  console.log("Notificação em background:", payload);
  
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.image || 'https://play-lh.googleusercontent.com/E2L634I8-5aWWH0HF_g2M4-w2NCngTk_Fi_LMkSCfXj2jxNdC-k7GSe36M1kNJ7dMwTZlmzvwlVmanZ_a7STZQ',
    badge: 'https://play-lh.googleusercontent.com/E2L634I8-5aWWH0HF_g2M4-w2NCngTk_Fi_LMkSCfXj2jxNdC-k7GSe36M1kNJ7dMwTZlmzvwlVmanZ_a7STZQ'
  };
  
  self.registration.showNotification(notificationTitle, notificationOptions);
});
