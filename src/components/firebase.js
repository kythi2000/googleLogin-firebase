import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD0okD88XRzrwZPvHQRdkaklAu2Y-jDC90",
    authDomain: "signin-cbd43.firebaseapp.com",
    projectId: "signin-cbd43",
    storageBucket: "signin-cbd43.appspot.com",
    messagingSenderId: "984562367097",
    appId: "1:984562367097:web:7821c77edbb7d8614032a8",
    measurementId: "G-TZEMGJE0GD"
  };

firebase.initializeApp(firebaseConfig);

export default {
    auth: firebase.auth(),
    login() {
      const provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithPopup(provider)
      .then(function(result) {
        console.log(result);
      })
      .catch(function(error){
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.email;
        const credential = error.credential;
        console.log(errorCode, errorMessage, email, credential);
        })
    },
    logout() {
      firebase.auth().signOut()
      .then(function() {})
      .catch(function(error) {
        console.log(error)});
    }
}
