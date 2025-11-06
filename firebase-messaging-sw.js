// firebase-messaging-sw.js

importScripts('https://www.gstatic.com/firebasejs/10.12.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.0/firebase-messaging-compat.js');
importScripts('./firebase-config.js'); // ✅ Import shared config

firebase.initializeApp(self.firebaseConfig);

const messaging = firebase.messaging();

// ✅ Background message handler
messaging.onBackgroundMessage((payload) => {
    console.log('📦 Background message received:', payload);
    self.registration.showNotification(payload.notification.title, {
        body: payload.notification.body,
    });
});
