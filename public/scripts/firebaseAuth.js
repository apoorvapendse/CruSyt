const firebaseConfig = {
  apiKey: "AIzaSyBLtGtjaIXZKnb3HXWwUJ7rBdHjwtnOvKc",
  authDomain: "crusyt-5d137.firebaseapp.com",
  projectId: "crusyt-5d137",
  storageBucket: "crusyt-5d137.appspot.com",
  messagingSenderId: "43601306034",
  appId: "1:43601306034:web:c1826605287db0a6c704ab",
  measurementId: "G-2PMKYVX67H",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Google Sign-In provider
const provider = new firebase.auth.GoogleAuthProvider();

// Get a reference to the Google Sign-In button
const googleSignInBtn = document.getElementById("googleSignInBtn");

// Add click event listener to the button
googleSignInBtn.addEventListener("click", () => {
  console.log("clicked");
  // Sign in with Google
  firebase
    .auth()
    .signInWithPopup(provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access Google APIs.
      const credential = result.credential;
      const token = credential.accessToken;

      // The signed-in user info.
      const user = result.user;

      console.log("Signed in as:", user.displayName);
      let threeDaysInMS = 60 * 60 * 24 * 3;
      document.cookie = `username=${user.displayName}; max-age=${threeDaysInMS}`;
      window.location.href = "/search";
      //max-age stores time in seconds and not ms!!!
    })
    .catch((error) => {
      // Handle errors here (e.g., display an error message).
      console.error("Error:", error);
    });
});
