import React, {useState} from 'react'
import './SupplierLogin.css'
import {Link} from 'react-router-dom';

export default function Login() {

    const [details, setDetails] = useState({
        email: "",
        password: ""
    })

    const handleSubmit = (e) => {
        e.preventDefault()
      }

    const handleChange = (e) => {
        const {name, value} = e.target
        setDetails({...details, [name]:value})
        console.log(details)
      }

  return (
    <div className='account-container'>        
        <div className='login-title'>Login</div>
        <form className='login-form' onSubmit={handleSubmit}>
          <div className='email-container'>
            {/* <label for='login-email'>Email</label> */}
            <input type='email' name='email' placeholder='Email Address' id='login-email' value={details.email} onChange={handleChange}/>
          </div>
          <div className='password-container'>
            {/* <label for='login-password'>Password</label> */}
            <input type='password' name='password' placeholder='Password' id='login-password' value={details.password} onChange={handleChange}/>
          </div>
          <div className='login-btn-container'>
            <p className='forgot-password'>Forgot Password?</p>
            <button type='submit'>Login</button>
          </div>
          <div className='not-registered'>
            Not yet registered?
          </div>
          <div>
            
            <Link to='/signup' className='signup'>
              <button className='register-btn'>
                  Register Now
              </button>
            </Link>
            
          </div>
          
        </form>
    </div>
  )
}