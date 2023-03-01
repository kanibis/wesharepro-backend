import React from 'react'
import logoimage from '../assets/logo1.jpeg'

export default function Logo() {
  return (
    <div>
        <a href='/' title="We Share" className='logo-link'>
            <img src={logoimage} className="logo-image" />
        </a>
    </div>
  )
}
