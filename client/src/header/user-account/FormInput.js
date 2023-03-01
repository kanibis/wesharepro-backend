import React, { useState } from 'react'
import "./FormInput.css"

function FormInput(props) {
  const [focused, setFocused] = useState(false)
  const { id, label, errorMessage, onChange, ...inputProps } = props

  const handleFocus = (e) => {
    setFocused(true)
  }

  return (
    <div className='formInput'>
        <input
            {...inputProps}
            onChange={onChange}
            onBlur={handleFocus}
            onFocus={() => inputProps.name === "confirmPassword" && setFocused(true)}
            focused = {focused.toString()} 
        />
        <span>{errorMessage}</span>
    </div>
  )
}

export default FormInput