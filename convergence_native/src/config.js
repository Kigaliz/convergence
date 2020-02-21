import Firebase from 'firebase';
let config = {
    apiKey: "AIzaSyBvpEOy6aF8KDboue1m-5Bx0NanqAwvrI0",
    authDomain: "micro-reef-210013.firebaseapp.com",
    databaseURL: "https://micro-reef-210013.firebaseio.com",
    projectId: "micro-reef-210013",
    storageBucket: "micro-reef-210013.appspot.com",
    messagingSenderId: "932720989800",
    appId: "1:932720989800:web:eeed3c4c50c656a4f7cddd",
    measurementId: "G-L028KVRQTK"
};
let app = Firebase.initializeApp(config);
export const db = app.database();