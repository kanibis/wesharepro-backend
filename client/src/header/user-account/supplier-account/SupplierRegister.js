import React, {useState} from 'react'
import FormInput from '../FormInput';
import './SupplierRegister.css'

export default function SignUp() {

  const [values, setValues] = useState({
    fullname: "",
    companyname: "",
    servicesprovided: "",
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
    errorMessage: "Name should be 3-30 characters and shouldn't include any special characters",
    label: "Full Name",
    pattern: "^[A-Za-z0-9](?=.*[ ]){3,30}$",
    required: true,
  },
  {
    id: 4,
    name: "email",
    type: "email",
    placeholder: "Business Email",
    errorMessage: "Please enter a valid email!",
    label: "Email",
    required: true,
  },
  {
    id: 2,
    name: "companyname",
    type: "text",
    placeholder: "Company Name",
    errorMessage: "Name should be 3-30 characters",
    label: "Company Name",
    pattern: "^[A-Za-z0-9](?=.*[!@#$%^&*]){3,30}$",
    required: true,
  },
  {
    id: 7,
    name: "company-address",
    type: "text",
    placeholder: "Company Address",
    errorMessage: "Name should be 1-200 characters",
    label: "Company Name",
    pattern: "^[A-Za-z0-9](?=.*[,!@#$%^&* ]){1,200}$",
    required: true,
  },
  {
    id: 3,
    name: "servicesprovided",
    type: "text",
    placeholder: "Services Provided",
    errorMessage: "Name should be 4-16 characters and shouldn't include any special characters",
    label: "Services Provided",
    pattern: "^[A-Za-z0-9]{4,16}$",
    // multiple: true,
    required: true,
  },
  
  {
    id: 5,
    name: "password",
    type: "password",
    placeholder: "Password",
    errorMessage: "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character",
    label: "Password",
    pattern: "^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]{8,20}$",
    required: true,
  },
  {
    id: 6,
    name: "confirmPassword",
    type: "password",
    placeholder: "Confirm Password",
    errorMessage: "Passwords don't match",
    label: "Confirm Password",
    pattern: values.password,
    required: true,
  }
]

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  const onChange = (e) => {
    setValues({...values, [e.target.name]: e.target.value})
  }

  return (
    <div className="signup-container">
      <div className='signup-content'>
        <form onSubmit={handleSubmit}>
          <div className='signup-title'>Supplier Registration</div>
          {inputs.map((input) => (
            <FormInput key={input.id} {...input} value={values[input.name]} onChange={onChange}/>
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
}









// import React, {useState} from 'react'
// import './SupplierRegister.css'

// export default function SignUp() {

//     const [details, setDetails] = useState({
//         firstname: "",
//         lastname: "",
//         companyname: "",
//         servicesprovided: "",
//         email: "",
//         password: "",
//         confirmPassword: "",
//       });

//     const handleSubmit = (e) => {
//     e.preventDefault()
//     }

//     const handleChange = (e) => {
//         const {name, value} = e.target
//         setDetails({...details, [name]:value})
//         console.log(details)
//     }

//   return (
      
//       <div className='signup-container'>
//         <div className='signup-title'>Signup</div>

//         <form className='registration-form' onSubmit={handleSubmit}>
//           <div className='first-name-container'>
//             {/* <label>First Name: </label> */}
//             <input type='text' placeholder='First Name' name='firstname' value={details.firstname} onChange={handleChange}/>
//           </div>
//           <div className='last-name-container'>
//             {/* <label>Last Name: </label> */}
//             <input type='text' placeholder='Last Name' name='lastname' value={details.lastName} onChange={handleChange}/>
//           </div>
//           <div className='company-name'>
//             <input type='text' placeholder='Company Name' name='companyname' value={details.companyname} onChange={handleChange}/>
//           </div>
//           <div className='services-provided'> 
//             <input type='text' placeholder='Services Provided' name='servicesprovided' value={details.servicesprovided} onChange={handleChange}/>
//           </div>
//           <div className='email-container'>
//             {/* <label>Email: </label> */}
//             <input type='email' placeholder='Email' name='email' value={details.email} onChange={handleChange}/>
//           </div>
//           <div className='password-container'>
//             {/* <label>Password: </label> */}
//             <input type='password' placeholder='Password' name='password' value={details.password} onChange={handleChange}/>
//           </div>
//           <div className='confirm-password-container'>
//             {/* <label>Confirm Password: </label> */}
//             <input type='password' placeholder='Confirm Password' name='confirmPassword' value={details.confirmPassword} onChange={handleChange}/>
//           </div>
//           <div className='terms-and-conditions-container'>
//             <input type='checkbox' className='checkbox'/>
//             <p className='terms-and-conditions'>
//               I have read and I understand and accept the WeShare Terms of Use, and WeShare Privacy Policy and Cookie Policy, and here by agree and grant my consent to certain of my information being shared with online exhibitors when I perform any Relevant Interaction and being used, in accordance with the provisions thereof.
//             </p>
//           </div>
//           <div className='signup-btn-container'>
//             <button type='submit'>Signup</button>
//           </div>
//         </form>

//       </div>
//   )
// }
