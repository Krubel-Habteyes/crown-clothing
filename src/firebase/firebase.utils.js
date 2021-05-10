import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var firebaseConfig = {
	apiKey: "AIzaSyDkWSXOl-BLiFQvqpD2gXhOYVbj9wSHFss",
	authDomain: "crown-db-9ba9a.firebaseapp.com",
	projectId: "crown-db-9ba9a",
	storageBucket: "crown-db-9ba9a.appspot.com",
	messagingSenderId: "691480998425",
	appId: "1:691480998425:web:e5d1e25acfad57a6be7088",
	measurementId: "G-XTBT91SQ12",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const SignInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
