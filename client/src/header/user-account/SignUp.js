import React, {useState} from 'react'
import FormInput from './FormInput';
import './Signup.css'
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export default function SignUp() {

  const [values, setValues] = useState({
    fullname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  
  
  const inputs = [
    {
      id: 1,
      name: "fullname",
      type: "text",
      placeholder: "Full Name",
      errorMessage: "Name should be 4-16 characters and shouldn't include any special characters",
      label: "Username",
      pattern: "^[A-Za-z0-9]{4,16}$",
      required: true,
  },
  {
    id: 2,
    name: "email",
    type: "email",
    placeholder: "Email",
    errorMessage: "Please enter a valid email!",
    label: "Email",
    required: true,
  },
  {
    id: 4,
    name: "password",
    type: "password",
    placeholder: "Password",
    errorMessage: "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character",
    label: "Password",
    pattern: "^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]{8,20}$",
    required: true,
  },
  {
    id: 5,
    name: "confirmPassword",
    type: "password",
    placeholder: "Confirm Password",
    errorMessage: "Passwords don't match",
    label: "Confirm Password",
    pattern: values.password,
    required: true,
  }
]

  // const handleSubmit = (e) => {
  //   e.preventDefault()
  //   console.log(e.target)
  //   console.log(values.fullname)
  //   console.log(values.email)
  //   console.log(values.password)
  // }

  const onChange = (e) => {
    setValues({...values, [e.target.name]: e.target.value})
  }

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault()
    let name = values.fullname
    let email = values.email
    let password = values.password
    console.log(values.fullname, values.email, values.password)
    let result = await fetch('http://localhost:5000/register', {
      method: 'post',
      body: JSON.stringify({name, email, password}),
      headers: {
        'Content-Type': 'application/JSON'
      }
    })
    result = await result.json()
    console.log(result)
    localStorage.setItem("user", JSON.stringify(result))
    if (result) 
    {
      navigate('/')
    }
  }


  useEffect(() => {
    const auth = localStorage.getItem('user')
    if (auth) {
      navigate('/') 
    }
  })

  return (
    <div className="signup-container">
      <div className='signup-content'>
        <form onSubmit={handleSubmit}>
          <div className='signup-title'>Signup</div>
          {inputs.map((input) => (
            <FormInput key={input.id} {...input} value={values[input.name]} onChange={onChange} />
          ))}
          <div className='terms-and-conditions-container'>
              <input type='checkbox' className='checkbox'/>
            <p className='terms-and-conditions'>
            I have read and I understand and accept the WeShare Terms of Use, and WeShare Privacy Policy and Cookie Policy, and here by agree and grant my consent to certain of my information being shared with online exhibitors when I perform any Relevant Interaction and being used, in accordance with the provisions thereof.
            </p>
          </div>
          <button className='submit-btn'>Submit</button>
        </form>
      </div>
    </div>  
  );

  // return (  
  //     <div className='signup-container'>
  //       <div className='signup-title'>Signup</div>

  //       <form className='registration-form' onSubmit={handleSubmit} data-parsley-validate data-parsley-focus="none">
  //         <div className='first-name-container'>
  //           {/* <label>First Name: </label> */}
  //           <input type='text' placeholder='First Name' name='firstname' value={details.firstname} onChange={handleChange} data-parsley-length="[4, 20]"/>
  //           <p>{details.error_message}</p>
  //         </div>
  //         <div className='last-name-container'>
  //           {/* <label>Last Name: </label> */}
  //           <input type='text' placeholder='Last Name' name='lastname' value={details.lastName} onChange={handleChange}/>
  //         </div>
  //         <div className='email-container'>
  //           {/* <label>Email: </label> */}
  //           <input type='email' placeholder='Email' name='email' value={details.email} onChange={handleChange}/>
  //         </div>
  //         <div className='password-container'>
  //           {/* <label>Password: </label> */}
  //           <input type='password' placeholder='Password' name='password' value={details.password} onChange={handleChange} pattern="^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]{8,20}$" required/>
  //         </div>
  //         <div className='confirm-password-container'>
  //           {/* <label>Confirm Password: </label> */}
  //           <input type='password' placeholder='Confirm Password' name='confirmPassword' value={details.confirmPassword} onChange={handleChange}/>
  //         </div>
  //         <div className='signup-btn-container'>
  //           <button type='submit'>Signup</button>
  //         </div>
  //         <div className='terms-and-conditions-container'>
  //           <input type='checkbox' className='checkbox'/>
  //           <p className='terms-and-conditions'>
  //             I have read and I understand and accept the WeShare Terms of Use, and WeShare Privacy Policy and Cookie Policy, and here by agree and grant my consent to certain of my information being shared with online exhibitors when I perform any Relevant Interaction and being used, in accordance with the provisions thereof.
  //           </p>
  //         </div>
  //       </form>
  //     </div>
  // )
}
