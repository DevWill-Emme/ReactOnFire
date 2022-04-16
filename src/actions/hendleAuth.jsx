import {
	createUserWithEmailAndPassword,
	getAuth,
	GoogleAuthProvider,
	sendPasswordResetEmail,
	signInWithEmailAndPassword,
	signInWithPopup,
} from 'firebase/auth'
import {dbAdd} from "./handleS";

import {initializeApp} from "firebase/app";
import fireConfig from "../firebase-config";

initializeApp(fireConfig)
const auth = getAuth()

export const handleAuth = async ({email, pass, actions}) => {

	if (actions === 'createUser') {
		return await createUserWithEmailAndPassword(auth, email, pass)
		.then(userCred => {
			return dbAdd("users", {
				email: userCred.user.email,
				gateways: {}
			}, userCred.user.uid)
			.catch(err => {
				console.log(err.message)
			})
		})
		.catch((error) => {
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
	.then((cred) => {
		return dbAdd("users", {
			email: cred.user.email,
			gateways: {}
		}, cred.user.uid)
	})
	.catch((error) => {
		console.log(error.message, GoogleAuthProvider.credentialFromError(error))
	})
}
export const handleResetPasswordEmail = async ({email}) => {
	const auth = getAuth();
	sendPasswordResetEmail(auth, email)
	.then().catch((error) => {
		console.log(error.code, error.message)
	});
}



