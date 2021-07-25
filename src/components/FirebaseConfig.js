import firebase from 'firebase'

var firebaseConfig = {
  apiKey: "AIzaSyCTD2GdF5zEjvFrbcTeczm-rccYQYEmx94",
  authDomain: "studentbustracking-8c643.firebaseapp.com",
  projectId: "studentbustracking-8c643",
  storageBucket: "studentbustracking-8c643.appspot.com",
  messagingSenderId: "618915197110",
  appId: "1:618915197110:web:a5ada004b24bf0e185f617"

  };

  const FirebaseInstance=firebase.initializeApp(firebaseConfig)

  export const db=firebase.firestore()

  export default FirebaseInstance