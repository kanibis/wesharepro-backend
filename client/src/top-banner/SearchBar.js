import React, { useState } from 'react'

export default function SearchBar() {

    const [input, setInput] = useState('')

    const handleChange = (e) => {
        setInput(e.target.value)
        console.log(input)
      }
    
      const handleSubmit = (e) => {
        e.preventDefault()
        setInput('')
      }

  return (
    <div className='search-bar-container'>
        <div className='search-bar'>
            <input type='search' placeholder='Search your destination' onChange={handleChange}/>
            <button onClick={handleSubmit}>Search</button>
        </div>
    </div>
  )
}
