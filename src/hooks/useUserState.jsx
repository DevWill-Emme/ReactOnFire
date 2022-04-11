import {useState} from "react"

function useUserState(texto) {
	const [state, setState] = useState();
	
	function dispatch() {
		setState({texto});
	}
	
	return [state, dispatch];
}

function

export default useUserState