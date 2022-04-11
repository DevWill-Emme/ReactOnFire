import {getAuth, onAuthStateChanged} from "firebase/auth";

const auth = getAuth()

export default function TrackAuth() {
	const logIn = document.querySelectorAll('.in');
	const logOut = document.querySelectorAll('.out')
	
	onAuthStateChanged(auth, (user) => {
		if (user) {
			console.log(logIn)
		} else {
			console.log(logOut)
		}
	});
}
