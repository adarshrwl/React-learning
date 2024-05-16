import axios from "axios";


// creating an instance of azios 
const Api =axios.create({
    baseURL:"http://localhost:5001",
    withCredentials:true,
    headers:{
        "Content-Type":"application/json"
    }
});

//creating test API
export const testApi=()=>Api.get("/test")
//creatoing Login API


//http://localhost:5001/test
export const testApi_new=()=>Api.get("/test_new")

//creating register API
export const registerUserAPi=(data)=>Api.post('/api/user/create',data)

export const loginUserAPi=(data)=>Api.post('/api/user/login',data)
