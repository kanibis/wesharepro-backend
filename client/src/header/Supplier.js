import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Supplier() {

  const navigate = useNavigate()
  const handleChange = () => { 
    var x = document.getElementById('mySelect').value;
    if (x === 'login') {
      navigate('/supplier-login')
      // document.getElementById('mySelect').value = ''
    }
    else if (x === 'register') {
      navigate('/supplier-registration')
      // document.getElementById('mySelect').value = ''
    }
  }

  return (
    <div>
        <select style={{width: '155px', border: '1px dotted gray'}} id='mySelect' onChange={handleChange}>
            <option selected hidden>Sell your services</option>
            <option value='register'>Register as a Supplier</option>
            <option value='login'>Login as a Supplier</option>
        </select>
    </div>
  )
}
