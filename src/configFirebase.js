import firebase from 'firebase/app';
import 'firebase/storage';

// var serviceAccount = require("./dofussets-firebase-adminsdk-74wfw-79d4712e23.json");

// const firebase = admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount),
//   databaseURL: "https://dofussets.firebaseio.com"
// });

var firebaseConfig = {
  apiKey: "AIzaSyDRC-Oe2_FiNFQMplOknnyRpQUIVkzOTLY",
  authDomain: "dofussets.firebaseapp.com",
  databaseURL: "https://dofussets.firebaseio.com",
  projectId: "dofussets",
  storageBucket: "dofussets.appspot.com",
  messagingSenderId: "558663129772",
  appId: "1:558663129772:web:f9be2b38e0e624205e9d09",
  measurementId: "G-BVS8B50FDR"
};

var storage = firebase.initializeApp(firebaseConfig).storage().ref();


export { storage };
