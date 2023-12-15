import axios from "axios"
export const allbooks = () => {
    let response =  axios.get("https://localhost:44348/api/Books/GetAll");
    return response;
}
export const booksbyId = (obj) => {
    console.log(obj.bookId)
    let response =  axios.get(`https://localhost:44348/api/Books/GetById/${obj.bookId}`);
    return response;
}