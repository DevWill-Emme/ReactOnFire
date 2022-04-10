import SForm from "../../components/SignForm";

export default function Test() {
	const formRender = [
		{
			label: "Username",
			controlType: "text",
			controlPlaceholder: "Enter Username",
			invalidFeedback: "user invlaid",
			required: true
		},
		{
			label: "Email Address",
			controlType: "email",
			controlPlaceholder: "Enter Email",
			invalidFeedback: "email not valid",
			required: true
		},
		{
			label: "Password",
			controlType: "password",
			controlPlaceholder: "Enter Password",
			invalidFeedback: "That's not valid",
			required: true
		}
	]
	return (
		<>
			<SForm title={"STesting component"} renderControl={formRender} btnValue={"Accept"}/>
		</>
	)
}