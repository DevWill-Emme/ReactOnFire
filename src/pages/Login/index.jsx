import {Button, Container, Row} from "react-bootstrap";
import {useState} from "react";
import {Link} from "react-router-dom";

import SForm from "../../components/SignForm";
import {handleAuth, handleGoogleAuth} from "../../actions/hendleAuth";


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
		<Container fluid className="d-flex justify-content-center h-100">
			<Row style={{width: "35rem", alignItems: 'center'}}>
				<SForm
					title={"Sign In"}
					btnValue={"SignIn"}
					renderControl={formRender}
					actionSubmit={handleSubmit}
					inputID={'login'}>
					<div className={"d-flex justify-content-center p-3"}>
						<Link
							to={'reset_password'}
							className={'nav-link'}
						>Forget password??</Link>
						<Button
							variant={"outline-primary"}
							onClick={handleGoogleAuth}
						>SignUp with Google</Button>
					</div>
				</SForm>
			</Row>
		</Container>
	);
}

export default Login;