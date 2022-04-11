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
		<Container fluid className="d-flex justify-content-center position-relative top-50">
			<Row style={{width: "35rem"}}>
				<SForm title={"Sign In"} renderControl={formRender} btnValue={"SignIn"} inputID={'login'}/>
			</Row>
		</Container>
	);
}

export default Login;