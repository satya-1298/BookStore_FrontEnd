import React from'react';
import { Navigate } from 'react-router-dom';
 
const AuthRoute=({children})=>
{
    if(localStorage.getItem("Token")===undefined || localStorage.getItem("Token")===null)
    {
        return children;
    }
    return(
        <Navigate to="/dashboard"/>

    )
}
export default AuthRoute