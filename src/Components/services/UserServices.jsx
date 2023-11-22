import axios from "axios"
export const usersignup = (obj) => {
    let response =  axios.post("https://localhost:44348/api/User/UserRegister", obj);
    return response;
}
export const adminsignup = async(obj) => {
    let response = await  axios.post("https://localhost:44348/api/User/AdminRegister", obj,{
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem("Token")}`
    }
})
    return response;
}
export const signin = (obj) => {
    let response =  axios.post("https://localhost:44348/api/User/Login", obj);
    return response;
}
export const forget=(obj)=>{
    let response=axios.post("https://localhost:44348/api/User/ForgetPassword",obj);
    return response;
}

