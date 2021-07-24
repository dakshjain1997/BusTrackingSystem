import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyDXrCvU8U2LkGYs8QSm6UZTjyyIeHVhUWQ",
    authDomain: "testproject-f5836.firebaseapp.com",
    projectId: "testproject-f5836",
    storageBucket: "testproject-f5836.appspot.com",
    messagingSenderId: "540294945937",
    appId: "1:540294945937:web:dc541786c0da07fe447330"
  };

  const FirebaseInstance=firebase.initializeApp(firebaseConfig)

  export const db=firebase.firestore()

  export default FirebaseInstance