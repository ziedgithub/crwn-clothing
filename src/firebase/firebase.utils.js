import firebase from "firebase/app";
import 'firebase/auth';
import 'firebase/firestore';

const config = {
  apiKey: "AIzaSyB5zSFQUZd7ngTuf4Z_IB6LucVjozmpSiw",
  authDomain: "crwn-db-d834f.firebaseapp.com",
  databaseURL: "https://crwn-db-d834f.firebaseio.com",
  projectId: "crwn-db-d834f",
  storageBucket: "crwn-db-d834f.appspot.com",
  messagingSenderId: "252586083617",
  appId: "1:252586083617:web:85aa9a7a9e0a76264baa60"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
  prompt: 'select_account'
});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
