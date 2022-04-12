import {Button, Card, Col, Form, Row} from "react-bootstrap";
//Hooks
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";

import {handleValidateInput} from "../../utils";

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
		                              actions: async () => {
		                              },
		                              dataToSubmit: {}
	                              },
	                              inputID = '',
                              }) {
	const [validated, setValidated] = useState(false);
	const redirect = useNavigate()
	
	const handleSubmit = async (event) => {
		const {actions, dataToSubmit} = actionSubmit
		
		const form = event.currentTarget;
		event.preventDefault();
		event.stopPropagation();
		
		if (form.checkValidity()) {
			await actions(dataToSubmit)
			.then(res => {
				if (res) {
					return redirect('/')
				}
			})
		}
		setValidated(true);
	}
	
	useEffect(() => {
		const emailInput = document.querySelectorAll('[type=email]')
		const passwordInput = document.querySelectorAll('[type=password]')
		
		if (emailInput.length) {
			emailInput.forEach(item => {
				handleValidateInput(item)
				console.log(item.className)
			})
		}
		if (passwordInput.length) {
			passwordInput.forEach(item => {
				handleValidateInput(item)
				console.log(item.className)
			})
		}
	})
	
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
							id={`${i}-${inputID}`}
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
