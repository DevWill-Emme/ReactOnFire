import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword} from 'firebase/auth'

const handleAuth = async ({email, pass, action}) => {
	const auth = getAuth()
	
	onAuthStateChanged(auth, (user) => {
		if (user) {
			console.log(user, 'log in')
		} else {
			console.log(user, 'log out')
		}
	});
	
	if (action === 'createUser') {
		createUserWithEmailAndPassword(auth, email, pass)
		.then((userCredential) => {
			//console.log(userCredential.user);
		})
		.catch((error) => {
			console.log(error.code);
			console.log(error.message);
		});
	} else {
		signInWithEmailAndPassword(auth, email, pass)
		.then((userCredential) => {
			//console.log(userCredential.user);
		})
		.catch((error) => {
			console.log(error.code);
			console.log(error.message);
		});
	}
}

export default handleAuth;

