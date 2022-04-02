import firebase from "firebase";
require("@firebase/firestore");

var firebaseConfig = {
  apiKey: "AIzaSyAVeU0wOtLIIjqDQkwX1yCFAuyuxDCV1BM",
  authDomain: "e-rider-3f5b8.firebaseapp.com",
  projectId: "e-rider-3f5b8",
  storageBucket: "e-rider-3f5b8.appspot.com",
  messagingSenderId: "312075884488",
  appId: "1:312075884488:web:a948718cbb47502ead52fd"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
