// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDgO43tVBxJlNoRiT7aEnTu-0jH1Ug4WjA",
  authDomain: "real-state-react-fc75a.firebaseapp.com",
  projectId: "real-state-react-fc75a",
  storageBucket: "real-state-react-fc75a.appspot.com",
  messagingSenderId: "35690039579",
  appId: "1:35690039579:web:de5817dfef79afbc6b2bbe"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
