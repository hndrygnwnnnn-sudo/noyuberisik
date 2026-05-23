// ========================================
// FIREBASE CONFIGURATION
// ========================================
// 
// CARA SETUP:
// 1. Buat akun Firebase: https://console.firebase.google.com
// 2. Buat project baru (gratis)
// 3. Pilih "Realtime Database"
// 4. Copy config dari Project Settings
// 5. Paste di bawah ini
//
// ========================================

const firebaseConfig = {
  apiKey: "AIzaSyxHQQTyiYPzbu7fBBYiOBsaBmRfWPuM_w",
  authDomain: "live-chat-club-e251e.firebaseapp.com",
  databaseURL: "https://live-chat-club-e251e-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "live-chat-club-e251e",
  storageBucket: "live-chat-club-e251e.firebasestorage.app",
  messagingSenderId: "107011011862B",
  appId: "1:107011011862B:web:bXclaeafd59ff2fdd92f1",
  measurementId: "G-P5HV4HNELM"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

console.log('✅ Firebase initialized');

// ========================================
// SETUP FIREBASE RULES (PENTING!)
// ========================================
//
// Buka Firebase Console → Realtime Database → Rules
// Copy paste rules ini:
//
// {
//   "rules": {
//     "messages": {
//       ".read": true,
//       ".write": true,
//       "$messageId": {
//         ".validate": "newData.hasChildren(['userName', 'message', 'timestamp'])"
//       }
//     }
//   }
// }
//
// Rules ini membolehkan semua orang read/write messages
// Untuk production, tambahkan rate limiting atau auth
//
// ========================================
