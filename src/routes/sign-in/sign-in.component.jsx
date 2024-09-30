import { useEffect } from 'react'
import { getRedirectResult } from 'firebase/auth';
import {
    auth,
    signInWithGooglePopup,
    createUserDocumentFromAuth,
    signInWithGoogleRedirect
} from '../../utils/firebase/firebase.utils'

import SignUpForm from '../../components/sign-up-form/sign-up-form.component';

const SignIn = () => {

    // useEffect(() => {
    //     const getUserRedirectResult = async () => {
    //         const response = await getRedirectResult(auth);
    //         if (response) {
    //             await createUserDocumentFromAuth(response.user);
    //         }
    //     };

    //     getUserRedirectResult();
    // }, []);

    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user)
    };


    return (
        <div>
            <button onClick={logGoogleUser}>
                Sign in with Google Popup
            </button>
            {/* <button onClick={signInWithGoogleRedirect}>
                Sign in with Google Redirect
            </button> */}
            <SignUpForm />
        </div>
    );
};

export default SignIn 