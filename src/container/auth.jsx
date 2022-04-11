import {getAuth, onAuthStateChanged} from "firebase/auth";

const auth = getAuth()

export default function TrackAuth() {
	const logIn = document.querySelectorAll('.in');
	const logOut = document.querySelectorAll('.out')
	
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
