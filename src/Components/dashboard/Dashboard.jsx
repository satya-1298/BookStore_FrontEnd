import React, { useState } from 'react'
import SignUp from '../Pages/SignUp/SignUp';
import SignIn from '../Pages/SignIn/SignIn';

function Dashboard() {
    const[sign,setSign]=useState(true);
    const handleToggle=()=>{
        setSign(!sign)
    }
  return (
    <div>
        {
            sign ? <SignUp handleToggle={handleToggle}/>:<SignIn handleToggle={handleToggle}/>
        }
    </div>
  )
}

export default Dashboard