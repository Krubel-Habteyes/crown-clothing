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

export const createUserProfileDocument = async (userAuth, additionalData) => {
	if (!userAuth) {
		return;
	}

	const userRef = firestore.doc(`users/${userAuth.uid}`);

	const snapShot = await userRef.get();

	if (!snapShot.exists) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();

		try {
			await userRef.set({
				displayName,
				email,
				createdAt,
				...additionalData,
			});
		} catch (error) {
			console.log("error creating user", error.message);
		}
	}

	return userRef;
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const SignInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
