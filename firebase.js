// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAj6SUoMAgqtEsHRsF7ZDKtGGpGYtPLx9Q",
  authDomain: "movie-like-40fee.firebaseapp.com",
  projectId: "movie-like-40fee",
  storageBucket: "movie-like-40fee.appspot.com",
  messagingSenderId: "486538669894",
  appId: "1:486538669894:web:2b6025d26fb6dc056d3f47",
  measurementId: "G-2FKJPXK0HG"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
} else {
    app = firebase.app()
}

const auth = firebase.auth()

export { auth };