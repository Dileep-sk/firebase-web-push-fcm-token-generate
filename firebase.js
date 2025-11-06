// firebase.js

firebase.initializeApp(window.firebaseConfig);

const messaging = firebase.messaging();

navigator.serviceWorker.register('./firebase-messaging-sw.js')
    .then(async (registration) => {
        console.log('✅ Service Worker registered:', registration);

        const permission = await Notification.requestPermission();
        if (permission !== 'granted') {
            alert('❌ Notifications permission denied.');
            return;
        }

        // ✅ Get token using shared config’s VAPID key
        const token = await messaging.getToken({
            vapidKey: window.firebaseConfig.vapidKey,
            serviceWorkerRegistration: registration
        });

        console.log('✅ Generated FCM Token:', token);
        document.getElementById('tokenBox').value = token;
    })
    .catch(err => console.error('❌ Service Worker registration failed:', err));

// ✅ Foreground message handler
messaging.onMessage((payload) => {
    console.log('📩 Foreground message received:', payload);
    alert(`${payload.notification.title}: ${payload.notification.body}`);
});

