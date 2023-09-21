window.onload = function() {
    firebase.auth().onAuthStateChanged(function(user) {
      displayUserInfo(user);
    });
};
  
var firebaseConfig = {
        apiKey: "AIzaSyCrLMVi24K_yeE-j61ktgcCIM2U78Zq0BY",
        authDomain: "nogo-400b6.firebaseapp.com",
        projectId: "nogo-400b6",
        storageBucket: "nogo-400b6.appspot.com",
        messagingSenderId: "164163315748",
        appId: "1:164163315748:web:c2620c0087399fbf34d0b1",
        measurementId: "G-QWECJ07MTY"
};
  
firebase.initializeApp(firebaseConfig);

  
function displayUserInfo(user) {
    if (user) {
      window.location.href = "home.html"
    } 
}
function signInWithEmailPassword(email, password) {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Sign-in successful, you can access the user information here if needed
        var user = userCredential.user;
        console.log('Login successful!', user);
        // Redirect to a different page after successful login if needed
        // window.location.href = "path-to-redirect";
      })
      .catch((error) => {
        // Handle login errors here
        console.error('Login error:', error.message);
      });
  }
  
  // Function to sign in with Google
  function signInWithGoogle() {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider)
      .then((userCredential) => {
        // Sign-in successful, you can access the user information here if needed
        var user = userCredential.user;
        console.log('Google login successful!', user);
        // Redirect to a different page after successful login if needed
        // window.location.href = "path-to-redirect";
      })
      .catch((error) => {
        // Handle login errors here
        console.error('Google login error:', error.message);
      });
  }
  
  // Get references to elements
  const loginForm = document.getElementById('signup-form');
  
  // Add sign-in event listener
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = loginForm['email'].value;
    const password = loginForm['password'].value;
  
    // Call the signInWithEmailPassword function with the provided email and password
    signInWithEmailPassword(email, password);
  });
  
  // Get reference to the Google Sign-In button
  const googleSignInButton = document.getElementById('sign-up-google');
  
  // Add click event listener to the Google Sign-In button
  googleSignInButton.addEventListener('click', () => {
    // Call the signInWithGoogle function to initiate Google Sign-In
    signInWithGoogle();
  });