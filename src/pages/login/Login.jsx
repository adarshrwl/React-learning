import React, { useState } from 'react';
import { loginUserAPi } from '../../apis/Api';
import { toast } from 'react-toastify';

const Login = () => {
  // useState
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  // Email change handler
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  // Password change handler
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  // Form validation function
  const validate = () => {
    let isValid = true;
    if (email.trim() === '') {
      setEmailError('Email is Required');
      isValid = false;
    }

    if (password.trim() === '') {
      setPasswordError('Password is Required');
      isValid = false;
    }

    return isValid;
  };

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
    loginUserAPi(data)
      .then((res) => {
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
      <h1>Login into your account</h1>
      <form className='w-50'>
        <div className='mb-3'>
          <label htmlFor='email' className='form-label'>
            Email
          </label>
          <input
            type='email'
            className='form-control'
            id='email'
            placeholder='Enter your email'
            value={email}
            onChange={handleEmail}
          />
          {emailError && <div className='text-danger'>{emailError}</div>}
        </div>
        <div className='mb-3'>
          <label htmlFor='password' className='form-label'>
            Password
          </label>
          <input
            type='password'
            className='form-control'
            id='password'
            placeholder='Enter your password'
            value={password}
            onChange={handlePassword}
          />
          {passwordError && <div className='text-danger'>{passwordError}</div>}
        </div>
        <button type='submit' className='btn btn-dark mt-2 w-100' onClick={handleSubmit}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
