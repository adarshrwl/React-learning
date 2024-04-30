// import React,{useState} from 'react'

// const Register = () => {
//   //Coding Section
//  //Make a state variable
//  //Format(variable Name,Changing Varibale Name)
//  const[firstName,setFirstName]=useState('')
//  const[lastName,setLastName]=useState('')
//  const[email,setEmail]=useState('')
//  const[password,setPassword]=useState('')
//  const[confirmPassword,setConfirmPassword]=useState('')

//  //Make a function
//  const handleFirstname=(e)=>{
//   setFirstName(e.target.value)
//  }
//  const handleEmail=(e)=>{
//   setEmail(e.target.value)
//  }

//  const handlePassword=(e)=>{
//   setPassword(e.target.value)
//  }
//  const handleConfirmPassword=(e)=>{
//   setConfirmPassword(e.target.value)
//  }
//  const handleLastname=(e)=>{
//   setLastName(e.target.value)
//  }

//  //Validation
//  var validate=()=>{
//   var isValid=true;
//   if(firstName.trim===''){
//     setFirstNameError('Please Enter First Name')
//     isValid=false;
//   }

//  }

//  //State for Error
// // State for Error
// const [firstNameErr, setFirstNameError] = useState('');
// const [lastNameErr, setLastNameError] = useState('');
// const [emailErr, setEmailError] = useState('');
// const [passwordErr, setPasswordError] = useState('');
// const [confirmPasswordErr, setConfirmPasswordError] = useState('');

 
//  //for button
//  const handleSubmmit=(e)=>{    
//   e.preventDefault()
//   console.log(firstName,lastName,email,password,confirmPassword)
//   var isValid=validate()
//   if(!isValid){
//     return; //Stop the process
//   }
//  }

// return (

// <>
// <div className='m-3'>
//       <h1>
//         Create an account!!!  
//       </h1>

//       <form className='w-50' >
//         <label className='mt-3'>First Name:{firstName}</label>
//         <input onChange={handleFirstname} type="text" className='form-control' placeholder='Enter Your First Name'/>{
//           firstNameErr&&<small>{firstNameErr}</small>
//         }
//         <label className='mt-3'>Last Name:{lastName}</label>
//         <input onChange={handleLastname}type="text" className='form-control' placeholder='Enter Your Last Name'/>
//         <label onChange={lastName} className='mt-3'>Email:{email}</label>
//         <input onChange={handleEmail}type="email" className='form-control' placeholder='Enter Your Email Address'/>
//         <label className='mt-3'>Password:{password}</label>
//         <input onChange={handlePassword}type="password" className='form-control' placeholder='Enter Your Password'/>
//         <label className='mt-3'>Re-enter your password:{confirmPassword}</label>
//         <input onChange={handleConfirmPassword}type="password" className='form-control' placeholder='Enter Your Password'/>
//         <button onClick={handleSubmmit}type="button" className='btn btn-dark mt-3 w-100'>Create account</button>
//       </form>
    
//     </div>
// </>  
// )
// }

// export default Register


// //Make UI complete 
// //Make a state to save value of each input temporarily 
// //change everytime we write something 
// //submmit

import React, {useState} from 'react'

const Register = () => {
  // Coding Section

  // Make a state variables - 5 States
  // Format (variableName, ChangingVarName) = State
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  // State for Error
  const [firstNameError, setFirstNameError] = useState('')
  const [lastNameError, setLastNameError] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const [confirmPasswordError, setConfirmPasswordError] = useState('')

  // Make a function to save the state
  const handleFirstname = (e) => {
    setFirstName(e.target.value)
  }
  
  const handleLastname = (e) =>{
    setLastName(e.target.value)
  }

  const handleEmail = (e) =>{
    setEmail(e.target.value)
  }

  const handlePassword = (e) =>{
    setPassword(e.target.value)
  }

  const handleConfirmPassword = (e) =>{
    setConfirmPassword(e.target.value)
  }

  // Validation
  var validate = () =>{

    var isValid = true;
    if(firstName.trim() === ''){
      setFirstNameError('Firstname is Required')
      isValid = false;
    }
 
    if(lastName.trim() === ''){
      setLastNameError('lastName is Required')
      isValid = false;
    }
 
    if(email.trim() === ''){
      setEmailError('Email is Required')
      isValid = false;
    }

    if(password.trim() === ''){
      setPasswordError('Password is Required')
      isValid = false;
    }
    if(confirmPassword.trim() === ''){
      setConfirmPasswordError('Confirm Password is Required')
      isValid = false;
    }
    
    if(password.trim()!==confirmPassword.trim()){
      setConfirmPasswordError('Passwotd does not match')
      isValid=false;
    }


    return isValid;
    
  }


  // For button
  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Validation
    const isValid = validate()
    if(!isValid){
      return;
    }

    console.log(firstName, lastName, email, password, confirmPassword)
  }

  return (
    <>
        <div className='m-3'>
          <h1>Create an Account!</h1>

          <form className='w-50'>
             <label>Firstname : {firstName}</label>
             <input onChange={handleFirstname} type="text" className='form-control' placeholder='Enter your firstname' />

              {
                firstNameError && <p className='text-danger'>{firstNameError}</p>
              }
             <label className='mt-2'>Lastname</label>
             <input onChange={handleLastname} type="text" className='form-control' placeholder='Enter your lastname' />
             {
                lastNameError && <p className='text-danger'>{lastNameError}</p>
              }
             <label className='mt-2'>Email Address</label>
             <input onChange={handleEmail} type="email" className='form-control' placeholder='Enter your email address' />
             {
                emailError && <p className='text-danger'>{emailError}</p>
              }
             <label className='mt-2'>Password</label>
             <input onChange={handlePassword} type="text" className='form-control' placeholder='Enter your password' />
             {
                passwordError && <p className='text-danger'>{passwordError}</p>
              }
             <label className='mt-2'>Confirm Password</label>
             <input onChange={handleConfirmPassword} type="text" className='form-control' placeholder='Enter your confirm password' />
             {
                confirmPasswordError && <p className='text-danger'>{confirmPasswordError}</p>
              }
              <button onClick={handleSubmit} className='btn btn-dark mt-2 w-100'>Create Account</button>


          </form>


        </div>
    </>
  )
}

export default Register


// Make UI Complete - DONE
// Make a Variables to save value of each input temporarily
// Change everytime we write something
// Submit