import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
const config = {
    apiKey: "AIzaSyCigU4gLfKGlGLoSAP-7y4AdKJOPTmsi84",
    authDomain: "crwn-db-98942.firebaseapp.com",
    databaseURL: "https://crwn-db-98942.firebaseio.com",
    projectId: "crwn-db-98942",
    storageBucket: "crwn-db-98942.appspot.com",
    messagingSenderId: "95386071176",
    appId: "1:95386071176:web:5d6fa858bc80b7d3a66f3d",
    measurementId: "G-6FM1FBZDSR"
};
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;