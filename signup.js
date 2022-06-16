function reset(){
  document.getElementsByClassName("form_container").reset();

}


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

// Set up our register function
function register () {
  // Get all our input fields
  email = document.getElementById('email').value
  password = document.getElementById('password').value
  full_name = document.getElementById('full_name').value


  // Validate input fields
  if (validate_email(email) == false) {
    alert('Wrong Email  Format ')
    return
  }
  if (validate_password(password) == false) {
    alert('Password Should Be atleast 6 letters')
    return
  }

  if (validate_field(full_name) == false) {
    alert('Name Cannot be Empty')
    return
  }
 
  // Move on with Auth
  auth.createUserWithEmailAndPassword(email, password)
  .then(function() {
    // Declare user variable
    var user = auth.currentUser

    // Add this user to Firebase Database
    var database_ref = database.ref()

    // Create User data
    var user_data = {
      email : email,
      full_name : full_name,
      password : password,
    }

    // Push to Firebase Database
    database_ref.child('users/' + user.uid).set(user_data)

    // DOne
    alert('User Created!!')
  
  })
  .catch(function(error) {
    // Firebase will use this to alert of its errors
    var error_code = error.code
    var error_message = error.message

    alert(error_message)
  })
}


// Validate Functions
function validate_email(email) {
  expression = /^[^@]+@\w+(\.\w+)+\w$/
  if (expression.test(email) == true) {
    // Email is good
    return true
  } else {
    // Email is not good
    return false
  }
}

function validate_password(password) {
  // Firebase only accepts lengths greater than 6
  if (password < 6) {
    return false
  } else {
    return true
  }
}

function validate_field(field) {
  if (field == null) {
    return false
  }

  if (field.length <= 0) {
    return false
  } else {
    return true
  }
}

