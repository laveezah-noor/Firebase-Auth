import React, {useState} from 'react'
import './Login.css'
// import signin from 'public/signin-image.jpg';

export default function Login() {
    const [UserName, setUserName] = useState('');
    const [Password, setPassword] = useState('');
    const [Message, setMessage] = useState('');

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
                                <input value={UserName} onChange={(e)=>setUserName(e.target.value)} 
                                type="text" name="your_name" id="your_name" placeholder="User Name"/>
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
                                // onClick={()=>getData()}
                                 type="button" name="signin" id="signin" className="form-submit" value="Log in"/>
                            </div>
                        </div>
                        {/* <div className="social-login">
                            <span className="social-label">Or login with</span>
                            <ul className="socials">
                                <li><a href="#"><i className="display-flex-center zmdi zmdi-facebook"></i></a></li>
                                <li><a href="#"><i className="display-flex-center zmdi zmdi-twitter"></i></a></li>
                                <li><a href="#"><i className="display-flex-center zmdi zmdi-google"></i></a></li>
                            </ul>
                        </div> */}
                    </div>
                </div>
            </div>
        </section>
    )
}
