import './style.css';
import {Button, Card, Container, Form, Row} from "react-bootstrap";
import {useState} from "react";

function SignUp() {
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
		<Container fluid className="d-flex justify-content-center position-fixed top-50 translate-middle-y">
			<Card
				className="p-4 shadow"
				style={{borderRadius: "1.5rem"}}>
				<Form
					noValidate
					validated={validated}
					onSubmit={handleSubmit}>
					<Row className={"mb-3"}>
						<Form.Group>
							<Form.Label>Email Address</Form.Label>
							<Form.Control
								type={"email"}
								placeholder="Email Address"
								required/>
							<Form.Control.Feedback
								type="invalid">
								Please provide a email address valid
							</Form.Control.Feedback>
						</Form.Group>
					</Row>
					<Row>
						<Form.Group>
							<Form.Label>Password</Form.Label>
							<Form.Control
								type="password"
								placeholder="Password"
								required/>
							<Form.Control.Feedback
								type={"invalid"}>
								password's not valid
							</Form.Control.Feedback>
						</Form.Group>
					</Row>
					<Row className={"d-flex justify-content-center"}>
						<Button
							className="mt-3 w-50"
							type={"submit"}
							variant={"primary"}
						>
							Sign Up
						</Button>
					</Row>
				</Form>
			</Card>
		</Container>
	);
}

export default SignUp;