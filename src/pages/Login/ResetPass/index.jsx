import {Container, Row} from "react-bootstrap";
import SForm from "../../../components/SignForm";
import {useState} from "react";
import {handleResetPasswordEmail} from "../../../actions/hendleAuth";

export default function ResetPass() {
	const [email, setEmail] = useState(false)
	
	const handleSubmit = {
		dataToSubmit: {email},
		actions: handleResetPasswordEmail
	}
	
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
		<Container fluid className="d-flex justify-content-center h-100">
			<Row style={{width: "35rem", alignItems: 'center'}}>
				<SForm
					btnValue={"Send Email"}
					renderControl={formRender}
					actionSubmit={handleSubmit}
					inputID={'emailReset'}/>
			</Row>
		</Container>
	)
}