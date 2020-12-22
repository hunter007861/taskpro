import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyC9vAKXhtgwfv2_VoRMFpAPHUYEKS3ORlQ",
    authDomain: "testproservices-88c16.firebaseapp.com",
    databaseURL: "https://testproservices-88c16-default-rtdb.firebaseio.com",
    projectId: "testproservices-88c16",
    storageBucket: "testproservices-88c16.appspot.com",
    messagingSenderId: "502220296916",
    appId: "1:502220296916:web:d2a7070cc82b98edfe2141"
};
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;