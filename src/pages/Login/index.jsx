import './style.css';
import {useState} from "react";
import {Button, Card, Col, Container, Form, Row} from "react-bootstrap";

function Login() {
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
		<Container fluid className="d-flex justify-content-center">
			<Row className="position-fixed top-50 translate-middle-y">
				<Card className="w-auto p-4 shadow" style={{borderRadius: "1.5rem"}}>
					<Form noValidate validated={validated} onSubmit={handleSubmit}>
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
							<Button className="mt-3 w-50" type="submit">Sign In</Button>
						</Row>
					</Form>
				</Card>
			</Row>
		</Container>
	);
}

export default Login;