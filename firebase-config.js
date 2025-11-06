// firebase-config.js

// ✅ Your Firebase Web App Configuration
const firebaseConfig = {
    apiKey: "XXX",
    authDomain: "XXX",
    projectId: "XX",
    storageBucket: "XXXX",
    messagingSenderId: "XXXXX",
    appId: "XXXXXX",
    measurementId: "XXXXX",

    // ✅ Your public VAPID key for FCM Web Push
    vapidKey: "XXX-XXXXXXX"
};

// ✅ Export for both web and service worker scopes
if (typeof window !== 'undefined') {
    window.firebaseConfig = firebaseConfig;
} else {
    self.firebaseConfig = firebaseConfig;
}
