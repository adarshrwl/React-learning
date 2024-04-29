import React from 'react'

const Register = () => {
  return (

<>
<div className='m-3'>
      <h1>
        Create an account!!!  
      </h1>

      <form >
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
      </form>
    
    </div>
</>  
)
}

export default Register
