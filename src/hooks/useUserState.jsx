import {useEffect, useState} from "react"

export default function useUserState(setUserState = false) {
	const [user, setUser] = useState('hola');
	
	useEffect(() => {
		if (setUserState) {
			setUser(setUserState)
		}
	})
	
	return user;
}