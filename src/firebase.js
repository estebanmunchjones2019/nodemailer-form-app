//Import firebase from node_modules
import firebase from 'firebase';

//you have to copy and paste this config from your Firebase Console
const firebaseConfig = {
    apiKey: "your-apiKey",
    authDomain: "your-authDomain",
    projectId: "your-projectId",
    storageBucket: "your-storageBucket",
    messagingSenderId: "your-messagingSenderId",
    appId: "your-appId",
    measurementId: "your-measurementId"
};

//initialize a Firebase instance
firebase.initializeApp(firebaseConfig);

//initialize Cloud Functions through Firebase
firebase.functions();

//this is optional, in case you want you wanna use analytics
firebase.analytics();

//export `firebase` the namespace to import it in src/App.js
export default firebase;