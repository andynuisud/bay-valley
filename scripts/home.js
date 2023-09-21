

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
    var userInfoDiv = document.getElementById('user-info');
    if (!user) {
        window.location.href = 'login.html'
    } 
}

var logoutButton = document.getElementById('logout-button');
logoutButton.addEventListener('click', function() {
firebase.auth().signOut()
    .then(function() {
        console.log('User logged out successfully.');
    })
    .catch(function(error) {
        console.error('Error logging out:', error.message);
        });
});

var testChatGBT = document.getElementById("ai-button");

testChatGBT.addEventListener('click', function(){
    console.log("test chat")
})