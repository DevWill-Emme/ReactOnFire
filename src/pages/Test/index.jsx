// noinspection ES6UnusedImports
import firebase from "../../firebase-config";
import {getAuth} from "firebase/auth";
import {useEffect} from "react";


//actions
function handleVerifyEmail(auth, actionCode, continueUrl) {

}

function handleResetPassword(auth, actionCode, continueUrl) {

}

//handle data in the url
function getParameterByName(name) {

}

export default function Test() {

    useEffect(() => {
        const auth = getAuth()
        const mode = getParameterByName('mode');
        const actionCode = getParameterByName('oobCode');
        const continueUrl = getParameterByName('continueUrl');

        // Handle the user management action.
        switch (mode) {
            case 'resetPassword':
                // Display reset password handler and UI.
                handleResetPassword(auth, actionCode, continueUrl);
                break;
            case 'verifyEmail':
                // Display email verification handler and UI.
                handleVerifyEmail(auth, actionCode, continueUrl);
                break;
            default:
            // Error: invalid mode.
        }
    })

    return (
        <>

        </>
    )
}