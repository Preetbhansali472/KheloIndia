 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyAohGQAY2p2_8Kr0vAGGCvW4X-MbDO0xDA",
    authDomain: "kheloindia-ba7cb.firebaseapp.com",
    databaseURL: "https://kheloindia-ba7cb-default-rtdb.firebaseio.com",
    projectId: "kheloindia-ba7cb",
    storageBucket: "kheloindia-ba7cb.appspot.com",
    messagingSenderId: "401068724650",
    appId: "1:401068724650:web:bebd01992b590171d81bd3"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// Initialize va riables
const auth = firebase.auth()
const database = firebase.database()
firebase.analytics();

firebase.auth().onAuthStateChanged((user)=>{
    if(!user){
        location.replace("login.html")
    }else{
        document.getElementById("user").innerHTML = "Hello, "+user.email
    }
})

function logout(){
    firebase.auth().signOut();
  }