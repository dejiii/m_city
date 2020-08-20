import firebase from "firebase/app";
// import "firebase-app";
import "firebase/database";

// const config = {
//     apiKey: "",
//     authDomain: "",
//     databaseURL: "",
//     projectID: "",
//     storgeBucket: "",
//     messagingSenderId: ""
// };

// firebase.initializeApp(config);

// const firebaseDB = firebase.database()
// const firebaseMatches = firebaseDB.ref("matches")

// export {
//     firebase,
//     firebaseMatches
// }


// Your web app's Fireba se configuration
const firebaseConfig = {
    apiKey: "AIzaSyBOmm6DXs5izeuUW1lLV6XR9ueYQcsR4ZY",
    authDomain: "m-city-backend.firebaseapp.com",
    databaseURL: "https://m-city-backend.firebaseio.com",
    projectId: "m-city-backend",
    storageBucket: "m-city-backend.appspot.com",
    messagingSenderId: "578788035710",
    appId: "1:578788035710:web:a680e7c601c91db4dc5c2f",
    measurementId: "G-QSEZXKYER4"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//   firebase.analytics();


const firebaseDB = firebase.database();
const firebaseMatches = firebaseDB.ref("matches")

export {
    firebase,
    firebaseMatches
}