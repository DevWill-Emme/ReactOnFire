import {useState} from "react"

function useRoute(texto) {
	const [state, setState] = useState();

	function dispatch() {
		setState({texto});
	}

	return [state, dispatch];
}

export default useRoute