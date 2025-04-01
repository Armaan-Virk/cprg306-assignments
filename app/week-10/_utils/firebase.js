import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCb05mvJmrdQmt0FVhSFFyBRTI8yq9Tu-8",
  authDomain: "cprg306-assignments-922ac.firebaseapp.com",
  projectId: "cprg306-assignments-922ac",
  storageBucket: "cprg306-assignments-922ac.firebasestorage.app",
  messagingSenderId: "306861035284",
  appId: "1:306861035284:web:c24553f209df38912c3c01"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);