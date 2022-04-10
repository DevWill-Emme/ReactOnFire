import './style.css';
import {useState} from "react";
import {Button, Card, Container, Form, InputGroup, Row} from "react-bootstrap";

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
		<Container className="d-flex justify-content-center align-content-center">
			<Card style={{width: "20rem", padding: "2rem"}}>
				<Form noValidate validated={validated} onSubmit={handleSubmit}>
					<Row className="mb-3">
						<Form.Group>
							<Form.Label>First name</Form.Label>
							<Form.Control
								required
								type="text"
								placeholder="First name"
							/>
							<Form.Control.Feedback>Looks good!</Form.Control.Feedback>
						</Form.Group>
					</Row>
					<Row>
						<Form.Group>
							<Form.Label>Email Address</Form.Label>
							<InputGroup hasValidation>
								<InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
								<Form.Control
									type="email"
									placeholder="Email Address"
									required
								/>
								<Form.Control.Feedback type="invalid">
									Please provide a valid email address
								</Form.Control.Feedback>
							</InputGroup>
						</Form.Group>
					</Row>
					<Button style={{marginTop: "2rem"}} type="submit">Submit form</Button>
				</Form>
			</Card>
		</Container>
	);
}

export default Login;