import React, {useState} from 'react'
import './Login.css'
import { 
    getAuth, 
    signInWithPopup, 
    GoogleAuthProvider,
    signInWithEmailAndPassword } from "firebase/auth";


export default function Login() {
    const auth = getAuth();

    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');
    const [Message, setMessage] = useState('');

    const LoginWithEmail = (email,password) =>{
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(error);
        });
    }
    const LoginWithGoogle = () =>{    
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider).then(function(result) {
            // This gives you a Google Access Token. You can use it to access the Google API.
            var token = result.credential.accessToken;
            // The signed-in user info.
            var user = result.user;
            console.log(user)
            window.location.pathname='/home'
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

    const submit = () =>{
        if (Email != '' && Password != ''){
            LoginWithEmail(Email,Password)
        } else {
            alert('Fill the required fields')
        }
    }

    return ( 
        <section className="sign-in">
            <div className="form-container">
                <div className="signin-content">
                    <div className="signin-image">
                    <figure><img src="signup-image.jpg" alt="sing up image"/></figure>
                        <a className="nav-link"  onClick={()=>{window.location.pathname = '/register'}}>Create an account</a>
                    </div>

                    <div className="signin-form">
                        <h2 className="form-title">Sign in</h2>
                        <div className="register-form" id="login-form">
                            <div className="form-group">
                                <label><i className="zmdi zmdi-account material-icons-name"></i></label>
                                <input value={Email} onChange={(e)=>setEmail(e.target.value)} 
                                type="email" name="your_name" id="your_name" placeholder="Email"/>
                            </div>
                            <div className="form-group">
                                <label><i className="zmdi zmdi-lock"></i></label>
                                <input value={Password} onChange={(e)=>setPassword(e.target.value)} 
                                type="password" name="your_pass" id="your_pass" placeholder="Password"/>
                            </div>
                            {(Message!= '' && Message!= 'Login Successfully' )?
                            <div class="alert alert-danger" role="alert">{Message}</div>
                            :null}
                            <div className="form-group form-button">
                                <input 
                                onClick={()=>submit()}
                                 type="button" name="signin" id="signin" className="form-submit" value="Log in"/>
                            </div>
                        </div>
                        <div className="social-login">
                            <span className="social-label">Or login with</span>
                            <ul className="socials">
                                <li><a href="#"><i className="display-flex-center bi bi-facebook"></i></a></li>
                                <li><a href="#"><i className="display-flex-center bi bi-twitter"></i></a></li>
                                <li><a href="#" onClick={()=>LoginWithGoogle()}><i className="display-flex-center bi bi-google"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
