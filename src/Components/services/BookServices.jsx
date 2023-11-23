import axios from "axios"
export const allbooks = () => {
    let response =  axios.get("https://localhost:44348/api/Books/GetAll");
    return response;
}
