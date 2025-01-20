// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-analytics.js";
import { 
    getAuth,
    onAuthStateChanged,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut
 } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyB0WUM3oY_um-qidlQKUnnOIdjYhzP_1gs",
  authDomain: "eng-venture-409614.firebaseapp.com",
  projectId: "eng-venture-409614",
  storageBucket: "eng-venture-409614.appspot.com",
  messagingSenderId: "264666422274",
  appId: "1:264666422274:web:6ea51edd38c8f6e7069b1b",
  measurementId: "G-757JEERSKK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

const signup_email = document.getElementById('signup_email');
const signup_password = document.getElementById('signup_password');
const signup_btn = document.getElementById('signup_btn');

const signin_email = document.getElementById('signin_email');
const signin_password = document.getElementById('signin_password');
const signin_btn = document.getElementById('signin_btn');

const user_email = document.getElementById('user_email');
const logout_btn = document.getElementById('logout_btn');

const auth_container = document.getElementById('auth_container');
const user_container = document.getElementById('user_container');



signup_btn.addEventListener('click', createUserAccount);
signin_btn.addEventListener('click', signIn);
logout_btn.addEventListener("click", logout)



onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log('user is logged in')
    const uid = user.uid;
    auth_container.style.display = "none";
    user_container.style.display = "block";
    user_email.innerText = user.email;
    // ...
  } else {
    console.log('user is not logged in')
    auth_container.style.display = "block";
    user_container.style.display = "none";
    // User is signed out
    // ...
  }
});

createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // .. 
  });

  function createUserAccount() {
      createUserWithEmailAndPassword(
        auth,
        signup_email.value,
         signup_password.value
        )
  .then((userCredential) => {
    const user = userCredential.user;
    console.log("User=>", user)
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage)
    // ..
  });
  }

  function signIn(){

    // console.log("email=>", signin_email.value)
    // console.log("password=>", signin_password.value)

    signInWithEmailAndPassword(auth, signin_email.value, signin_password.value)
  .then((userCredential) => {
    console.log("user")
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage)
  });
  }

  function logout(){
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });
  }