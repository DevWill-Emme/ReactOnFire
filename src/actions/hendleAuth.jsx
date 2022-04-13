import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword,} from 'firebase/auth'

export const handleAuth = async ({email, pass, actions}) => {
	const auth = getAuth()
	let user;
	
	if (actions === 'createUser') {
		user = await createUserWithEmailAndPassword(auth, email, pass)
		.then(credUser => {
			return credUser
		}).catch((error) => {
			console.log(error.code);
			console.log(error.message);
		});
	} else {
		user = await signInWithEmailAndPassword(auth, email, pass)
		.then(res => {
			return res
		}).catch((error) => {
			console.log(error.code);
			console.log(error.message);
		});
	}
	return user
}


