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

const signupForm = document.getElementById('signup-form');

function displayUserInfo(user) {
  if (user) {
    window.location.href = "home.html"
  } 
}

signupForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = signupForm['email'].value;
  const password = signupForm['password'].value;

  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      console.log('Sign up successful!', userCredential);
    })
  .catch((error) => {
      console.error('Sign up error:', error.message);
  });
});