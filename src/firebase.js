const firebase = require("firebase");
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyA52erhHCozEQUsh155aXDZMM9JTBkWV-M",
	authDomain: "twitter-clone-bcf06.firebaseapp.com",
	databaseURL: "https://twitter-clone-bcf06.firebaseio.com",
	projectId: "twitter-clone-bcf06",
	storageBucket: "twitter-clone-bcf06.appspot.com",
	messagingSenderId: "551343921308",
	appId: "1:551343921308:web:c606dc3a1a7572ba893559",
	measurementId: "G-LGPL9BYFL6",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
var auth = firebase.auth();
var provider = new firebase.auth.GoogleAuthProvider();
export { provider, auth };
export default db;
