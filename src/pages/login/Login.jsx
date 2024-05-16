import React, { useState } from 'react';
import { loginUserAPi } from '../../apis/Api';
import { toast } from 'react-toastify';

const Login = () => {
  // useState
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  

  // Form validation function
  const validate = () => {
    let isValid = true;
    if (email.trim() === '') {
      setEmailError('Email is empty or invalid');
      isValid = false;
    }

    if (password.trim() === '') {
      setPasswordError('Password is Required');
      isValid = false;
    }

    return isValid;
  };

  // Form submission handler
// Form submission handler
const handleSubmit = (e) => {
  e.preventDefault();

  const isValid = validate();
  if (!isValid) {
    return;
  }

  const data = {
    email: email,
    password: password   
  };

  // Making API requests
  console.log('Login data:', data); // Log data being sent in the request
  loginUserAPi(data)
    .then((res) => {
      console.log('Login response:', res.data); // Log the response data
      // Success: true/false, message
      if (res.data.success === false) {
        toast.error(res.data.message);
      } else {
        toast.success(res.data.message);
        // Redirect or perform any other action upon successful login
      }
    })
    .catch((error) => {
      console.error('Login API error:', error);
      toast.error('An error occurred while logging in. Please try again.');
    });
};


  return (
    <div className='m-3'>
      <h1>
        Login into your account
      </h1>
      <form className='w-50'>
        <label >Enter your Email:{email}</label>
        <input onChange={(e)=>setEmail(e.target.value)}   type="Email" className='form-control' placeholder='Email'  />
        {
                emailError && <p className='text-danger'>{emailError}</p>
              }
        <label >Enter your password:{password}</label>
        <input onChange={(e)=>setPassword(e.target.value)} type="password" className='form-control' placeholder='Password' />
        {
                passwordError && <p className='text-danger'>{passwordError}</p>
              }
        <button onClick={handleSubmit}  className='btn btn-dark mt-2 w-100'>Create Account</button>

      </form>
    </div>
  )

};

export default Login;
