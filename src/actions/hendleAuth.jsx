import {createUserWithEmailAndPassword, getAuth} from 'firebase/auth'

const handleAuth = ({email, pass, action}) => {
	const auth = getAuth()
	
	if (action === 'createUser') {
		createUserWithEmailAndPassword(auth, email, pass).then(cred => {
			console.log(cred)
		})
	} else {
		//signInWithEmailAndPassword(auth, email, pass)
	}
}

export default handleAuth;

