import {useState} from "react";
import {Card, Form, Row} from "react-bootstrap";


export default function SForm() {

	const [validated, setValidated] = useState(false);

	const handleSubmit = (event) => {
		const form = event.currentTarget;
		if (form.checkValidity() === false) {
			event.preventDefault();
			event.stopPropagation();
		}
		setValidated(true);
	};


	const renderRows = () => {
		return (
			<Row className={"d-flex justify-content-center"}>
				<h1 className={"w-auto"}>Hello World!!!</h1>
			</Row>
		)
	}


	return (
		<>
			<Card className="p-4 shadow" style={{borderRadius: "1.5rem"}}>
				<Form noValidate validated={validated} onSubmit={handleSubmit}>
					{renderRows()}
				</Form>
			</Card>
		</>
	);
}
