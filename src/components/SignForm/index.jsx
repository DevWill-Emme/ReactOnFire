import {useState} from "react";
import {Button, Card, Col, Form, Row} from "react-bootstrap";

const initialControl = {
	label: "Label",
	controlType: "text",
	controlPlaceholder: "",
	invalidFeedback: "That's not valid",
	getInputValue: function () {
	},
	required: false
}

let center = "d-flex justify-content-center"

export default function SForm({
	                              children,
	                              title = "hello",
	                              renderControl = [initialControl],
	                              btnValue = "Submit",
	                              actionSubmit = {
		                              actions: {},
		                              dataToSubmit: {}
	                              },
	                              inputID = '',
                              }) {
	const [validated, setValidated] = useState(false);
	
	const handleSubmit = (event) => {
		const {actions, dataToSubmit} = actionSubmit
		console.log(actions, dataToSubmit)
		
		const form = event.currentTarget;
		event.preventDefault();
		event.stopPropagation();
		if (form.checkValidity()) {
			//action(dataToSubmit)
			return actions.redirect('/')
		}
		setValidated(true);
	};
	
	const renderRows = () => {
		return renderControl.map((control, i) => {
			const {label, controlPlaceholder, controlType, invalidFeedback, required, getInputValue} = control
			return (
				<Row className="mb-3" key={`${inputID}${i}`}>
					<Form.Group as={Col}>
						<Form.Label>{label}</Form.Label>
						<Form.Control
							type={controlType}
							placeholder={controlPlaceholder}
							required={required}
							id={`${controlType}-${inputID}`}
							onChange={(e) => getInputValue(e.currentTarget.value)}
						/>
						<Form.Control.Feedback type="invalid">
							{invalidFeedback}
						</Form.Control.Feedback>
					</Form.Group>
				</Row>
			)
		})
	}


	return (
		<>
			<Card className={`p-4 shadow ${center}`} style={{borderRadius: "1.5rem"}}>
				<Row className={center}>
					<h1 className={"w-auto"}>{title}</h1>
				</Row>
				<Row className={center}>
					<Form noValidate validated={validated} onSubmit={handleSubmit}>
						{renderRows()}
						<Row className={center}>
							<Button className={"btn w-auto"} type="submit">{btnValue}</Button>
						</Row>
					</Form>
				</Row>
				<Row>{children}</Row>
			</Card>
		</>
	);
}
