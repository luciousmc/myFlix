import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDRaUHTLkScHCGz4SFXBUBYxXg52gHJoZc",
  authDomain: "myflix-5b646.firebaseapp.com",
  projectId: "myflix-5b646",
  storageBucket: "myflix-5b646.appspot.com",
  messagingSenderId: "596754025210",
  appId: "1:596754025210:web:d9b8f3502635d1c74ed743"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };