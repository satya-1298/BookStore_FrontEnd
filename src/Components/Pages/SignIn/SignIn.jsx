import React, { useState } from 'react'
import './SignIn.css'
import Logo from '../../Asserts/Logo.png'
const RegEmail = new RegExp('[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$');
const RegPassword = new RegExp('^(?=.*?[A-Za-z])(?=.*?[0-9]).{8,}$');

function SignIn(props) {
    const [val, setVal] = useState({ email: '', password: '' });
    const [regdata, setRegdata] = useState({ emailBoarder: false, emailhelper: '', passwordBoarder: false, passwordhelper: '' });
    const handleChange = {
        handleUserName: (e) =>

            setVal(preState => (
                {
                    ...preState,
                    email: e.target.value
                }
            )),

        handlePassword: (p) =>

            setVal(preState => (
                {
                    ...preState,
                    password: p.target.value
                }
            ))

    }
    console.log(val)

    const Validation = () => {
        let validUserName = RegEmail.test(val.email)
        if (validUserName === false) {
           <label>Invalid UserName</label>
        }
        let validpassword = RegPassword.test(val.password)
        if (validpassword === false) {
            setRegdata(preState => (
                {
                    ...preState,
                    passwordBoarder: true,
                    passwordhelper: 'Invalid Password'
                }
            ))
        }
      
    }
  return (
    <div className='main-si'>
            <div className='Main-SignIn'>

                <div className='photo-container-si'>
                    <div className='pic-div-si'>
                        <img src={Logo} className='pic-si'></img>
                    </div>
                    <div className='para-div-si'>
                        <p><b>ONLINE BOOK SHOPPING</b></p>
                    </div>
                </div>
                <form className='signin-container'>
                    <div>
                        <div className='heading-si'>
                            <h2 className='login-si'><b>LOGIN</b></h2>
                            <h2 className='signup-si' onClick={()=>{
                                props.handleToggle();
                            }}><b>SIGNUP</b></h2>

                        </div>
                        <div className='signin-info'>
                            <div className='dash-si'>

                            </div>
                            <div>
                                <br />
                                <label >Email</label><br />
                                <input type='Email' className="Uname-si" placeholder='Email' onChange={handleChange.handleUserName} error={regdata.emailBoarder} helperText={regdata.emailhelper}/><br /><br />
                                <label  >Password</label><br />
                                <input type="Password" className="Uname-si" placeholder='Password' onChange={handleChange.handlePassword} error={regdata.passwordBoarder} helperText={regdata.passwordhelper}/>
                                <p className='forget'>Forget Password?</p>
                                <input type="submit" id='submit-si' value="Login" onClick={Validation}  /><br/><br/>
                                <p className='or'><b>OR</b></p><br/>
                            </div>
                            <div className='loginways'>
                            <input type="submit" id='flink' value="Facebook" /><br/><br/>
                            <input type="submit" id='glink' value="Google" /><br/><br/>

                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
  )
}

export default SignIn