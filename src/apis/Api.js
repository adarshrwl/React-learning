import axios from "axios";


// creating an instance of azios 
const Api =axios.create({
    baseURL:"http://localhost:5001",
    withCredentials:true,
    headers:{
        "Content-Type":"multipart/form-data"
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



//creating product API
export const createProductApi=(data)=> Api.post('/api/product/create',data)

//get all products
export const getAllProduct=Api.get('/api/product/get_all_products');
