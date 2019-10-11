import firebase from "firebase";

const config = {
  apiKey: "AIzaSyDtf3HZPMQ9O0kbX7vpSYh1hEDbGInByXs",
  authDomain: "devnight-website.firebaseapp.com",
  databaseURL: "https://devnight-website.firebaseio.com",
  projectId: "devnight-website",
  storageBucket: "devnight-website.appspot.com",
  messagingSenderId: "1005321691806",
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

export default firebase;
