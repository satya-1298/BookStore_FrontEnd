import React, { useState, useEffect } from 'react'
import SignUp from '../Pages/SignUp/SignUp';
import SignIn from '../Pages/SignIn/SignIn';
import Header from './Header';
import Book from '../Books/Book';
import { allbooks, booksbyId } from '../services/BookServices';
import './Dashboard.css'
import BookOne from '../Books/BookOne';


function Dashboard() {
  //get all books
  const [getbook, setGetbook] = useState([]);

  //book by id
  const [book,setBook]=useState();

  const[stocks,setStocks]=useState();
   


  //method for book by id
  const idbook=(data)=>{
    setBook(data)
    console.log(data)
  }

  const bbyId=async()=>
  {
     let res= await booksbyId(book.bookId)
    console.log(res)
  }
  

  //methos for all book
  const getallbook = async () => {

    let response = await allbooks();
    console.log(response.data.data)

    let newArr = [];
    newArr = response.data.data;
    setGetbook(newArr);
    

  let sum=0;
  for(let val of newArr){
    sum=sum+val.quantityInStock

  } 
  setStocks(sum)
  console.log(stocks)
  console.log(sum)
   
    console.log(newArr);
    console.log(getbook)
  }
  useEffect(() => {
    console.log("Hellooo")
    getallbook()

  }, [getbook]);

 
  return (
    <div>
      <Header  id={idbook} stockCount={stocks}  />
      {
        book==null ?
        <div className='books-home'>
        {
          getbook.map((data => (
            <Book data={data} id={idbook} />
          )))
        }
      </div> :
      <div className='book-home'>
         <BookOne data={book}/>
      </div>
      }
    </div>
  )
}

export default Dashboard