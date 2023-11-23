import React, { useState,useEffect } from 'react'
import SignUp from '../Pages/SignUp/SignUp';
import SignIn from '../Pages/SignIn/SignIn';
import Header from './Header';
import Book from '../Books/Book';
import { allbooks } from '../services/BookServices';
import './Dashboard.css'


function Dashboard() {
  const [getbook, setGetbook] = useState([]);
  const getallbook=async()=>{
      let response=await allbooks();
      console.log(response.data.data)

      let newArr=[];
      newArr=response.data.data;
      setGetbook(newArr);
      console.log(newArr);
      console.log(getbook)
  }
  useEffect(()=>{
      console.log("Hellooo")
      getallbook()
  },[getbook]);
  return (
    <div>
      <Header/>
     <div className='books-home'>
      {
        getbook.map((data=>(
            <Book data={data} />
        )))
      }
    </div>
    </div>
  )
}

export default Dashboard