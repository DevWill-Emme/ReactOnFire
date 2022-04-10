import {useState} from "react";
import {Button, Card, Col, Form, Row} from "react-bootstrap";


export default function SForm({render}) {
	console.log(render)

	const [validated, setValidated] = useState(false);

	const handleSubmit = (event) => {
		const form = event.currentTarget;
		if (form.checkValidity() === false) {
			event.preventDefault();
			event.stopPropagation();
		}
		setValidated(true);
	};

	return (
		<>
			<Card className="p-4 shadow" style={{borderRadius: "1.5rem"}}>
				<Form noValidate validated={validated} onSubmit={handleSubmit}>
					<Row className={"text-center m-3"}>
						<h1>Sign Up</h1>
					</Row>
					<Row className="mb-3">
						<Form.Group as={Col}>
							<Form.Label>Email Address</Form.Label>
							<Form.Control
								type="email"
								placeholder="Email Address"
								required
							/>
							<Form.Control.Feedback type="invalid">
								Please provide a valid email address
							</Form.Control.Feedback>
						</Form.Group>
					</Row>
					<Row>
						<Form.Group as={Col}>
							<Form.Label>Password</Form.Label>
							<Form.Control
								required
								type="password"
								placeholder="Password"
							/>
							<Form.Control.Feedback type="invalid">Password's invalid</Form.Control.Feedback>
						</Form.Group>
					</Row>
					<Row className="d-flex justify-content-center">
						<Button className="mt-3 w-25" type="submit">Sign Up</Button>
					</Row>
				</Form>
			</Card>
		</>
	);
}
