import {Container, Row} from "react-bootstrap";
import SForm from "../../components/SignForm";
import {useState} from "react";
import {handleAuth} from "../../actions/hendleAuth";

function Login() {
	const [email, setEmail] = useState(false)
	const [pass, setPass] = useState(false)
	
	const handleSubmit = {
		dataToSubmit: {email, pass},
		actions: handleAuth
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
					title={"Sign In"}
					btnValue={"SignIn"}
					renderControl={formRender}
					actionSubmit={handleSubmit}
					inputID={'login'}>
					<div className={"d-flex justify-content-center"}>
						<label
							className={'nav-link'}
							onClick={}
						>Forget password?? click here!!</label>
					</div>
				</SForm>
			</Row>
		</Container>
	);
}

export default Login;