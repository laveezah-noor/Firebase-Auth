import firebaseConfig from ''


const facebook_login = (history) => {
    return (dispatch) => {
        var provider = new firebase.auth.FacebookAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function(result) {
            // This gives you a Facebook Access Token. You can use it to access the Facebook API.
            var token = result.credential.accessToken;
            // The signed-in user info.
            var user = result.user;
            let create_user = {
                name: user.displayName,
                email: user.email,
                profile: user.photoURL,
                phoneNumber: user.phoneNumber,
                uid: user.uid
            }
            firebase.database().ref("/").child(`users/${user.uid}`).set(create_user)
            .then(()=>{
                dispatch({ type: "SETUSER", payload: create_user})
                alert("User Login Successful")
                history().push('/sell')
            })
            console.log('user===>',create_user)
          }).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            // var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            // var credential = error.credential;
            
            console.log(errorMessage)
          });
    console.log('Chal raha h')    
    }
}

const google_login = () => {
    return(dispatch) =>{
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function(result) {
            // This gives you a Google Access Token. You can use it to access the Google API.
            var token = result.credential.accessToken;
            // The signed-in user info.
            var user = result.user;
            // ...
          }).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
          });
        console.log('Google Login')
    }
}

const email_sign = (email,password) =>{
    return(dispatch) =>{
        firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // ...
          });
    }
}

const email_login = (email,password) =>{
    return(dispatch) =>{
        firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // ...
          });
    }
}

