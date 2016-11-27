/**
 * Created by ahmedoualha on 11/27/16.
 */
// Initialize Firebase
var config = {
    apiKey: "AIzaSyDq0AYhMIqmWaQRTiPJPOr7PKjI2VSNnS8",
    authDomain: "eniscoding.firebaseapp.com",
    databaseURL: "https://eniscoding.firebaseio.com",
    storageBucket: "eniscoding.appspot.com",
    messagingSenderId: "308390755860"
};
firebase.initializeApp(config);

var user = firebase.auth().currentUser;

if (user) {
    // User is signed in.
    alert(user.email);
} else {
    // No user is signed in.
}

function login() {
    console.log("butn pressed");
    firebase.auth().signInWithEmailAndPassword(document.getElementById("inputEmail").value, document.getElementById("inputPassword").value).catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(errorCode);
        alert(errorMessage);
    });

    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            // User is signed in.
            alert(user.email);
        } else {
            // No user is signed in.
            alert("No signed in");
        }
    });
}

function signup() {
    console.log("butn pressed");
    firebase.auth().createUserWithEmailAndPassword(document.getElementById("inputEmail").value, document.getElementById("inputPassword").value).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(errorCode);
        alert(errorMessage);
        // ...
    });
}