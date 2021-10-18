import React from 'react'

export default function Signin() {
    const [UserName,setUserName] = React.useState('')
    const [UserPassword,setUserPassword] = React.useState('')
    const [FirstName,setFirstName] = React.useState('')
    const [LastName,setLastName] = React.useState('')
    const [Email,setEmail] = React.useState('')
    const [Contact,setContact] = React.useState('')
    const [Message, setMessage] = React.useState('')
    const [EmailStatus, setEmailStatus] = React.useState(true)
    const Role = 2;
    const validateEmail = (email) => {
        const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }
    const validate = (value) =>{
        setEmail(value)
        if (Email != ''){
            if(validateEmail(Email)){
                setEmailStatus(true)
                setMessage('')
            } else {
                setEmailStatus(false)
                setMessage('Email Address not valid')
            }
        }
        else{
            setEmailStatus(true)
        }
    }
    const onSubmit = () =>{
        if (UserName != '' && UserPassword != '' && FirstName != ''){
            if (EmailStatus != false){
            //     axios
            //     .post(`http://localhost:4000/addUser`, {
            //       UserName,
            //       UserPassword,
            //       Role,
            //       FirstName,
            //       LastName,
            //       Contact,
            //       Email
            //     })
            //     .then((result) => result.data)
            //     .then((result)=>{
            //       console.log(result);
            //       if (result.code == 1062){
            //           setMessage(result.type+' not available')
            //       } else {
            //           setMessage('')
            //           alert(result)
            //           window.location.pathname = '/login'
                  
            //       }
            //   }
            //       ,(error)=>{
            //       alert('Failed');
            //   })
            }} else {
                setMessage('Fill the required fields')
            }
    }
    
    return (
        <section className="sign-in">
        <div className="form-container">
            <div className="signin-content">
            <div className={`signin-form needs-validation`} novalidate>
                <h2 className="form-title">Be a Trainer</h2>
                <div className="register-form">
                    <div className="form-group">
                        <label for="username"><i className="zmdi zmdi-account material-icons-name"></i></label>
                        <input type="text" name="username" id="username"
                        placeholder="*UserName"
                        value={UserName}
                        onChange={(e)=>setUserName(e.target.value)}
                        required/>
                        {/* <div class="invalid-feedback">
                            You must agree before submitting.
                          </div> */}
                    </div>
                    <div className="form-group">
                        <label for="your_pass"><i className="zmdi zmdi-lock"></i></label>
                        <input type="password" name="your_pass" 
                        placeholder="*Password"
                        value={UserPassword}
                        onChange={(e)=>setUserPassword(e.target.value)}
                        required/>

                    </div>
	    	    	<div className="form-group">
                        <label for="firstname"><i className="zmdi zmdi-account material-icons-name"></i></label>
                        <input type="text" name="firstname"
                        placeholder="*First Name"
                        value={FirstName}
                        onChange={(e)=>setFirstName(e.target.value)}
                        required/>
                    </div>
	    	    		<div className="form-group">
                        <label for="lastname"><i className="zmdi zmdi-account material-icons-name"></i></label>
                        <input type="text" name="lastname"
                        placeholder="Last Name"
                        value={LastName}
                        onChange={(e)=>setLastName(e.target.value)}/>
                    </div>
	    	    			<div className="form-group">
                        <label for="email"><i className="zmdi zmdi-email"></i></label>
                        <input type="email" name="email" className={EmailStatus?"":"notValidate"}
                        placeholder="Email"
                        value={Email}
                        onChange={(e)=>validate(e.target.value)}/>
                    </div>
                    <div className="form-group">
                        <label for="phone"><i className="zmdi zmdi-email"></i></label>
                        <input type="text" name="phone"  
                        placeholder=" Phone Number"
                        value={Contact}
                        onChange={(e)=>setContact(e.target.value)}/>
                    </div>
                    {(Message!= '' && Message!= 'Login Successfully' )?
                                <div class="alert alert-danger" role="alert">{Message}</div>
                                :null}
                    <div className="form-group">
                        <button type="submit"  onClick={()=>onSubmit()}
                        name="signin" className="form-submit btn">Sign in</button>
                    </div>
                </div>
                <div className="social-login">
                    <span className="social-label">Or login with</span>
                    <ul className="socials">
                        <li><a href="#"><i className="display-flex-center zmdi zmdi-facebook"></i></a></li>
                        <li><a href="#"><i className="display-flex-center zmdi zmdi-twitter"></i></a></li>
                        <li><a href="#"><i className="display-flex-center zmdi zmdi-google"></i></a></li>
                    </ul>
                </div>
        </div>
            

            </div>
        </div>
    </section>
    )
}
