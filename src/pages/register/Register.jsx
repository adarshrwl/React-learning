import React,{useState} from 'react'

const Register = () => {
  //Coding Section
 //Make a state variable
 //Format(variable Name,Changing Varibale Name)
 const[firstName,setFirstName]=useState('')
 const[lirstName,setLastName]=useState('')
 const[email,setEmail]=useState('')
 const[password,setPassword]=useState('')
 const[confirmPassword,setConfirmPassword]=useState('')
return (

<>
<div className='m-3'>
      <h1>
        Create an account!!!  
      </h1>

      <form className='w-50' >
        <label className='mt-3'>First Name:</label>
        <input type="text" className='form-control' placeholder='Enter Your First Name'/>
        <label className='mt-3'>Last Name:</label>
        <input type="text" className='form-control' placeholder='Enter Your Last Name'/>
        <label className='mt-3'>Email:</label>
        <input type="email" className='form-control' placeholder='Enter Your Email Address'/>
        <label className='mt-3'>Password:</label>
        <input type="password" className='form-control' placeholder='Enter Your Password'/>
        <label className='mt-3'>Re-enter your password:</label>
        <input type="password" className='form-control' placeholder='Enter Your Password'/>
        <button type="button" className='btn btn-dark mt-3 w-100'>Create account</button>
      </form>
    
    </div>
</>  
)
}

export default Register


//Make UI complete 
//Make a state to save value of each input temporarily 
//change everytime we write something 
//submmit