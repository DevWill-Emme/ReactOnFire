// noinspection ES6UnusedImports
import firebase from "../../firebase-config";
import {confirmPasswordReset, getAuth, verifyPasswordResetCode} from "firebase/auth";
import {useEffect, useState} from "react";
import {Container, Row} from "react-bootstrap";
import SForm from "../../components/SignForm";
import {addClassName, removeClassName} from "../../utils";

//handle data in the url
function getParameterByName(name) {
    const URL_data = window.location.href.split("?")[1].split('&');
    for (let i = 0; i < URL_data.length; i++) {
        if (URL_data[i].split("=")[0] === name) {
            return URL_data[i].split("=")[1]
        }
    }
}

export default function Test() {
    const auth = getAuth()
    const [actionCode, setActionCode] = useState(false)
    const [pass, setPass] = useState(false)
    const [email, setEmail] = useState(false)

    async function handleResetPassword({actionCode, pass}) {
        verifyPasswordResetCode(auth, actionCode).then((userEmail) => {
            setEmail(userEmail);
            console.log("verifyPASS_Reset")
            confirmPasswordReset(auth, actionCode, pass).then((resp) => {
                console.log("confirmPASS_Reset")
            }).catch((error) => {
                // Error occurred during confirmation. The code might have expired or the
                // password is too weak.
            });
        }).catch((error) => {
            // Invalid or expired action code. Ask user to try to reset the password
            // again.
        });
    }

    const handleSubmitPass = {
        dataToSubmit: {pass, actionCode},
        actions: handleResetPassword
    }

    const FormResetPass = [
        {
            label: "Enter your new password",
            controlType: "password",
            controlPlaceholder: "Enter password",
            invalidFeedback: "Password's invalid: make sure it's greater than 6 characters",
            getInputValue: setPass,
            required: true
        }
    ]

    function handleVerifyEmail(auth, actionCode) {

    }


    useEffect(() => {
        const mode = getParameterByName('mode');
        setActionCode(getParameterByName('oobCode'))

        // Handle the user management action.
        let view;
        switch (mode) {
            case 'resetPassword':
                view = document.querySelector('#restPassword')
                removeClassName(view, 'd-none')
                addClassName(view, 'd-flex')
                break
            case 'verifyEmail':
                view = document.querySelector('#verifyEmail')
                removeClassName(view, 'd-none')
                addClassName(view, 'd-flex')
                break
            default:
                console.log('MODE INVALID OR SOME ERROR')
                break
        }
    })

    return (
        <>
            {
                // TODO: this is the view of reset password
            }
            <Container fluid id={"restPassword"} className={'d-flex justify-content-center d-none'}>
                <Row style={{width: "35rem"}}>
                    <SForm
                        title={email}
                        btnValue={"Reset"}
                        renderControl={FormResetPass}
                        actionSubmit={handleSubmitPass}
                        inputID={'reset_pass'}/>
                </Row>
            </Container>

            {
                // TODO: and this is the one to verify email
            }
            <Container fluid id={"verifyEmail"} className={'d-flex justify-content-center d-none'}>
                <Row style={{width: "35rem"}}>
                    <h1>maria, la hormiga</h1>
                </Row>
            </Container>
        </>
    )
}