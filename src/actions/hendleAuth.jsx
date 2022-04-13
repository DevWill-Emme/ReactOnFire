import {
	createUserWithEmailAndPassword,
	getAuth,
	sendSignInLinkToEmail,
	signInWithEmailAndPassword,
} from 'firebase/auth'
import {actionCodeSettings} from "../actionCodeSettings";

const handleAuth = async ({email, pass, actions}) => {
	const auth = getAuth()
	let user;
	
	if (actions === 'createUser') {
		user = await createUserWithEmailAndPassword(auth, email, pass)
		.then(credUser => {
			sendSignInLinkToEmail(auth, email, actionCodeSettings)
			.then(() => {
				// The link was successfully sent. Inform the user.
				// Save the email locally so you don't need to ask the user for it again
				// if they open the link on the same device.
				window.localStorage.setItem('emailForSignIn', email);
			})
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

export default handleAuth;

