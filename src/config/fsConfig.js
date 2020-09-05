import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBCvYS-3z8kVQv-XcJb8kxQ8PYKrZcWCyg",
    authDomain: "note-app-b52e5.firebaseapp.com",
    databaseURL: "https://note-app-b52e5.firebaseio.com",
    projectId: "note-app-b52e5",
    storageBucket: "note-app-b52e5.appspot.com",
    messagingSenderId: "907496854132",
    appId: "1:907496854132:web:7f8b266aec913eb11bf721"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

firebase.firestore().settings({timestampsInSnapshots : true})

export default firebase