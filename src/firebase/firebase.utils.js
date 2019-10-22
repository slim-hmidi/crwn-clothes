import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyAR3ZiqZUyecbubBKDE6n4oczxsafR2VkM",
  authDomain: "crwn-db-ce97d.firebaseapp.com",
  databaseURL: "https://crwn-db-ce97d.firebaseio.com",
  projectId: "crwn-db-ce97d",
  storageBucket: "crwn-db-ce97d.appspot.com",
  messagingSenderId: "265385467564",
  appId: "1:265385467564:web:23348476bd097bff490909",
  measurementId: "G-G2EQH1QW8D"
};

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;