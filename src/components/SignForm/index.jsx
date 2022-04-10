import {useState} from "react";
import {Button, Card, Form, Row} from "react-bootstrap";


export default function SForm({children, title = "hello", render = [], btnValue = "Submit"}) {

	const [validated, setValidated] = useState(false);

	const handleSubmit = (event) => {
		const form = event.currentTarget;
		if (form.checkValidity() === false) {
			event.preventDefault();
			event.stopPropagation();
		}
		setValidated(true);
	};
	console.log(render)
	const renderRows = () => {

		return (
			<Row className={"d-flex justify-content-center"}>
				<Form.Label defaultValue={"Test"}/>
			</Row>
		)
	}
	const center = "d-flex justify-content-center"

	return (
		<>
			<Card className={`p-4 shadow ${center}`} style={{borderRadius: "1.5rem"}}>
				<Row className={center}>
					<h1 className={"w-auto"}>{title}</h1>
				</Row>
				<Row className={center}>
					<Form noValidate validated={validated} onSubmit={handleSubmit}>
						{renderRows()}
						<Row className={center}>
							<Button className={"btn w-auto"} type="submit">{btnValue}</Button>
						</Row>
					</Form>
				</Row>
				<Row>{children}</Row>
			</Card>
		</>
	);
}
