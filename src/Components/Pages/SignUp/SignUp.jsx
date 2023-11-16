import React, { useState } from 'react'
import './SignUp.css'
import { TextField, Button } from '@mui/material';
import {usersignup} from '../../services/UserServices'
import Logo from '../../Asserts/Logo.png'
const RegUserName = /^([A-Z]{1}[a-z,A-Z]{2,})$/;
const RegEmail = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/;
const RegPassword = /^(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=()])([a-zA-Z\d@#$%^&+=()]*).{8,}$/;
const RegPhone=/^([0-9]{10}$)/;


function SignUp(props) {
    const [data, setData] = useState({  userName: '', email: '', password: '' });
    const [regobj, setRegobj] = useState({
        userNameBoarder: false, userNameHelper: '',
        emailBoarder: false, emailHelper: '', passwordBoarder: false, password_Helper: ''
    })
    const changeHandle = {
      

        changeUserName: (e) =>
            setData(prevState => (
                {
                    ...prevState,
                    userName: e.target.value
                }
            )),

        changeEmail: (e) =>
            setData(prevState => (
                {
                    ...prevState,
                    email: e.target.value
                }
            )),

        changePassword: (e) =>
            setData(prevState => (
                {
                    ...prevState,
                    password: e.target.value
                }
            ))

    }
    console.log(data);
    const verifyValidation = () => {
        let validateUserName = RegUserName .test(data.userName)
        if (validateUserName === false) {
            setRegobj(prevState => (
                {
                    ...prevState,
                    userNameBoarder: true,
                    userNameHelper: 'Enter Valid Information'
                }
            ))
        }
        let validEmail = RegEmail.test(data.email)
        if (validEmail === false) {
            setRegobj(prevState => (
                {
                    ...prevState,
                    emailBoarder: true,
                    emailHelper: 'InValid Email'
                }
            ))

        }
        let validatePassword = RegPassword.test(data.password)
        if (validatePassword === false) {
            setRegobj(prevState => (
                {
                    ...prevState,
                    passwordBoarder: true,
                    password_Helper: 'invalid'
                }
            ))
        }
        if (validateUserName === true && validEmail === true && validatePassword === true) {
            usersignup(data).then((response) => {
                console.log(response)
             
            }).catch((error) => {
                console.log(error)
            })
        }
    }

    return (


        <div className='main'>
            <div className='Main-SignUp'>

                <div className='photo-container'>
                    <div className='pic-div'>
                        <img src={Logo} className='pic'></img>
                    </div>
                    <div className='para-div'>
                        <p><b>ONLINE BOOK SHOPPING</b></p>
                    </div>
                </div>
                <form className='signup-container'>
                    <div>
                        <div className='heading-su'>
                            <h2 className='login'  onClick={()=>{
                                props.handleToggle();
                            }}><b>LOGIN</b></h2>
                            <h2 className='signup'><b>SIGNUP</b></h2>

                        </div>
                        <div className='signup-info'>
                            <div className='dash'>

                            </div>
                            <div>
                                <br />
                                <label >User Name:</label><br />
                                <TextField id="filled-basic" variant="filled" onChange={changeHandle.changeUserName} error={regobj.userNameBoarder} helperText={regobj.userNameHelper} autoComplete='off'  /><br/>

                                {/* <input type="text"  className="Uname" onChange={changeHandle.changeUserName} error={regobj.userNameBoarder} helperText={regobj.userNameHelper}  /><br /><br /> */}
                                <label >phoneNumber</label><br />
                                <TextField id="filled-basic" variant="filled"  autoComplete='off'  /><br/>

                                {/* <input type="PhoneNumber" id='phone' className="Uname" /><br /><br /> */}
                                <label >Email</label><br />
                                <TextField id="filled-basic" variant="filled"  autoComplete='off'  /><br/>
                                <label  >Password</label><br />
                                <TextField id="filled-basic" variant="filled"  autoComplete='off'  onChange={changeHandle.changePassword}  error={regobj.passwordBoarder} helperText={regobj.password_Helper} /><br/><br/>
                                <label>Choose a Role</label><br/>
                                <input type="radio" id="admin"  value="Admin" />
                                <label >Admin</label>
                                <input type="radio" id="customer"  value="Customer" />
                                <label >Customer</label><br/><br/>
                                <input type="submit" id='submit-su' value="SignUp" onClick={verifyValidation}/>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SignUp