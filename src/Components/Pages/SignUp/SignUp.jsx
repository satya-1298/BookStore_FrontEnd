import React, { useState } from 'react'
import './SignUp.css'
import { TextField} from '@mui/material';
import { usersignup } from '../../services/UserServices'
import Logo from '../../Asserts/Logo.png'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
const RegUserName = /^([A-Z]{1}[a-z,A-Z]{2,})$/;
const RegEmail = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/;
const RegPassword = /^(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=()])([a-zA-Z\d@#$%^&+=()]*).{8,}$/;
const RegPhone = /[0-9]{10,}$/;


function SignUp(props) {
    const [data, setData] = useState({ userName: '', phoneNumber: '', email: '', password: '' });
    const [regobj, setRegobj] = useState({
        userNameBoarder: false, userNameHelper: '',
        emailBoarder: false, emailHelper: '', passwordBoarder: false, password_Helper: '',
        phoneBoarder:false,phoneHelper:''
        
    })
    const [value, setValue] = useState('Customer');

    const handleChange = (event) => {
      setValue(event.target.value);
    };
  
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
            )),
        changePhone: (e) =>( 
              setData(prevState => (
            {
            
                ...prevState,
                phoneNumber: e.target.value
            }
        ))
        )
          


    }
    console.log(data);
    const verifyValidation = (e) => {
        e.preventDefault();
        let validateUserName = RegUserName.test(data.userName)
        if (validateUserName === false) {
            setRegobj(prevState => (
                {
                    ...prevState,
                    userNameBoarder: true,
                    userNameHelper: 'Enter Valid Information'
                }
            ))
        }
        console.log('Data:', data);

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
        let validatePhone=RegPhone.test(data.phoneNumber)
        if(validatePhone===false)
        {
            setRegobj(prevState=>(
                {
                    ...prevState,
                    phoneHelper:'invalid',
                    phoneBoarder:true
                }
            ))
        }
        if (validateUserName === true && validatePhone===true && validEmail === true && validatePassword === true ) {
          console.log("phone",data);
            usersignup(data).then((response) => {
                console.log(response)
                console.log("hello")
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
                            <h2 className='login' onClick={() => {
                                props.handleToggle();
                            }}><b>LOGIN</b></h2>
                            <h2 className='signup'><b>SIGNUP</b></h2>

                        </div>
                        <div className='signup-info'>
                            <div className='dash'>

                            </div>
                            <div>
                                <br />
                                <label >UserName:</label><br />
                                <TextField id="userName" variant="filled" onChange={changeHandle.changeUserName} error={regobj.userNameBoarder} helperText={regobj.userNameHelper} autoComplete='off' className='input-s' /><br />

                                {/* <input type="text"  className="Uname" onChange={changeHandle.changeUserName} error={regobj.userNameBoarder} helperText={regobj.userNameHelper}  /><br /><br /> */}
                                <label >PhoneNumber</label><br />
                                <TextField id="phone" variant="filled" autoComplete='off' className='input-s' onChange={changeHandle.changePhone} error={regobj.phoneBoarder} helperText={regobj.phoneHelper} /><br />

                                {/* <input type="phoneNo" id='phone' className="Uname" /><br /><br /> */}
                                <label >Email</label><br />
                                <TextField type='email' id="email" variant="filled" onChange={changeHandle.changeEmail} error={regobj.emailBoarder} helperText={regobj.emailHelper} autoComplete='off' className='input-s' /><br />
                                <label  >Password</label><br />
                                <TextField type='password' id="password" variant="filled" autoComplete='off' onChange={changeHandle.changePassword} error={regobj.passwordBoarder} helperText={regobj.password_Helper} className='input-s' /><br /><br />
                                <label><b>Choose a Role</b></label><br />
                                {/* <input type="radio" id="admin"  value="Admin" />
                                <label >Admin</label>
                                <input type="radio" id="customer"  value="Customer" />
                                <label >Customer</label><br/><br/> */}
                                <RadioGroup
                                    aria-labelledby="demo-controlled-radio-buttons-group"
                                    name="controlled-radio-buttons-group"
                                    value={value}
                                    onChange={handleChange}
                                   
                                >
                                    <div>
                                    <FormControlLabel value="Admin" control={<Radio />} label="Admin" />
                                    <FormControlLabel value="Customer" control={<Radio />} label="Customer" />
                                    </div>
                                </RadioGroup>
                                <input type="submit" id='submit-su' value="SignUp" onClick={verifyValidation} />
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SignUp