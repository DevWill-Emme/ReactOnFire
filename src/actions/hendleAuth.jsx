import {
	createUserWithEmailAndPassword,
	getAuth,
	GoogleAuthProvider,
	signInWithEmailAndPassword,
	signInWithPopup
} from 'firebase/auth'

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
export const handleGoogleAuth = async () => {
	const auth = getAuth()
	auth.useDeviceLanguage()
	const provider = new GoogleAuthProvider()
	
	return await signInWithPopup(auth, provider)
	.then((result) => {
		const credential = GoogleAuthProvider.credentialFromResult(result);
		const token = credential.accessToken;
		const user = result.user;
		console.log(token, "   ", user)
		
		return [token, user]
	})
}

