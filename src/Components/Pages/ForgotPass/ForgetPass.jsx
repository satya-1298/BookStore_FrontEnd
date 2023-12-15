import React, { useState } from 'react'
import Logo from '../../Asserts/Logo.png'
import { forget } from '../../services/UserServices';
import { TextField, Button } from '@mui/material';
import { useNavigate } from "react-router-dom"
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import Book2 from '../../Asserts/education.png'
import AppBar from '@mui/material/AppBar';


import './ForgetPass.css'
const RegEmail = new RegExp('[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$');

function ForgetPass() {
    const [val, setVal] = useState({ email: '' });
    const [regdata, setRegdata] = useState({ emailBoarder: false, emailhelper: '' });
    // const navigate = useNavigate()

    const handleChange = {
        handleUserName: (e) =>

            setVal(preState => (
                {
                    ...preState,
                    email: e.target.value
                }
            )),


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

        if (validUserName == true) {


            console.log(val); // Add this line to check the form data
            forget(val)
                .then((response) => {
                    console.log(response);
                    localStorage.setItem("Token", response.data.data);
                    // navigate("/signIn")
                })
                .catch((error) => {
                    console.log(error);
                });
        }

    }
    return (
        <Box sx={{ flexGrow: 1, backgroundColor: 'white' }}>
            <AppBar position="static" >
                <Toolbar className='tool-h'>
                    <img src={Book2} width={29} height={23} className='img-h' ></img>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ display: { xs: 'none', sm: 'block' }, marginRight: '2ch' }}
                    >
                        BookStore
                    </Typography>

                </Toolbar>
            </AppBar>
            <div className='main-f'>
                <div className='Main-forget'>


                    <form className='pass-f'>
                        <div>
                            <div >
                                <h2 className='heading-f'><b>Forgot Your Password?</b></h2>


                            </div>
                            <div className='forget-info'>

                                <div className='email-f'>
                                    <p className='para-f'>Enter your email address and we'll send you a link to reset your password.</p>
                                    <br />
                                    <label ><b>Email</b></label><br />
                                    <TextField id="email-f" variant="filled" autoComplete='off' onChange={handleChange.handleUserName} error={regdata.emailBoarder} helperText={regdata.emailhelper} /><br /><br />
                                    {/* <input type='Email' className="Uname-si" placeholder='Email' onChange={handleChange.handleUserName} error={regdata.emailBoarder} helperText={regdata.emailhelper}/><br /><br /> */}
                                    <input type="submit" id='submit-f' value="Reset Password" onClick={Validation} /><br />

                                </div><br />
                                <div className='create-f'>
                                    <h3 className='text-f' > <a href='/signUp'   style={{
                                    textDecoration: "none",
                                    color: "gray"
                                }}>CREATE ACCOUNT</a></h3>
                                </div>

                            </div>
                        </div>
                    </form>
                </div>
            </div>

        </Box>

    )
}

export default ForgetPass