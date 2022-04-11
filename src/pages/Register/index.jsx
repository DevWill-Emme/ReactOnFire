import {Container, Row} from "react-bootstrap";
import SForm from "../../components/SignForm";
import handleAuth from "../../actions/hendleAuth";
import {useState} from "react";
import {useNavigate} from "react-router-dom";

function SignUp() {
	const [email, setEmail] = useState(false)
	const [pass, setPass] = useState(false)
	const redirect = useNavigate()
	
	const handleSubmit = {
		dataToSubmit: {email, pass, actions: 'createUser'},
		actions: {handleAuth, redirect}
	}
	
	const formRender = [
		{
			label: "Email Address",
			controlType: "email",
			controlPlaceholder: "Enter Email",
			invalidFeedback: "Please provide a valid email address",
			getInputValue: setEmail,
			required: true
		},
		{
			label: "Password",
			controlType: "password",
			controlPlaceholder: "Enter Password",
			invalidFeedback: "Password's invalid",
			getInputValue: setPass,
			required: true
		}
	]

	return (
		<Container fluid className="d-flex justify-content-center position-relative top-50">
			<Row style={{width: "35rem"}}>
				<SForm
					title={"Sign Up"}
					btnValue={"SignUp"}
					renderControl={formRender}
					actionSubmit={handleSubmit}
					inputID={'signup'}/>
			</Row>
		</Container>
	);
}

export default SignUp;