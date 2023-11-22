import React, { useState } from 'react'
import './SignIn.css'
import Logo from '../../Asserts/Logo.png'
import { signin } from '../../services/UserServices';
import { TextField, Button } from '@mui/material';
import {  useNavigate } from "react-router-dom"


const RegPassword = new RegExp('^(?=.*?[A-Za-z])(?=.*?[0-9]).{8,}$');

function ResetPass(props) {
    const [val, setVal] = useState({ password: '', confirmPassword: '' });
    const [regdata, setRegdata] = useState({  passwordBoarder: false, passwordhelper: '' });
    const navigate = useNavigate()

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

    const Validation = (e) => {
        e.preventDefault();
        let validUserName = RegEmail.test(val.email)
        if (validUserName === false) {
            setRegdata(preState => (
                {
                    ...preState,
                    emailBoarder: true,
                    emailhelper: 'Invalid UserName'
                }
            ))        
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
        if (validUserName == true && validpassword == true) {
            signin(val).then((response) => {
                console.log(response)
                localStorage.setItem("Token", response.data.data)
                 navigate("/dashboard")
            })
            
            console.log("hghhg")
            console.log(regdata)
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
                            <h2 className='signup-si'><a href='\signUp'
                            style={{
                                textDecoration:"none",
                                color:"gray"
                            }}><b>SIGNUP</b></a></h2>

                        </div>
                        <div className='signin-info'>
                            <div className='dash-si'>

                            </div>
                            <div>
                                <br />
                                <label >Password</label><br />
                                <TextField id="email" variant="filled"  autoComplete='off'  className='input-s'  onChange={handleChange.handleUserName} error={regdata.emailBoarder} helperText={regdata.emailhelper} /><br/>
                                {/* <input type='Email' className="Uname-si" placeholder='Email' onChange={handleChange.handleUserName} error={regdata.emailBoarder} helperText={regdata.emailhelper}/><br /><br /> */}
                                <label  >ConfirmPassword</label><br />
                                <TextField id="password" variant="filled"  autoComplete='off'  className='input-s' onChange={handleChange.handlePassword} error={regdata.passwordBoarder} helperText={regdata.passwordhelper}  /><br/>
                                {/* <input type="Password" className="Uname-si" placeholder='Password' onChange={handleChange.handlePassword} error={regdata.passwordBoarder} helperText={regdata.passwordhelper}/> */}
                                <p className='forget'>Forget Password?</p>
                                <input type="submit" id='submit-si' value="Login" onClick={Validation}  /><br/><br/>
                                <p className='or'><b>OR</b></p><br/>
                            </div>
                            <div className='loginways'>
                            <input type="button" id='flink' value="Facebook" /><br/><br/>
                            <input type="button" id='glink' value="Google" /><br/><br/>

                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
  )
}

export default ResetPass