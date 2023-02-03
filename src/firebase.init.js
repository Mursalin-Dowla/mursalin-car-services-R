// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCihpe690nfY57OqWlmOA7l8TDa8FzoUv4",
  authDomain: "mursalin-car-services.firebaseapp.com",
  projectId: "mursalin-car-services",
  storageBucket: "mursalin-car-services.appspot.com",
  messagingSenderId: "120547700930",
  appId: "1:120547700930:web:c984f7aae77f7bd5e44b5b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;