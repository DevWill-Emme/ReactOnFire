import {
	createUserWithEmailAndPassword,
	getAuth,
	GoogleAuthProvider,
	sendPasswordResetEmail,
	signInWithEmailAndPassword,
	signInWithPopup,
} from 'firebase/auth'
import {dbAdd} from "./handleS";

export const handleAuth = async ({email, pass, actions}) => {
	const auth = getAuth()
	
	if (actions === 'createUser') {
		return await createUserWithEmailAndPassword(auth, email, pass)
			.then(userCred => {
				dbAdd("users", {
					email: userCred.email,
				}, userCred.uid)
			}).catch((error) => {
				console.log(error.code, error.message);
			});
	} else {
		return await signInWithEmailAndPassword(auth, email, pass)
		.then(res => {
			return res
		}).catch((error) => {
			console.log(error.code);
			console.log(error.message);
		});
	}
}
export const handleGoogleAuth = async () => {
	const auth = getAuth()
	auth.useDeviceLanguage()
	const provider = new GoogleAuthProvider()
	
	return await signInWithPopup(auth, provider)
	.then((result) => {
		const credential = GoogleAuthProvider.credentialFromResult(result);
		const token = credential.accessToken;
		return [token]
	}).catch((error) => {
		console.log(error.code, " ", error.message, " ", error.email, " ", GoogleAuthProvider.credentialFromError(error))
	})
}
export const handleResetPasswordEmail = async ({email}) => {
	const auth = getAuth();
	sendPasswordResetEmail(auth, email)
	.then().catch((error) => {
		console.log(error.code, error.message)
	});
}



