import {initializeApp} from "firebase/app";
import fireConfig from "../firebase-config";
import {getAuth, onAuthStateChanged, signOut} from "firebase/auth";

const fireApp = initializeApp(fireConfig)
const auth = getAuth()

export default function TrackAuth() {
	const logIn = document.querySelectorAll('.in');
	const logOut = document.querySelectorAll('.Out')

	const logOutLink = document.querySelector('#logOut')
	logOutLink.addEventListener('click', () => {
		signOut(auth)
	})

	onAuthStateChanged(auth, (user) => {
		if (user) {
			logIn.forEach(item => item.style.display = 'block')
			logOut.forEach(item => item.style.display = 'none')
		} else {
			logIn.forEach(item => item.style.display = 'none')
			logOut.forEach(item => item.style.display = 'block')
		}
	});
}
