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
//http://localhost:5001/test

