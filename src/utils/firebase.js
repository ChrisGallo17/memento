import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBRkRPB2sbw7Z2G3LzsRtl5ExkQyG1SlbA",
  authDomain: "memento-c73cc.firebaseapp.com",
  databaseURL: "https://memento-c73cc-default-rtdb.firebaseio.com",
  projectId: "memento-c73cc",
  storageBucket: "memento-c73cc.appspot.com",
  messagingSenderId: "303380494144",
  appId: "1:303380494144:web:c19bc4954d6425645e2ca5",
  measurementId: "G-PVE1S8JEEQ"
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();

export default firebase;