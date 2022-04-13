import {Container, Row} from "react-bootstrap";
import SForm from "../../../components/SignForm";
import {useState} from "react";
import {handleResetPasswordEmail} from "../../../actions/hendleAuth";

export default function ResetPass() {
	const [email, setEmail] = useState(false)
	
	const formRender = [
		{
			label: "Please provide an email address",
			controlType: "email",
			controlPlaceholder: "Enter Email",
			invalidFeedback: "Please provide a valid email address",
			getInputValue: setEmail,
			required: true
		}
	]
	
	return (
		<Container fluid className={'d-flex justify-content-center '}>
			<Row style={{width: "35rem"}}>
				<SForm
					btnValue={"Send Email"}
					renderControl={formRender}
					actionSubmit={handleResetPasswordEmail}
					inputID={'reset_password'}/>
			</Row>
		</Container>
	)
}