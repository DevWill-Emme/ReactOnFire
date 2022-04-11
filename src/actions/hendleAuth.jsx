import {createUserWithEmailAndPassword, getAuth} from 'firebase/auth'

const handleAuth = ({email, pass, action}) => {
	const auth = getAuth()
	
	if (action === 'createUser') {
		createUserWithEmailAndPassword(auth, email, pass)
		.then((userCredential) => {
			// Signed in
			const user = userCredential.user;
			// ...
		})
		.catch((error) => {
			const errorCode = error.code;
			const errorMessage = error.message;
			// ..
		});
	} else {
		/*signInWithEmailAndPassword(auth, email, password)
		.then((userCredential) => {
			// Signed in
			const user = userCredential.user;
			// ...
		})
		.catch((error) => {
			const errorCode = error.code;
			const errorMessage = error.message;
		});*/
	}
}

/*onAuthStateChanged(auth, (user) => {
	if (user) {
		// User is signed in, see docs for a list of available properties
		// https://firebase.google.com/docs/reference/js/firebase.User
		const uid = user.uid;
		// ...
	} else {
		// User is signed out
		// ...
	}
});*/

export default handleAuth;

