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
    const URL_data = window.location.href.split("?")[1].split('&');
    for (let i = 0; i < URL_data.length; i++) {
        if (URL_data[i].split("=")[0] === name) {
            return URL_data[i].split("=")[1]
        }
    }
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