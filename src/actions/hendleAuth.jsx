import {getAuth} from 'firebase/auth'

const handleAuth = ({email, pass}, action) => {
	const auth = getAuth()
	
	if (action === 'createUser') {
		console.log(action, email, pass)
		//createUserWithEmailAndPassword(auth, email, pass).then( cred => {})
	} else {
		//signInWithEmailAndPassword(auth, email, pass)
	}
}

export default handleAuth;

