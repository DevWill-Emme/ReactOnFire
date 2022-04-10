import SForm from "../../components/SignForm";

export default function Test() {
	const handleFetch = () => {
		return "hola"
	}

	return (
		<>
			<SForm render={[{title: "hola"}, handleFetch]}/>
		</>
	)
}