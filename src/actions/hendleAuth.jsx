import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword,} from 'firebase/auth'

const handleAuth = async ({email, pass, actions}, response) => {
	const auth = getAuth()
	let user;
	if (actions === 'createUser') {
		user = await createUserWithEmailAndPassword(auth, email, pass)
	} else {
		user = await signInWithEmailAndPassword(auth, email, pass)
	}
	return user
}

export default handleAuth;

