var firebaseConfig = {
    apiKey: "AIzaSyAqS4gbPLCwP0HMaoMqiwXvsKtaPCqCdF4",
    authDomain: "treasurehunt-efbb8.firebaseapp.com",
    projectId: "treasurehunt-efbb8",
    storageBucket: "treasurehunt-efbb8.appspot.com",
    messagingSenderId: "191632264055",
    appId: "1:191632264055:web:73c36132204263174def72",
  };
  firebase.initializeApp(firebaseConfig);
  function login() {
    var email = document.getElementById("login-email").value;
    var password = document.getElementById("login-password").value;
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        if (userCredential.user.emailVerified) {
          // Redirect to next page on successful login
          window.location.href = "index.html";
        } else {
          alert("Please verify your email address to login.");
        }
      })
      .catch((error) => {
        var errorMessage = error.message;
        alert(errorMessage);
      });
  }

  function signup() {
    var email = document.getElementById("signup-email").value;
    var password = document.getElementById("signup-password").value;
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Send verification email
        userCredential.user.sendEmailVerification().then(function() {
          alert("Verification email sent to " + userCredential.user.email + ". Please check your email to verify your account.");
        }).catch(function(error) {
          alert(error.message);
        });
      })
      .catch((error) => {
        var errorMessage = error.message;
        alert(errorMessage);
      });
  }