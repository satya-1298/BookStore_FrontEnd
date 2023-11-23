import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignIn from '../Pages/SignIn/SignIn';
import SignUp from '../Pages/SignUp/SignUp'
import AuthRoute from './AuthRoute';
import Dashboard from '../dashboard/Dashboard';
import ProtectedRoute from './ProtectedRoute';
import ForgetPass from '../Pages/ForgotPass/ForgetPass';
function Router() {
    return (
        <BrowserRouter>
            <Routes>
            <Route exact path={"/"} element={<SignIn />}/>
                <Route exact path={"/signIn"} element={<SignIn />}/>
                <Route exact path={"/signUp"} element={<SignUp />}/>
                <Route exact path={"/dashboard"} element={<Dashboard />} />
                <Route exact path={"/forgetpassword"} element={<ForgetPass/>}/>
            </Routes>
        </BrowserRouter>)
}

export default Router