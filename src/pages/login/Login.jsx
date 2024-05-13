import React, { useState } from 'react'

const Login = () => {
  //use State
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  return (
    <div className='m-3'>
      <h1>
        Login into your account
      </h1>
      <form className='w-50'>
        <label >Enter your Email:{email}</label>
        <input onChange={(e)=>setEmail(e.target.value)} type="Email" className='form-control' placeholder='Email'  />

        <label >Enter your password</label>
        <input onChange={(e)=>setPassword(e.target.value)} type="password" className='form-control' placeholder='Password' />
        
        <button className='btn btn-dark mt-2 w-100'>Create Account</button>

      </form>
    </div>
  )
}

export default Login
