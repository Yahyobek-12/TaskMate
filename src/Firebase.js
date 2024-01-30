import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCQRIRpXInBIy21sovsbqNgwCx5Zcat9Yk",
    authDomain: "taskmate-53827.firebaseapp.com",
    projectId: "taskmate-53827",
    storageBucket: "taskmate-53827.appspot.com",
    messagingSenderId: "104334766588",
    appId: "1:104334766588:web:62bdacdde8b1dbb2e60279"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider }