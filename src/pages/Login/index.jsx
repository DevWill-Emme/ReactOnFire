import {Container, Row} from "react-bootstrap";
import SForm from "../../components/SignForm";

function Login() {
	const formRender = [
		{
			label: "Email Address",
			controlType: "email",
			controlPlaceholder: "Enter Email",
			invalidFeedback: "Please provide a valid email address",
			required: true
		},
		{
			label: "Password",
			controlType: "password",
			controlPlaceholder: "Enter Password",
			invalidFeedback: "Password's invalid",
			required: true
		}
	]

	return (
		<Container fluid className="d-flex justify-content-center">
			<Row className="position-fixed top-50 translate-middle-y" style={{width: "35%"}}>
				<SForm title={"Sign In"} renderControl={formRender} btnValue={"SignIn"}/>
			</Row>
		</Container>
	);
}

export default Login;