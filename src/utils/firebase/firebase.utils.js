import { initializeApp } from 'firebase/app';
import {
    getAuth,
    signInWithPopup,
    signInWithRedirect,
    GoogleAuthProvider
} from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCCqzD0ynMr30JQU-EMD48rG7pRpuKIAF0",
    authDomain: "tefaux-brand-db.firebaseapp.com",
    projectId: "tefaux-brand-db",
    storageBucket: "tefaux-brand-db.appspot.com",
    messagingSenderId: "714995786907",
    appId: "1:714995786907:web:e5f2829836e03db15b923e"
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt:'select_account'
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)