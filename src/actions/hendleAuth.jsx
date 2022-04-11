import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword} from 'firebase/auth'

const handleAuth = async ({email, pass, actions}) => {
	const auth = getAuth()
	
	/*onAuthStateChanged(auth, (user) => {
		if (user) {
			console.log(user, 'log in')
		} else {
			console.log(user, 'log out')
		}
	});*/
	
	if (actions === 'createUser') {
		await createUserWithEmailAndPassword(auth, email, pass)
		.then((userCredential) => {
			return userCredential
		})
		.catch((error) => {
			console.log([error.code, error.message])
			return "hole";
		});
	} else {
		await signInWithEmailAndPassword(auth, email, pass)
		.then((userCredential) => {
			return userCredential
		})
		.catch((error) => {
			console.log(error.code);
			console.log(error.message);
		});
	}
}

export default handleAuth;

