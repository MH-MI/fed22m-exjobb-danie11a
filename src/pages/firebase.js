import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyCreKutQm_nPeL1H76Wa5-Js_O56WbfgNI",
	authDomain: "examensarbete-24.firebaseapp.com",
	projectId: "examensarbete-24",
	storageBucket: "examensarbete-24.appspot.com",
	messagingSenderId: "964679565494",
	appId: "1:964679565494:web:c76282abcd100e22d82617",
};

const app = firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();
